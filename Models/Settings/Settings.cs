using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Settings
{
    public class Settings
    {
        public Logging Logging { get; set; }
        public string AllowedHosts { get; set; }
        public ConnectionStrings ConnectionStrings { get; set; }
        public AppSettings AppSettings { get; set; }
    }
}
