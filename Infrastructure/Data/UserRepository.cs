using Core.Entities;
using Core.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _dbContext;

        public UserRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public User Add(User entity)
        {
            _dbContext.Set<User>().Add(entity);
            _dbContext.SaveChanges();

            return entity;
        }

        public void Delete(User entity)
        {
            _dbContext.Remove(entity);
            _dbContext.SaveChanges();
        }

        public User GetById(int id)
        {
            return _dbContext.Users.SingleOrDefault(user => user.Id == id);
        }

        public List<User> GetAll()
        {
            return _dbContext.Users.ToList();
        }

        public User Update(User entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            _dbContext.SaveChanges();
            return entity;
        }

        public User GetUserByUserName(string userName)
        {
            return _dbContext.Users.FirstOrDefault(u => u.UserName == userName);
        }
    }
}
