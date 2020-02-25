using Core.Interfaces.Managers;
using Core.Interfaces.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Models.Api.Request;
using Models.Settings;
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
        private readonly Settings _settings;

        public IConfiguration Configuration { get; }

        public AuthManager(IConfiguration configuration, IUserRepository repository, IOptions<Settings> settings)
        {
            Configuration = configuration;
            _userRepository = repository;
            _settings = settings?.Value ?? throw new ArgumentNullException(nameof(settings));
        }

        public string GetToken(LoginRequestModel model)
        {
            var user = _userRepository.GetUserByUserName(model.UserName);

            if (user != null && BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
            {
                var appHostURL = $"{_settings.AppSettings.Hosting.Protocol}://{_settings.AppSettings.Hosting.Host}";
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_settings.AppSettings.Jwt.JwtSecret));
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
