using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QLNH.Web.Models.Tables
{
    public class POST_BookTableModel
    {
        [Required]
        public string FullName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public int NumberOfGuest { get; set; }

        [Required]
        public DateTime DateBooking { get; set; }
    }
}
