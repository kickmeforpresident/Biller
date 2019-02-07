using Core.Entities;
using Core.Interfaces.Managers;
using Core.Interfaces.Repositories;
using System.Collections.Generic;

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
