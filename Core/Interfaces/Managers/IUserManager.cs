using Core.Entities;
using System.Collections.Generic;

namespace Core.Interfaces.Managers
{
    public interface IUserManager
    {
        List<User> GetAllUser();
    }
}
