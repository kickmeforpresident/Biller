using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Example how to add default data
            //modelBuilder.Entity<User>().HasData(new User { Id = 1, Name = "First" });
            //modelBuilder.Entity<User>().HasData(new User { Id = 2, Name = "Second" });
            //modelBuilder.Entity<User>().HasData(new User { Id = 3, Name = "Third" });
        }
    }
}
