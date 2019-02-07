using Core.Entities;
using System.Collections.Generic;

namespace Core.Interfaces.Managers
{
    public interface IInvoiceManager
    {
        IEnumerable<Invoice> GetAllInvoiceWithEntries();
    }
}
