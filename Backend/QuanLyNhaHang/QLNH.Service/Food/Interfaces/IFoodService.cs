using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.Food.Interfaces
{
    public interface IFoodService
    {
        Task AddFoodAsync(FoodModel model);
        Task UpdateFoodAsync(FoodModel model);
        Task DeleteFood(int id);
        Task<List<FoodDto>> GetAllFood();
    }
}
