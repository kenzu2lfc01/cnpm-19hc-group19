using QLNH.Infrastructure.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Business.Models
{
    public class PostTableModel
    {
        public TableStatus TableStatus { get; set; }

        public int EmployeeId { get; set; }

        public int Amount { get; set; }
    }
}
