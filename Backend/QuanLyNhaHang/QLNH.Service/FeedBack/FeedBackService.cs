using QLNH.Business.FeedBack.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Service.FeedBack.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.FeedBack
{
    public class FeedBackService : IFeedBackService
    {
        private IFeedBackBusiness _feedBackBusiness;

        public FeedBackService(IFeedBackBusiness feedBackBusiness)
        {
            _feedBackBusiness = feedBackBusiness;
        }

        public async Task<List<FeedBackDto>> GetFeedBackSync()
        {
            return await _feedBackBusiness.GetFeedBackSync();
        }

        public async Task AddFeedBack(FeedBackModel model)
        {
            await  _feedBackBusiness.AddFeedBack(model);
        }
    }
}
