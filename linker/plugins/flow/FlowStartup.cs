﻿using linker.config;
using linker.plugins.flow.messenger;
using linker.plugins.messenger;
using linker.plugins.relay;
using linker.plugins.relay.server;
using linker.plugins.sforward.proxy;
using linker.plugins.tunnel;
using linker.startup;
using Microsoft.Extensions.DependencyInjection;

namespace linker.plugins.flow
{
    public sealed class FlowStartup : IStartup
    {
        public StartupLevel Level => StartupLevel.Bottom;
        public string Name => "flow";
        public bool Required => false;
        public string[] Dependent => new string[] { };
        public StartupLoadType LoadType => StartupLoadType.Dependent;

        public void AddClient(ServiceCollection serviceCollection, FileConfig config)
        {
            serviceCollection.AddSingleton<FlowClientApiController>();
            serviceCollection.AddSingleton<FlowTransfer>();
            serviceCollection.AddSingleton<FlowTypesLoader>();

            serviceCollection.AddSingleton<MessengerFlow>();
            serviceCollection.AddSingleton<IMessengerResolver, MessengerResolverFlow>();
            serviceCollection.AddSingleton<IMessengerSender, MessengerSenderFlow>();

            serviceCollection.AddSingleton<RelayFlow>();
            serviceCollection.AddSingleton<RelayResolver, RelayResolverFlow>();

            serviceCollection.AddSingleton<RelayReportFlow>();
            serviceCollection.AddSingleton<RelayReportResolver, RelayReportResolverFlow>();

        }

        public void AddServer(ServiceCollection serviceCollection, FileConfig config)
        {
            serviceCollection.AddSingleton<FlowMessenger>();
            serviceCollection.AddSingleton<FlowTransfer>();
            serviceCollection.AddSingleton<FlowTypesLoader>();
            serviceCollection.AddSingleton<FlowResolver>();

            serviceCollection.AddSingleton<MessengerFlow>();
            serviceCollection.AddSingleton<IMessengerResolver, MessengerResolverFlow>();
            serviceCollection.AddSingleton<IMessengerSender, MessengerSenderFlow>();

            serviceCollection.AddSingleton<RelayFlow>();
            serviceCollection.AddSingleton<RelayResolver, RelayResolverFlow>();

            serviceCollection.AddSingleton<ExternalFlow>();
            serviceCollection.AddSingleton<ExternalResolver, ExternalResolverFlow>();

            serviceCollection.AddSingleton<SForwardFlow>();
            serviceCollection.AddSingleton<SForwardProxy, SForwardProxyFlow>();

            serviceCollection.AddSingleton<RelayReportFlow>();
            serviceCollection.AddSingleton<RelayReportResolver, RelayReportResolverFlow>();
        }

        public void UseClient(ServiceProvider serviceProvider, FileConfig config)
        {
            FlowTypesLoader flowTypesLoader = serviceProvider.GetService<FlowTypesLoader>();
        }

        public void UseServer(ServiceProvider serviceProvider, FileConfig config)
        {
            FlowTypesLoader flowTypesLoader = serviceProvider.GetService<FlowTypesLoader>();
        }
    }
}
