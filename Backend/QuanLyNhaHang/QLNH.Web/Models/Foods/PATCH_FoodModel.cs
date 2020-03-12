using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLNH.Web.Models.Foods
{
    public class PATCH_FoodModel
    {
        public int? ID { get; set; }
        public string Name { get; set; }

        public string ImageURL { get; set; }

        public decimal Price { get; set; }

        public decimal Promote { get; set; }

        public bool IsPromote { get; set; }

        public bool IsNew { get; set; }

        public string Category { get; set; }
    }
}
