using Core;
using Infrastructure;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using System;
using System.Text;

namespace Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // TODO: Refactor this
            string host = Configuration.GetSection("AppSettings").GetSection("Hosting").GetSection("Host").Value;
            string protocol = Configuration.GetSection("AppSettings").GetSection("Hosting").GetSection("Protocol").Value;
            string port = Configuration.GetSection("AppSettings").GetSection("Hosting").GetSection("Protocol").Value;
            string jwtSecret = Configuration.GetSection("AppSettings").GetSection("Jwt").GetSection("JwtSecret").Value;

            var appHostURL = $"{protocol}://{host}:{port}";

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    ValidIssuer = appHostURL,
                    ValidAudience = appHostURL,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret))
                };
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            var connection = Configuration.GetConnectionString("DefaultConnection");

            //services.AddDbContextPool<AppDbContext>( // replace "YourDbContext" with the class name of your DbContext
            //    options => options.UseMySql(connection, // replace with your Connection String
            //        mySqlOptions =>
            //        {
            //            mySqlOptions.ServerVersion(new Version(5, 7, 25), ServerType.MySql); // replace with your Server Version and Type
            //        }
            //));

            services.AddDbContext<AppDbContext>(options =>
                options.UseMySql(connection));

            //services.AddDbContext<AppDbContext>
            //    (options => options.UseSqlServer(connection));

            services.AddCoreModule();
            services.AddInfrastructureModule();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();           

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
