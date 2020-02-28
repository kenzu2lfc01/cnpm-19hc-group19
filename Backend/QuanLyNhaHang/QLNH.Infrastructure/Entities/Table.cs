using QLNH.Infrastructure.Entities.Enums;
using System.ComponentModel.DataAnnotations;

namespace QLNH.Infrastructure.Entities
{
    public class Table : DomainEntity<int>
    {
        public TableStatus TableStatus { get; set; }

        public int EmployeeId { get; set; }
    }
}
