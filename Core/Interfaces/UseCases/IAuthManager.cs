using Models.Api.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Interfaces.UseCases
{
    public interface IAuthManager
    {
        string GetToken(LoginRequestModel model);
    }
}
