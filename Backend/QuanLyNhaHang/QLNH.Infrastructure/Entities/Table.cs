using QLNH.Infrastructure.Entities.Enums;
using System.ComponentModel.DataAnnotations;

namespace QLNH.Infrastructure.Entities
{
    public class Table
    {
        [Key]
        public int ID { get; set; }

        public TableStatus TableStatus { get; set; }

        public int EmployeeId { get; set; }
    }
}
