﻿using common.libs;
using common.libs.extends;
using System.Text.Json.Serialization;

namespace cmonitor.config
{
    public sealed class Config
    {
        private FileStream fs = null;
        private StreamWriter writer = null;
        private StreamReader reader = null;
        private SemaphoreSlim slim = new SemaphoreSlim(1);
        private string configPath = "./configs/";

        public ConfigInfo Data { get; private set; } = new ConfigInfo();

        public Config()
        {
            if (Directory.Exists(configPath) == false)
            {
                Directory.CreateDirectory(configPath);
            }
            string path = Path.Join(configPath, "config.json");
            fs = new FileStream(path, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read);
            reader = new StreamReader(fs, System.Text.Encoding.UTF8);
            writer = new StreamWriter(fs, System.Text.Encoding.UTF8);

            Load();
            Save();
        }

        private void Load()
        {
            slim.Wait();
            try
            {
                fs.Seek(0, SeekOrigin.Begin);
                string text = reader.ReadToEnd();
                if (string.IsNullOrWhiteSpace(text))
                {
                    return;
                }
                Data = text.DeJson<ConfigInfo>();
            }
            catch (Exception ex)
            {
                Logger.Instance.Error(ex);
            }
            finally
            {
                slim.Release();
            }

        }

        public void Save()
        {
            slim.Wait();
            try
            {
                fs.Seek(0, SeekOrigin.Begin);
                fs.SetLength(0);
                writer.Write(Data.ToJsonFormat());
                writer.Flush();
            }
            catch (Exception ex)
            {
                Logger.Instance.Error(ex);
            }
            finally
            {
                slim.Release();
            }
        }


    }

    public sealed partial class ConfigInfo
    {
        public ConfigCommonInfo Common { get; set; } = new ConfigCommonInfo();

        [JsonIgnore]
        public string Version { get; set; } = "1.0.0.1";
        [JsonIgnore]
        public bool Elevated { get; set; }
    }

    public sealed partial class ConfigCommonInfo
    {
        public string[] Modes { get; set; } = new string[] { "client", "server" };

#if DEBUG
        private LoggerTypes loggerType { get; set; } = LoggerTypes.DEBUG;
#else
        private LoggerTypes loggerType { get; set; } = LoggerTypes.WARNING;
#endif

        [JsonIgnore]
        public string[] Plugins { get; set; } = Array.Empty<string>();

        public LoggerTypes LoggerType
        {
            get => loggerType; set
            {
                loggerType = value;
                Logger.Instance.LoggerLevel = value;
            }
        }
        public int LoggerSize { get; set; } = 100;

        public string[] IncludePlugins { get; set; } = Array.Empty<string>();
        public string[] ExcludePlugins { get; set; } = Array.Empty<string>();
    }
}
