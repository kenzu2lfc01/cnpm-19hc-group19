using Microsoft.EntityFrameworkCore;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Business.Restaurant.Interfaces;
using QLNH.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Restaurant
{
    public class RestaurantInfoBusiness : IRestaurantInfoBusiness
    {
        private QLNHDbContext _context;

        public RestaurantInfoBusiness(QLNHDbContext context)
        {
            _context = context;
        }

        public async Task<RestaurantInfoDto> GetRestaurantInformation()
        {
            return await _context.RestaurantInformations.Select(x => new RestaurantInfoDto()
            {
                OpenTime = x.OpenTime,
                Adresss = x.Adresss,
                LogoURL = x.LogoURL,
                Name = x.Name,
                PhoneNumber = x.PhoneNumber,
                Email = x.Email,
                FaceBookURL = x.FaceBookURL,
                HomeURL = x.HomeURL,
                InstagramURL = x.InstagramURL,
                Location_src = x.Location_src,
                MenuURL = x.MenuURL,
                ReserveURL = x.ReserveURL,
                TwitterURL  = x.TwitterURL
            }).FirstOrDefaultAsync();
        }
    }
}
