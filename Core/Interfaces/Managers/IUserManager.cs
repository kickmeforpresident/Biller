using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces.Managers
{
    public interface IUserManager
    {
        List<User> GetAllUser();
    }
}
