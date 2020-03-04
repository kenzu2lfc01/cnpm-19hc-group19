using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QLNH.Service.Table.Interface
{
    public interface ITableService
    {
        Task<IList<TableDto>> GetAllTable();

        void AddTable(PostTableModel tableDto);

        void UpdateTable(TableDto tableDto);

        void DeleteTable(int tableId);
    }
}