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

        public async Task AddRestaurantInformation(RestaurantInformationModel model)
        {
            try
            {
                _context.RestaurantInformations.Add(new Infrastructure.Entities.RestaurantInformation()
                {
                    Adresss = model.Adresss,
                    Email = model.Email,
                    FaceBookURL = model.FaceBookURL,
                    HomeURL = model.HomeURL,
                    InstagramURL = model.InstagramURL,
                    Location_src = model.Location_src,
                    LogoURL = model.LogoURL,
                    MenuURL = model.MenuURL,
                    Name = model.Name,
                    OpenTime = model.OpenTime,
                    PhoneNumber = model.PhoneNumber,
                    ReserveURL = model.ReserveURL,
                    TwitterURL = model.TwitterURL
                });

                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task UpdateRestaurantInformation(RestaurantInformationModel model)
        {
            try
            {
                _context.RestaurantInformations.Update(new Infrastructure.Entities.RestaurantInformation()
                {
                    Id = Convert.ToInt32(model.Id),
                    Adresss = model.Adresss,
                    Email = model.Email,
                    FaceBookURL = model.FaceBookURL,
                    HomeURL = model.HomeURL,
                    InstagramURL = model.InstagramURL,
                    Location_src = model.Location_src,
                    LogoURL = model.Location_src,
                    MenuURL = model.MenuURL,
                    Name = model.Name,
                    OpenTime = model.OpenTime,
                    PhoneNumber = model.PhoneNumber,
                    ReserveURL = model.ReserveURL,
                    TwitterURL = model.TwitterURL
                });

                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
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
                TwitterURL = x.TwitterURL,
                Id = x.Id
            }).LastOrDefaultAsync();
        }
    }
}
