using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Interfaces.Managers;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Managers
{
    public class UserManager : IUserManager
    {
        private readonly IUserRepository _userRepository;

        public UserManager(IUserRepository repository)
        {
            _userRepository = repository;
        }

        public List<User> GetAllUser()
        {
            return _userRepository.GetAll();
        }
    }
}
