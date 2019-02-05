using Core.Interfaces.UseCases;
using Core.UseCases;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core
{
    public static class CoreModule
    {
        public static void AddCoreModule(this IServiceCollection services)
        {
            services.AddScoped<IUserManager, UserManager>();
        }
    }
}
