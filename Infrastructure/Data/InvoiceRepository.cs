using Core.Entities;
using Core.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
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
    }
}
