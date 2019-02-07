using Models.Api.Request;

namespace Core.Interfaces.Managers
{
    public interface IAuthManager
    {
        string GetToken(LoginRequestModel model);
    }
}
