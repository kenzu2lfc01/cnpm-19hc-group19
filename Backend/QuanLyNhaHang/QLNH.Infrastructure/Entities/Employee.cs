using QLNH.Infrastructure.Entities.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QLNH.Infrastructure.Entities
{
    public class Employee
    {
        [Key] 
        public int ID { get; set; }

        public string FullName { get; set; }

        public EmployeeType EmployeeType { get; set; }

        public string PhoneNumber { get; set; }

        public string IdentityId { get; set; }

        public string AvartarURL { get; set; }

        [ForeignKey("EmployeeId")]
        public Table Table { get; set; }
    }
}
