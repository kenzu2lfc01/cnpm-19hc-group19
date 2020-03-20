using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Restaurant.Interfaces
{
    public interface IRestaurantInfoBusiness
    {
        Task<RestaurantInfoDto> GetRestaurantInformation();
        Task AddRestaurantInformation(RestaurantInformationModel model);
        Task UpdateRestaurantInformation(RestaurantInformationModel model);
    }
}
