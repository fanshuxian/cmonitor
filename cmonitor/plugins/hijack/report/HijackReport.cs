﻿using cmonitor.client;
using cmonitor.client.runningConfig;
using cmonitor.client.report;
using cmonitor.config;
using common.libs;
using MemoryPack;

namespace cmonitor.plugins.hijack.report
{
    public sealed class HijackReport : IClientReport
    {
        public string Name => "Hijack";

        private readonly HijackConfig hijackConfig;
        private readonly IRunningConfig clientConfig;
        private readonly IHijack hijack;
        private readonly ClientSignInState clientSignInState;

        private HijackReportInfo hijackReportInfo = new HijackReportInfo();
        private long ticks = DateTime.UtcNow.Ticks;

        public HijackReport(IHijack hijack, HijackConfig hijackConfig, IRunningConfig clientConfig, Config config, ClientSignInState clientSignInState)
        {
            this.hijack = hijack;
            this.hijackConfig = hijackConfig;
            this.clientConfig = clientConfig;
            this.clientSignInState = clientSignInState;
            Init();
        }

        private void Init()
        {
            try
            {
                clientSignInState.NetworkFirstEnabledHandle += hijack.Start;

                HijackConfig config = clientConfig.Get(new HijackConfig { });

                hijackConfig.DeniedProcesss = config.DeniedProcesss;
                hijackConfig.AllowProcesss = config.AllowProcesss;
                hijackConfig.DeniedDomains = config.DeniedDomains;
                hijackConfig.AllowDomains = config.AllowDomains;
                hijackConfig.DeniedIPs = config.DeniedIPs;
                hijackConfig.AllowIPs = config.AllowIPs;
                hijackConfig.DomainKill = config.DomainKill;
                hijackConfig.HijackIds1 = config.HijackIds1;
                hijackConfig.HijackIds2 = config.HijackIds2;
                UpdateRules();
            }
            catch (Exception ex)
            {
                Logger.Instance.Error(ex);
            }
        }

        public void Update(HijackSetRuleInfo info)
        {
            hijackConfig.AllowDomains = info.Rules.AllowDomains;
            hijackConfig.DeniedDomains = info.Rules.DeniedDomains;
            hijackConfig.AllowProcesss = info.Rules.AllowProcesss;
            hijackConfig.DeniedProcesss = info.Rules.DeniedProcesss;
            hijackConfig.AllowIPs = info.Rules.AllowIPs;
            hijackConfig.DeniedIPs = info.Rules.DeniedIPs;
            hijackConfig.DomainKill = info.Rules.DomainKill;
            hijackConfig.HijackIds1 = info.Ids1;
            hijackConfig.HijackIds2 = info.Ids2;

            clientConfig.Set(hijackConfig);

            UpdateRules();
        }

        private void UpdateRules()
        {
            hijack.SetProcess(hijackConfig.AllowProcesss, hijackConfig.DeniedProcesss);
            hijack.SetDomain(hijackConfig.AllowDomains, hijackConfig.DeniedDomains, hijackConfig.DomainKill);
            hijack.SetIP(hijackConfig.AllowIPs, hijackConfig.DeniedIPs);
            hijack.UpdateRules();
        }

        public object GetReports(ReportType reportType)
        {
            hijackReportInfo.Upload = hijack.UdpSend + hijack.TcpSend;
            hijackReportInfo.Download = hijack.TcpReceive + hijack.UdpReceive;
            hijackReportInfo.Count = (ulong)(hijackConfig.AllowIPs.Length + hijackConfig.DeniedIPs.Length + hijackConfig.AllowDomains.Length + hijackConfig.DeniedDomains.Length + hijackConfig.AllowProcesss.Length + hijackConfig.DeniedProcesss.Length);
            hijackReportInfo.Ids1 = hijackConfig.HijackIds1;
            hijackReportInfo.Ids2 = hijackConfig.HijackIds2;
            hijackReportInfo.DomainKill = hijackConfig.DomainKill;

            long _ticks = DateTime.UtcNow.Ticks;
            if (((_ticks - ticks) / TimeSpan.TicksPerMillisecond >= 300 && hijackReportInfo.Updated()) || reportType == ReportType.Full)
            {
                ticks = _ticks;
                return hijackReportInfo;
            }
            return null;
        }
    }

    public sealed class HijackReportInfo:ReportInfo
    {
        public ulong Upload { get; set; }
        public ulong Download { get; set; }
        public ulong Count { get; set; }

        public string[] Ids1 { get; set; }
        public string[] Ids2 { get; set; }
        public bool DomainKill { get; set; }

        public override int HashCode()
        {
            return Upload.GetHashCode() ^ Download.GetHashCode() ^ Count.GetHashCode() ^ Ids1.GetHashCode() ^ Ids2.GetHashCode();
        }

    }

    [MemoryPackable]
    public sealed partial class HijackSetRuleInfo
    {
        public HijackRuleUpdateInfo Rules { get; set; }
        public string[] Ids1 { get; set; }
        public string[] Ids2 { get; set; }
    }


    [MemoryPackable]
    public sealed partial class HijackRuleUpdateInfo
    {
        /// <summary>
        /// 进程白名单
        /// </summary>
        public string[] AllowProcesss { get; set; } = Array.Empty<string>();
        /// <summary>
        /// 进程黑名单
        /// </summary>
        public string[] DeniedProcesss { get; set; } = Array.Empty<string>();

        /// <summary>
        /// 域名白名单
        /// </summary>
        public string[] AllowDomains { get; set; } = Array.Empty<string>();
        /// <summary>
        /// 域名黑名单
        /// </summary>
        public string[] DeniedDomains { get; set; } = Array.Empty<string>();

        /// <summary>
        /// ip白名单
        /// </summary>
        public string[] AllowIPs { get; set; } = Array.Empty<string>();
        /// <summary>
        /// ip黑名单
        /// </summary>
        public string[] DeniedIPs { get; set; } = Array.Empty<string>();

        public bool DomainKill { get; set; }
    }
}
