using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Business.Table.Interfaces;
using QLNH.Service.Table.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.Table
{
    public class TableService : ITableService
    {
        private ITableBusiness _tableBusiness;

        public TableService(ITableBusiness tableBusiness)
        {
            _tableBusiness = tableBusiness;
        }

        public async Task BookingTable(BookTableModel model)
        {
            await _tableBusiness.BookingTable(model);
        }

        public async Task<List<BookTableDto>> GetAllBookingTable()
        {
            return await _tableBusiness.GetAllBookingTable();
        }
    }
}
