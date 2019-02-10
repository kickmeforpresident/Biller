using Core.Entities;
using Core.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using Models.Api.Request;
using System.Collections.Generic;
using System.Linq;

namespace Infrastructure.Data
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly AppDbContext _dbContext;

        public InvoiceRepository(AppDbContext context)
        {
            _dbContext = context;
        }

        public IEnumerable<Invoice> GetAllInvoiceWithEntries()
        {
            return _dbContext.Invoices.Include(e => e.InvoiceEntries);
        }

        public Invoice GetLatestInvoiceWithEntries()
        {
            var invoice = _dbContext.Invoices
                                        .Include(e => e.InvoiceEntries)
                                        .Where(i => i.Open == true)
                                        .FirstOrDefault();

            return invoice;
        }

        public Invoice CreateNewInvoice(string InvoiceName)
        {
            var newInvoice = new Invoice { InvoiceName = InvoiceName, Open = true };

            _dbContext.Add(newInvoice);

            _dbContext.SaveChanges();

            return newInvoice;
        }

        public Invoice CloseInvoice(int id)
        {
            try
            {
                var invoice = _dbContext.Invoices.FirstOrDefault(i => i.Id == id);
                invoice.Open = false;
                _dbContext.SaveChanges();

                return invoice;
            }
            catch (System.Exception)
            {
                return null;
            }
        }

        public InvoiceEntry CreateNewInvoiceEntry(AddInvoiceEntryModel model)
        {
            var newInvoiceEntry = new InvoiceEntry
            {
                Amount = model.Amount,
                CreationDate = model.CreationDate,
                InvoiceId = model.InvoiceId,
                Subject = model.Subject
            };

            _dbContext.Add(newInvoiceEntry);

            _dbContext.SaveChanges();

            return newInvoiceEntry;
        }
    }
}
