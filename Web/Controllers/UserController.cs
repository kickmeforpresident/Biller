using Core.Entities;
using Core.Interfaces.Managers;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserManager _manager;

        public UserController(IUserManager manager)
        {
            _manager = manager;
        }

        [HttpGet("[action]")]
        public IEnumerable<User> GetUsers()
        {
            return _manager.GetAllUser();
        }
    }
}