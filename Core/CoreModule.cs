using Core.Interfaces.Managers;
using Core.Managers;
using Microsoft.Extensions.DependencyInjection;

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
