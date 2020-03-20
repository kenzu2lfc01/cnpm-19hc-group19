using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLNH.Web.Models.Restaurants
{
    public class PATCH_RestaurantInformation
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Adresss { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string OpenTime { get; set; }

        public string LogoURL { get; set; }

        public string HomeURL { get; set; }

        public string MenuURL { get; set; }

        public string ReserveURL { get; set; }

        public string FaceBookURL { get; set; }

        public string Location_src { get; set; }

        public string TwitterURL { get; set; }

        public string InstagramURL { get; set; }
    }
}
