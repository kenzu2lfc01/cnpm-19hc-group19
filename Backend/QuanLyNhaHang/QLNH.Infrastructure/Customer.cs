using QLNH.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace QLNH.Infrastructure
{
    public class Customer
    {
        [Key]
        public int ID { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        [ForeignKey("CustomerBookingId")]
        public BookTable BookTable { get; set; }
    }
}
