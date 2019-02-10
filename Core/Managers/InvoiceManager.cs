using Core.Entities;
using Core.Interfaces.Managers;
using Core.Interfaces.Repositories;
using Models.Api.Request;
using System;
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
            catch (Exception)
            {
                // TODO: Log the exception
                return null;
            }

        }

        public Invoice CloseInvoice(CloseInvoiceModel model)
        {
            try
            {
                var patchedInvoice = _invoiceRepository.CloseInvoice(model.Id);

                return patchedInvoice != null ? patchedInvoice : throw new Exception("Resource not found in the repository.");
            }
            catch (Exception)
            {
                // TODO: Log the exception
                return null;
            }
        }

        public InvoiceEntry CreateInvoiceEntry(AddInvoiceEntryModel model)
        {
            try
            {
                var newInvoiceEntry = _invoiceRepository.CreateNewInvoiceEntry(model);
                return newInvoiceEntry;
            }
            catch (Exception)
            {
                // TODO: Log the exception
                return null;
            }
        }
    }
}
