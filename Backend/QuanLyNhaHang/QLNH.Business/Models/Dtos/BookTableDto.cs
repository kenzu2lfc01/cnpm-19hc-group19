using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Business.Models.Dtos
{
    public class BookTableDto
    {
        public int NumberOfGuest { get; set; }
        public DateTime DateBooking { get; set; }
        public CustomerDto CustomerDto { get; set; }
        public EmployeeDto EmployeeDto { get; set; }
    }
}
