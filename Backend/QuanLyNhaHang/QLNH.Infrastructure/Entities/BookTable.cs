using QLNH.Infrastructure.Entities.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class BookTable : DomainEntity<int>
    {
        public int Amount { get; set; }

        public DateTime TimeBooking { get; set; }

        public int CustomerBookingId { get; set; }

        public TypeBooking TypeBooking { get; set; }
    }
}
