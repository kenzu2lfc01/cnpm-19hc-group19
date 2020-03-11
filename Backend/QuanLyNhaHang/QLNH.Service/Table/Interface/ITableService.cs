using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QLNH.Service.Table.Interface
{
    public interface ITableService
    {
        Task BookingTable(BookTableModel model);
        Task<List<BookTableDto>> GetAllBookingTable();
    }
}