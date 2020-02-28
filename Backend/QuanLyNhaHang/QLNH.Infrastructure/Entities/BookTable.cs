using QLNH.Infrastructure.Entities.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class BookTable
    {
        [Key]
        public int ID { get; set; }

        public int Amount { get; set; }

        public DateTime TimeBooking { get; set; }

        public IEnumerable<int> CustomerBookingId { get; set; }

        public TypeBooking TypeBooking { get; set; }
    }
}
