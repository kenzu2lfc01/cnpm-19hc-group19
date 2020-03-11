using Microsoft.EntityFrameworkCore;
using QLNH.Business.FeedBack.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Infrastructure.Data;
using QLNH.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.FeedBack
{
    public class FeedBackBusiness : IFeedBackBusiness
    {
        private QLNHDbContext _context;

        public FeedBackBusiness(QLNHDbContext context)
        {
            _context = context;
        }

        public async Task<List<FeedBackDto>> GetFeedBackSync()
        {
            return await _context.FeedBacks.Select(x => new FeedBackDto()
            {
                Email = x.Email,
                Message = x.Message,
                Name = x.Name,
                Subject =x.Subject
            }).ToListAsync();
        }

        public void AddFeedBack(FeedBackModel model)
        {
            _context.FeedBacks.Add(new FeedBacks()
            {
                Email = model.Email,
                Message = model.Message,
                Name = model.Name,
                Subject = model.Subject
            });

            _context.SaveChangesAsync();
        }
    }
}
