using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Interfaces.Managers
{
    public interface IInvoiceManager
    {
        IEnumerable<Invoice> GetAllInvoiceWithEntries();
    }
}
