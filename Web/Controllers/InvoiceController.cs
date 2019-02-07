using Core.Interfaces.Managers;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class InvoiceController : Controller
    {
        private readonly IInvoiceManager _manager;

        public InvoiceController(IInvoiceManager manager)
        {
            _manager = manager;
        }

        // POST api/invoice/getall
        [HttpGet("[action]")]
        public JsonResult GetAll()
        {
            var invoicesWithEntries = _manager.GetAllInvoiceWithEntries();

            if (invoicesWithEntries != null)
            {
                return Json(invoicesWithEntries);
            }

            return null;
        }
    }
}