using Core.Interfaces.Managers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models.Api.Request;

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

        // GET api/invoice/getall
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

        // GET api/invoice/getlatest
        [HttpGet("[action]")]
        public JsonResult GetLatest()
        {
            var invoiceWithEntries = _manager.GetLatesInvoiceWithEntires();

            if (invoiceWithEntries != null)
            {
                return Json(invoiceWithEntries);
            }

            return Json(new EmptyResult());
        }

        // POST api/invoice/create
        [HttpPost("[action]")]
        [Authorize]
        public IActionResult Create([FromBody]CreateInvoiceModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            var createdInvoice = _manager.CreateNewInvoice(model);

            if (createdInvoice != null)
            {
                //return Created(nameof(GetById), createdInvoice);
                // TODO: Make a getbyid action
                return Created("test", createdInvoice);
            }

            return StatusCode(500);
        }

        // PATCH api/invoice/close
        [HttpPatch("[action]")]
        [Authorize]
        public IActionResult Close([FromBody]CloseInvoiceModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            var closedInvoice = _manager.CloseInvoice(model);

            if (closedInvoice != null)
            {
                return Ok(closedInvoice);
            }

            return StatusCode(500);
        }
    }
}