using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Settings
{
    public class AppSettings
    {
        public Hosting Hosting { get; set; }
        public Jwt Jwt { get; set; }
    }
}
