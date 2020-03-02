using QLNH.Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Restaurant.Interfaces
{
    public interface IRestaurantInfoBusiness
    {
        Task<RestaurantInfoDto> GetRestaurantInformation();
    }
}
