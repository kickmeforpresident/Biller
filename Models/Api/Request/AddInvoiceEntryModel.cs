using System;

namespace Models.Api.Request
{
    public class AddInvoiceEntryModel
    {
        public int Amount { get; set; }
        public DateTime CreationDate { get; set; }
        public int InvoiceId { get; set; }
        public string Subject { get; set; }
    }
}
