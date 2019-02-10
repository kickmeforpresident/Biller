using Core.Entities;
using Models.Api.Request;
using System.Collections.Generic;

namespace Core.Interfaces.Repositories
{
    public interface IInvoiceRepository
    {
        IEnumerable<Invoice> GetAllInvoiceWithEntries();
        Invoice GetLatestInvoiceWithEntries();
        Invoice CreateNewInvoice(string InvoiceName);
        Invoice CloseInvoice(int id);
        InvoiceEntry CreateNewInvoiceEntry(AddInvoiceEntryModel model);
    }
}
