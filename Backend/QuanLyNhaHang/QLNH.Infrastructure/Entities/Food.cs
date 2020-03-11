using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class Food : DomainEntity<int>
    {
        public string Name { get; set; }

        public string ImageURL { get; set; }

        public decimal Price { get; set; }

        public decimal Promote { get; set; }

        public bool IsPromote { get; set; }

        public bool IsNew { get; set;}

        public string Category { get; set; }
    }
}
