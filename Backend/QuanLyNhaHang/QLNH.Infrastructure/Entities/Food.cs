using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class Food : DomainEntity<int>
    {
        public string Name { get; set; }

        public string Country { get; set; }

        public decimal Price { get; set; }
    }
}
