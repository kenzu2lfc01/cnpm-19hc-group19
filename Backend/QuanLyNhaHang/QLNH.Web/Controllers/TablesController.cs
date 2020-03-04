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
        public async Task<IList<TableDto>> GetTable()
        {
            return await _service.GetAllTable();
        }

        // POST: api/Tables
        [HttpPost]
        public ActionResult PostTable(TablePostModel model)
        {
            _service.AddTable(new PostTableModel()
            {
                Amount = model.Amount,
                EmployeeId = model.EmployeeId,
                TableStatus = model.TableStatus
            });

            return Ok();
        }

        [HttpPut]
        public ActionResult UpdateTable(TablePutModel model)
        {
            _service.UpdateTable(new TableDto()
            {
                ID = model.ID,
                Amount = model.Amount,
                EmployeeId = model.EmployeeId,
                TableStatus = model.TableStatus
            });
            
            return Ok();
        }

        // DELETE: api/Tables/5
        [HttpDelete]
        public ActionResult DeleteTable(int tableId)
        {
            _service.DeleteTable(tableId);
            return Ok();
        }
    }
}