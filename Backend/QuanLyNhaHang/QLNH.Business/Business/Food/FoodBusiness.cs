using Microsoft.EntityFrameworkCore;
using QLNH.Business.Business.Food.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task AddFoodAsync(FoodModel model)
        {
            var foodEntity = await _context.Foods.Where(x => x.Name == model.Name).FirstOrDefaultAsync();

            if (foodEntity != null) throw new Exception("The food is exist.");

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
        }

        public async Task UpdateFoodAsync(FoodModel model)
        {
            var entity = _context.Foods.Where(x => x.Id == model.ID).FirstOrDefault();

            if (entity == null) throw new Exception("Can not find food.");

            entity.Category = model.Category;
            entity.IsNew = model.IsNew;
            entity.IsPromote = model.IsPromote;
            entity.Name = model.Name;
            entity.ImageURL = model.ImageURL;
            entity.Price = model.Price;
            entity.Promote = model.Promote;
            entity.Promote = model.Promote;
            await _context.SaveChangesAsync();
        }

        public async Task<List<FoodDto>> GetAllFood()
        {
            return await _context.Foods.Select(x => new FoodDto()
            {
                ID = x.Id,
                Category = x.Category,
                ImageURL = x.ImageURL,
                IsNew = x.IsNew,
                IsPromote = x.IsPromote,
                Name = x.Name,
                Price = x.Price,
                Promote = x.Promote
            }).ToListAsync();
        }

        public async Task DeleteFood(int id)
        {
            var entity = _context.Foods.Where(x => x.Id == id).FirstOrDefault();
            if (entity == null) throw new Exception("Food is not exist.");

            _context.Foods.Remove(entity);

            await _context.SaveChangesAsync();
        }
    }
}
