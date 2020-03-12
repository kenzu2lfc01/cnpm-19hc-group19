using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Business.Food.Interfaces
{
    public interface IFoodBusiness
    {
        Task AddFoodAsync(FoodModel model);
        Task UpdateFoodAsync(FoodModel model);
        Task<List<FoodDto>> GetAllFood();
        Task DeleteFood(int id);
    }
}
