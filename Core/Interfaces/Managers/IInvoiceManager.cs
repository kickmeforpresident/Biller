using Core.Entities;
using Models.Api.Request;
using System.Collections.Generic;

namespace Core.Interfaces.Managers
{
    public interface IInvoiceManager
    {
        IEnumerable<Invoice> GetAllInvoiceWithEntries();
        Invoice GetLatesInvoiceWithEntires();
        Invoice CreateNewInvoice(CreateInvoiceModel model);
        Invoice CloseInvoice(CloseInvoiceModel model);
        InvoiceEntry CreateInvoiceEntry(AddInvoiceEntryModel model);
    }
}
