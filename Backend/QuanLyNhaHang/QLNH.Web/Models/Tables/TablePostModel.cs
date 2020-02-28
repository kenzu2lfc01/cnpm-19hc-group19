using QLNH.Infrastructure.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLNH.Web.Models.Tables
{
    public class TablePostModel
    {
        public int ID { get; set; }

        public TableStatus TableStatus { get; set; }

        public int EmployeeId { get; set; }

        public int Amount { get; set; }
    }
}
