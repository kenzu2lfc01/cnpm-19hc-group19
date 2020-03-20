using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Business.Restaurant.Interfaces;
using QLNH.Service.Restaurant.Interface;
using System.Threading.Tasks;

namespace QLNH.Service.Restaurant
{
    public class RestaurantService : IRestaurantService
    {
        private IRestaurantInfoBusiness _restaurantInfoBusiness;

        public RestaurantService(IRestaurantInfoBusiness restaurantInfoBusiness)
        {
            _restaurantInfoBusiness = restaurantInfoBusiness;
        }

        public async Task AddRestaurantInformation(RestaurantInformationModel model)
        {
            await _restaurantInfoBusiness.AddRestaurantInformation(model);
        }

        public async Task<RestaurantInfoDto> GetRestaurantInformation()
        {
            return await _restaurantInfoBusiness.GetRestaurantInformation();
        }

        public async Task UpdateRestaurantInformation(RestaurantInformationModel model)
        {
            await _restaurantInfoBusiness.UpdateRestaurantInformation(model);
        }
    }
}
