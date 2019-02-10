using Core.Entities;
using Core.Interfaces.Managers;
using Core.Interfaces.Repositories;
using Models.Api.Request;
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

        public Invoice GetLatesInvoiceWithEntires()
        {
            return _invoiceRepository.GetLatestInvoiceWithEntries();
        }

        public Invoice CreateNewInvoice(CreateInvoiceModel model)
        {
            try
            {
                var newInvoice = _invoiceRepository.CreateNewInvoice(model.InvoiceName);
                return newInvoice;
            }
            catch (System.Exception)
            {
                // TODO: Log the exception
                return null;
            }

        }
    }
}
