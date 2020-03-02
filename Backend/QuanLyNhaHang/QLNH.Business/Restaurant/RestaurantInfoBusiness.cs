using Microsoft.EntityFrameworkCore;
using QLNH.Business.Models;
using QLNH.Business.Restaurant.Interfaces;
using QLNH.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Restaurant
{
    public class RestaurantInfoBusiness : IRestaurantInfoBusiness
    {
        private IRestaurantInfoRepository _restaurantInfoRepository;

        public RestaurantInfoBusiness(IRestaurantInfoRepository restaurantInfoRepository)
        {
            _restaurantInfoRepository = restaurantInfoRepository;
        }

        public async Task<RestaurantInfoDto> GetRestaurantInformation()
        {
            return await _restaurantInfoRepository.FindAll().Select(x => new RestaurantInfoDto()
            {
                TimeToStartWorking = x.TimeToStartWorking,
                Adresss = x.Adresss,
                LogoURL = x.LogoURL,
                Name = x.Name,
                PhoneNumber = x.PhoneNumber
            }).FirstOrDefaultAsync();
        }
    }
}
