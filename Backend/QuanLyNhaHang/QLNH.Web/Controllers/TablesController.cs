using Microsoft.AspNetCore.Mvc;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Service.Table;
using QLNH.Web.Models.Tables;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QLNH.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TablesController : ControllerBase
    {
        private readonly TableService _service;

        public TablesController(TableService service)
        {
            _service = service;
        }

        // GET: api/Tables
        [HttpGet]
        [Route("BookTable")]
        public async Task<IList<BookTableDto>> GetTable()
        {
            return await _service.GetAllBookingTable();
        }

        // POST: api/Tables
        [HttpPost]
        [Route("BookTable")]
        public async Task<ActionResult> PostTable(POST_BookTableModel model)
        {
            await _service.BookingTable(new BookTableModel()
            {
                DateBooking = model.DateBooking,
                Email = model.Email,
                FullName = model.FullName,
                NumberOfGuest = model.NumberOfGuest,
                PhoneNumber = model.PhoneNumber
            });

            return Ok("Book success.");
        }
    }
}