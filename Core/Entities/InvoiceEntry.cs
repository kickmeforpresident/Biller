﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class InvoiceEntry
    {
        public int Id { get; set; }

        [Required]
        public int Amount { get; set; }

        [Required]
        public DateTime CreationDate { get; set; }

        [Required]
        public int InvoiceId { get; set; }

        public Invoice Invoice { get; set; }

    }
}
