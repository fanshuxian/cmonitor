﻿using common.libs.extends;
using System.Buffers.Binary;
using System.Net;
using System.Net.Sockets;

namespace cmonitor.plugins.tunnel.compact
{
    public sealed class TunnelCompactStun : ITunnelCompact
    {
        public string Name => "Stun";
        public TunnelCompactType Type => TunnelCompactType.Stun;

        public TunnelCompactStun()
        {
        }

        public async Task<TunnelCompactIPEndPoint> GetExternalIPAsync(IPEndPoint server)
        {
            using UdpClient udpClient = new UdpClient();
            udpClient.Client.Reuse(true);

            try
            {
                byte[] stunRequest = new byte[] {
                    0x00, 0x01,
                    0x00, 0x00,
                    0x21, 0x12, 0xA4, 0x42,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
                    0x00,0x01,0x00,0x00
                 };
                await udpClient.SendAsync(stunRequest, stunRequest.Length);

                IPEndPoint remoteEP = new IPEndPoint(IPAddress.Any, 0);
                UdpReceiveResult stunResponse = await udpClient.ReceiveAsync();

                Memory<byte> data = stunResponse.Buffer.AsMemory(20);
                ushort attrTyoe = BitConverter.ToUInt16(data.Span);
                data = data.Slice(2);
                ushort length = BitConverter.ToUInt16(data.Span);
                data = data.Slice(2);

                //reserved
                data = data.Slice(1);

                //AddressFamily
                byte afa = data.Span[0];
                data = data.Slice(1);

                ushort port = (ushort)(BinaryPrimitives.ReadUInt16BigEndian(data.Span) ^ 0x2112);
                data = data.Slice(2);

                IPAddress ip = null;
                if (afa == 0x01)
                {
                    uint value = BinaryPrimitives.ReadUInt32BigEndian(data.Slice(0, 4).Span) ^ 0x2112A442;
                    ip = new IPAddress(BitConverter.GetBytes(BinaryPrimitives.ReverseEndianness(value)));
                }
                else
                {
                    ip = new IPAddress(data.Slice(0, 16).Span);
                }

                return new TunnelCompactIPEndPoint { Local = udpClient.Client.LocalEndPoint as IPEndPoint, Remote = new IPEndPoint(ip, port) };

            }
            catch (Exception)
            {
            }
            return null;
        }
    }
}