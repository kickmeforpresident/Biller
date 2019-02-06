using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interfaces.UseCases;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Models.Api.Request;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthManager _manager;

        public IConfiguration Configuration { get; }

        public AuthController(IConfiguration configuration, IAuthManager manager)
        {
            Configuration = configuration;
            _manager = manager;
        }

        // POST api/auth/login
        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody]LoginRequestModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            var tokenString = _manager.GetToken(model);

            if (tokenString != null)
            {
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}