using Core.Interfaces.Managers;
using Core.Interfaces.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Models.Api.Request;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Core.Managers
{
    public class AuthManager : IAuthManager
    {
        private readonly IUserRepository _userRepository;

        public IConfiguration Configuration { get; }

        public AuthManager(IConfiguration configuration, IUserRepository repository)
        {
            Configuration = configuration;
            _userRepository = repository;
        }

        public string GetToken(LoginRequestModel model)
        {
            // Get user from repo
            var user = _userRepository.GetUserByUserName(model.UserName);

            if (user != null)
            {
                // TODO: Refactor this
                string host = Configuration.GetSection("AppSettings").GetSection("Hosting").GetSection("Host").Value;
                string protocol = Configuration.GetSection("AppSettings").GetSection("Hosting").GetSection("Protocol").Value;
                string port = Configuration.GetSection("AppSettings").GetSection("Hosting").GetSection("Protocol").Value;
                string jwtSecret = Configuration.GetSection("AppSettings").GetSection("Jwt").GetSection("JwtSecret").Value;

                var appHostURL = $"{protocol}://{host}:{port}";

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOptions = new JwtSecurityToken(
                    issuer: appHostURL,
                    audience: appHostURL,
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                return tokenString;
            }

            return null;

        }
    }
}
