using QLNH.Business.Models;
using QLNH.Business.Table.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.ServiceHandle
{
    public class TableService
    {
        private ITableBusiness _tableBusiness;

        public TableService(ITableBusiness tableBusiness)
        {
            _tableBusiness = tableBusiness;
        }

        public async Task<IList<TableDto>> GetAllTable()
        {
            return await _tableBusiness.GetAllTable();
        }

        public void AddTable(PostTableModel tableDto)
        {
            _tableBusiness.AddTable(tableDto);
            _tableBusiness.SaveChangeAsync();
        }

        public void UpdateTable(TableDto tableDto)
        {
            _tableBusiness.UpdateTable(tableDto);
            _tableBusiness.SaveChangeAsync();
        }

        public void DeleteTable(int tableId)
        {
            _tableBusiness.DeleteTable(tableId);
            _tableBusiness.SaveChangeAsync();
        }
    }
}
