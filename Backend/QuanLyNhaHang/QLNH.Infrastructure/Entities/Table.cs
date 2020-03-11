using QLNH.Infrastructure.Entities.Enums;
using System.ComponentModel.DataAnnotations;

namespace QLNH.Infrastructure.Entities
{
    public class Table : DomainEntity<int>
    {
        public int EmployeeId { get; set; }
        public int TableStatusId { get; set; }
    }
}
