using QLNH.Business.Business.Food.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Service.Food.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.Food
{
    public class FoodService : IFoodService
    {
        private IFoodBusiness _foodBusiness;

        public FoodService(IFoodBusiness foodBusiness)
        {
            _foodBusiness = foodBusiness;
        }

        public async Task<List<FoodDto>> GetAllFood()
        {
            return await _foodBusiness.GetAllFood();
        }

        public async Task UpdateFoodAsync(FoodModel  model)
        {
           await _foodBusiness.UpdateFoodAsync(model);
        }

        public async Task AddFoodAsync(FoodModel model)
        {
            await _foodBusiness.AddFoodAsync(model);
        }

        public async Task DeleteFood(int id)
        {
            await _foodBusiness.DeleteFood(id);
        }


    }
}
