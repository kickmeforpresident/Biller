using Core.Interfaces.Managers;
using Core.Managers;
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
            services.AddScoped<IAuthManager, AuthManager>();
            services.AddScoped<IInvoiceManager, InvoiceManager>();
        }
    }
}
