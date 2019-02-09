using Core.Entities;
using System.Collections.Generic;

namespace Core.Interfaces.Repositories
{
    public interface IInvoiceRepository
    {
        IEnumerable<Invoice> GetAllInvoiceWithEntries();
        Invoice GetLatestInvoiceWithEntries();
    }
}
