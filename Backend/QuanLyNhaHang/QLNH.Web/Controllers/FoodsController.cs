using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNH.Business.Models.Dtos;
using QLNH.Service.Food;
using QLNH.Service.Food.Interfaces;
using QLNH.Web.Models.Foods;

namespace QLNH.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodsController : Controller
    {
        private IFoodService _foodService;

        public FoodsController(IFoodService foodService)
        {
            _foodService = foodService;
        }

        [HttpGet]
        public async Task<ActionResult<List<FoodDto>>> GetFoodAsync()
        {

            return Ok(await _foodService.GetAllFood());
        }

        [HttpPost] 
        public async Task<ActionResult> AddFoodAsync(POST_FoodModel model)
        {
            await _foodService.AddFoodAsync(new Business.Models.FoodModel()
            {
                Category = model.Category,
                ID = model.ID,
                Name = model.Name,
                ImageURL = model.ImageURL,
                Price = model.Price,
                Promote = model.Promote,
                IsPromote = model.IsPromote,
                IsNew = model.IsNew
            });

            return Ok();
        }

        [HttpPatch]
        public async Task<ActionResult> UpdateFoodAsync(PATCH_FoodModel model)
        {
            await _foodService.UpdateFoodAsync(new Business.Models.FoodModel()
            {
                Category = model.Category,
                ID = model.ID,
                Name = model.Name,
                ImageURL = model.ImageURL,
                Price = model.Price,
                Promote = model.Promote,
                IsPromote = model.IsPromote,
                IsNew = model.IsNew
            });

            return Ok();
        }

        [HttpDelete]
        [Route("/{id}")]
        public async Task<ActionResult> DeleteFoodAsync(int id)
        {
            await _foodService.DeleteFood(id);
            return Ok();
        }
    }
}