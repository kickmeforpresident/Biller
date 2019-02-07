using Core.Entities;
using Core.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

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
    }
}
