using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Api.Request
{
    public class LoginRequestModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
