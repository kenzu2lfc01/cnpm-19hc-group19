using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QLNH.Business.Models.Dtos;
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
        public async Task<ActionResult> AddFoodAsync([FromBody] POST_FoodModel model)
        {
            await _foodService.AddFoodAsync(new Business.Models.FoodModel()
            {
                Category = model.Category,
                Name = model.Name,
                ImageURL = model.ImageURL,
                Price = model.Price,
                Promote = model.Promote,
                IsPromote = model.IsPromote,
                IsNew = model.IsNew
            });

            return Ok("Add success.");
        }

        [HttpPatch]
        public async Task<ActionResult> UpdateFoodAsync([FromBody] PATCH_FoodModel model)
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

            return Ok("Update success.");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> DeleteFoodAsync(int id)
        {
            await _foodService.DeleteFood(id);
            return Ok("Delete success.");
        }
    }
}