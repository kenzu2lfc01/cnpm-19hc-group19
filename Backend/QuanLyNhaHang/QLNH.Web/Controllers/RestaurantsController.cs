using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Service.Restaurant.Interface;
using QLNH.Web.Models.Restaurants;

namespace QLNH.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantsController : ControllerBase
    {
        private IRestaurantService _service;

        public RestaurantsController(IRestaurantService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<RestaurantInfoDto>> GetRestaurantInfor()
        {
            return Ok(await _service.GetRestaurantInformation());
        }

        [HttpPost]
        public async Task<ActionResult> AddRestaurantInformation([FromBody] POST_RestaurantInformation model)
        {
            await _service.AddRestaurantInformation(new RestaurantInformationModel()
            {
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

            return Ok("Add successful.");
        }

        [HttpPatch]
        public async Task<ActionResult> UpdateRestaurantInformation([FromBody] PATCH_RestaurantInformation model)
        {
            await _service.UpdateRestaurantInformation(new RestaurantInformationModel()
            {
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

            return Ok("Update successful.");
        }
    }
}