using Microsoft.EntityFrameworkCore;
using QLNH.Business.FeedBack.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Infrastructure.Entities;
using QLNH.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.FeedBack
{
    public class FeedBackBusiness : IFeedBackBusiness
    {
        private IFeedBackRepository _feedBackRepository;

        public FeedBackBusiness(IFeedBackRepository feedBackRepository)
        {
            _feedBackRepository = feedBackRepository;
        }

        public async Task<List<FeedBackDto>> GetFeedBackSync()
        {
            return await _feedBackRepository.FindAll().Select(x => new FeedBackDto()
            {
                Email = x.Email,
                Message = x.Message,
                Name = x.Name,
                Subject =x.Subject
            }).ToListAsync();
        }

        public void AddFeedBack(FeedBackModel model)
        {
            _feedBackRepository.Add(new FeedBacks()
            {
                Email = model.Email,
                Message = model.Message,
                Name = model.Name,
                Subject = model.Subject
            });

            _feedBackRepository.SaveChangeAsync();
        }
    }
}
