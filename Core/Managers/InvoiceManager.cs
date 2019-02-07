using Core.Entities;
using Core.Interfaces.Managers;
using Core.Interfaces.Repositories;
using System.Collections.Generic;

namespace Core.Managers
{
    public class InvoiceManager : IInvoiceManager
    {
        private readonly IInvoiceRepository _invoiceRepository;

        public InvoiceManager(IInvoiceRepository repository)
        {
            _invoiceRepository = repository;
        }

        public IEnumerable<Invoice> GetAllInvoiceWithEntries()
        {
            return _invoiceRepository.GetAllInvoiceWithEntries();
        }
    }
}
