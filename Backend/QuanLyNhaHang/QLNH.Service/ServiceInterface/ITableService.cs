using QLNH.Business.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QLNH.Service.ServiceInterface
{
    public interface ITableService
    {
        Task<IList<TableDto>> GetAllTable();

        void AddTable(PostTableModel tableDto);

        void UpdateTable(TableDto tableDto);

        void DeleteTable(int tableId);
    }
}