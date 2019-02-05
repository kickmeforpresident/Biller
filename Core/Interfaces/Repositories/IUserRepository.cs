using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetById(int id);
        Task<List<User>> List();
        User Add(User entity);
        User Update(User entity);
        void Delete(User entity);
    }
}
