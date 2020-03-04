using Microsoft.EntityFrameworkCore;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Business.Table.Interfaces;
using QLNH.Infrastructure.Entities.Enums;
using QLNH.Infrastructure.Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLNH.Business.Table
{
    public class TableBusiness : ITableBusiness
    {
        private readonly ITableRepository _tableRepository;

        public TableBusiness(ITableRepository tableRepository)
        {
            _tableRepository = tableRepository;
        }

        public async Task<IList<TableDto>> GetAllTable()
        {
            return await _tableRepository.FindAll().Select(x => new TableDto()
            {
                ID = x.Id,
                EmployeeId = x.EmployeeId,
                TableStatus = x.TableStatus
            }).ToListAsync();
        }

        public void AddTable(PostTableModel tableDto)
        {
            _tableRepository.Add(new Infrastructure.Entities.Table()
            {
                TableStatus = TableStatus.empty,
                EmployeeId = 0
            });

        }

        public void UpdateTable(TableDto tableDto)
        {
            var table = _tableRepository.FindById(tableDto.ID);
            table.TableStatus = tableDto.TableStatus;
            table.EmployeeId = tableDto.EmployeeId;
        }

        public void DeleteTable(int tableId)
        {
            _tableRepository.Remove(_tableRepository.FindById(tableId));
        }

        public void SaveChangeAsync()
        {
            _tableRepository.SaveChangeAsync();
        }
    }
}