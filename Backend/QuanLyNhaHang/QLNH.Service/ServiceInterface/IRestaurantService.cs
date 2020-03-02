using QLNH.Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.ServiceInterface
{
    public interface IRestaurantService
    {
         Task<RestaurantInfoDto> GetRestaurantInformation();
    }
}
