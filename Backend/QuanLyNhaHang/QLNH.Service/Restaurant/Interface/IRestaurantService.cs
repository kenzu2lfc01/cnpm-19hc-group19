using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.Restaurant.Interface
{
    public interface IRestaurantService
    {
         Task<RestaurantInfoDto> GetRestaurantInformation();
    }
}
