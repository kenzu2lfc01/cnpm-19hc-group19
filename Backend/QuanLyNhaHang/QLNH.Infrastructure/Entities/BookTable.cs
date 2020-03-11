using System;

namespace QLNH.Infrastructure.Entities
{
    public class BookTable : DomainEntity<int>
    {
        public int Amount { get; set; }

        public DateTime DateBooking { get; set; }

        public int CustomerId{ get; set; }

        public int EmployeeId { get; set; }
    }
}
