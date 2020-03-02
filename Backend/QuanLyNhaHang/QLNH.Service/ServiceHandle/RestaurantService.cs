using QLNH.Business.Models;
using QLNH.Business.Restaurant.Interfaces;
using QLNH.Service.ServiceInterface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.ServiceHandle
{
    public class RestaurantService : IRestaurantService
    {
        private IRestaurantInfoBusiness _restaurantInfoBusiness;

        public RestaurantService(IRestaurantInfoBusiness restaurantInfoBusiness)
        {
            _restaurantInfoBusiness = restaurantInfoBusiness;
        }

        public async Task<RestaurantInfoDto> GetRestaurantInformation()
        {
            return await _restaurantInfoBusiness.GetRestaurantInformation();
        }
    }
}
