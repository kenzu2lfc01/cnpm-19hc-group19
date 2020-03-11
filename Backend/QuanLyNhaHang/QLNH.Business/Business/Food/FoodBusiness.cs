using Microsoft.EntityFrameworkCore;
using QLNH.Business.Business.Food.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Business.Food
{
     public  class FoodBusiness : IFoodBusiness
    {
        private QLNHDbContext _context;

        public FoodBusiness(QLNHDbContext context)
        {
            _context = context;
        }

        public async Task<int> AddFoodAsync(FoodModel model)
        {
            var foodEntity = await _context.Foods.Where(x => x.Name == model.Name).FirstOrDefaultAsync();

            if(foodEntity != null) return foodEntity.Id;

            foodEntity = new Infrastructure.Entities.Food()
            {
                Category = model.Category,
                ImageURL = model.ImageURL,
                IsNew = model.IsNew,
                IsPromote = model.IsPromote,
                Name = model.Name,
                Price = model.Price,
                Promote = model.Promote
            };
            _context.Foods.Add(foodEntity);

            await _context.SaveChangesAsync();

            return foodEntity.Id;
        }

        public async Task UpdateFoodAsync()
        {

        }

        public async Task<List<FoodDto>> GetAllFood()
        {
            return await _context.Foods.Select(x => new FoodDto()
            {
                Category = x.Category,
                ImageURL = x.ImageURL,
                IsNew = x.IsNew,
                IsPromote = x.IsPromote,
                Name = x.Name,
                Price = x.Price,
                Promote = x.Promote
            }).ToListAsync();
        }
    }
}
