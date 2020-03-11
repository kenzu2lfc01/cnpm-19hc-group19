using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QLNH.Business.Table.Interfaces
{
    public interface ITableBusiness
    {
        Task BookingTable(BookTableModel model);
        Task<List<BookTableDto>> GetAllBookingTable();
    }
}