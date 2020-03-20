using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace QLNH.Infrastructure.Entities
{
    public class BookTable : DomainEntity<int>
    {
        public int Amount { get; set; }

        public DateTime DateBooking { get; set; }

        public int CustomerId{ get; set; }
        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }

        public int EmployeeId { get; set; }
        [ForeignKey("EmployeeId")]
        public Employee Employee { get; set; }

    }
}
