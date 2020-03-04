using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Service.Restaurant.Interface;

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
    }
}