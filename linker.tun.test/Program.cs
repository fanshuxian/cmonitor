﻿using System.Buffers.Binary;
using System.Net;
using System.Runtime.InteropServices;

namespace linker.tun.test
{
    internal class Program
    {
        public static LinkerTunDeviceAdapter linkerTunDeviceAdapter;
        static void Main(string[] args)
        {
            linkerTunDeviceAdapter = new LinkerTunDeviceAdapter();
            linkerTunDeviceAdapter.Initialize("linker111", new LinkerTunDeviceCallback());
            linkerTunDeviceAdapter.Setup(IPAddress.Parse("192.168.55.2"), 24, 1416);

            if (string.IsNullOrWhiteSpace(linkerTunDeviceAdapter.Error))
            {
                Console.WriteLine(linkerTunDeviceAdapter.Error);
            }
            Console.ReadLine();
        }
    }

    public sealed class LinkerTunDeviceCallback : ILinkerTunDeviceCallback
    {
        public async Task Callback(LinkerTunDevicPacket packet)
        {
            ICMPAnswer(packet);
            await Task.CompletedTask;
        }
        private unsafe void ICMPAnswer(LinkerTunDevicPacket packet)
        {
            Memory<byte> writableMemory = MemoryMarshal.AsMemory(packet.IPPacket);
            fixed (byte* ptr = writableMemory.Span)
            {
                //icmp && request
                if (ptr[9] == 1 && ptr[20] == 8)
                {
                    Console.WriteLine($"ICMP to {new IPAddress(writableMemory.Span.Slice(16, 4))}");

                    uint dist = BinaryPrimitives.ReadUInt32LittleEndian(writableMemory.Span.Slice(16, 4));


                    //目的地址变源地址，
                    *(uint*)(ptr + 16) = *(uint*)(ptr + 12);
                    //假装是网关回复的
                    *(uint*)(ptr + 12) = dist;

                    //计算一次IP头校验和
                    *(ushort*)(ptr + 10) = 0;
                    *(ushort*)(ptr + 10) = Program.linkerTunDeviceAdapter.Checksum((ushort*)ptr, 20);

                    //response
                    *(ushort*)(ptr + 20) = 0;

                    //计算ICMP校验和
                    *(ushort*)(ptr + 22) = 0;
                    *(ushort*)(ptr + 22) = Program.linkerTunDeviceAdapter.Checksum((ushort*)(ptr + 20), (uint)(writableMemory.Length - 20));

                    Program.linkerTunDeviceAdapter.Write(writableMemory);
                }
            }
        }
    }
}
