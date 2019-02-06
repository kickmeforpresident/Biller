using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class Invoice
    {
        public int Id { get; set; }

        [Required]
        public string InvoiceName { get; set; }

        public bool Open { get; set; }
        
        public int? UserId { get; set; }

        public User User { get; set; }

    }
}
