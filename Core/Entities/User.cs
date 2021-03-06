﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class User
    {
        public int Id { get; set; }

        [MaxLength(200)]
        public string Name { get; set; }

        [Required]
        [MaxLength(200)]
        public string UserName { get; set; }

        [Required]
        [MaxLength(200)]
        public string Password { get; set; }

        public ICollection<Invoice> Invoices { get; set; }

    }
}
