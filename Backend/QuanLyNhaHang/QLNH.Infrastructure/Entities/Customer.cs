﻿using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class Customer : DomainEntity<int>
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public IEnumerable<BookTable> BookTables { get; set; }
    }
}
