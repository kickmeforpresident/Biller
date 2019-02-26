using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class UserRole
    {
        public int Id { get; set; }

        [MaxLength(200)]
        public string RoleName { get; set; }

        public ICollection<User> Users { get; set; }

    }
}
