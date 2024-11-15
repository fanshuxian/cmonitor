﻿using linker.config;
using linker.plugins.action;
using linker.startup;
using Microsoft.Extensions.DependencyInjection;

namespace linker.plugins.signin
{
    public sealed class ActionStartup : IStartup
    {
        public StartupLevel Level => StartupLevel.Normal;
        public string Name => "action";

        public bool Required => false;

        public string[] Dependent => new string[] { "signin", };

        public StartupLoadType LoadType => StartupLoadType.Normal;


        public void AddClient(ServiceCollection serviceCollection, FileConfig config)
        {
            serviceCollection.AddSingleton<ActionApiController>();
            serviceCollection.AddSingleton<ActionTransfer>();

            serviceCollection.AddSingleton<SignInArgsAction>();
            serviceCollection.AddSingleton<RelayValidatorAction>();
            serviceCollection.AddSingleton<SForwardValidatorAction>();
        }

        public void AddServer(ServiceCollection serviceCollection, FileConfig config)
        {
            serviceCollection.AddSingleton<ActionTransfer>();

            serviceCollection.AddSingleton<SignInArgsAction>();
            serviceCollection.AddSingleton<RelayValidatorAction>();
            serviceCollection.AddSingleton<SForwardValidatorAction>();
            
        }

        public void UseClient(ServiceProvider serviceProvider, FileConfig config)
        {
        }

        public void UseServer(ServiceProvider serviceProvider, FileConfig config)
        {
        }
    }
}
