using Core.Entities;
using System.Collections.Generic;

namespace Core.Interfaces.Repositories
{
    public interface IUserRepository : IGetUserByUserName
    {
        User GetById(int id);
        List<User> GetAll();
        User Add(User entity);
        User Update(User entity);
        void Delete(User entity);
    }

    public interface IGetUserByUserName
    {
        User GetUserByUserName(string userName);
    }
}
