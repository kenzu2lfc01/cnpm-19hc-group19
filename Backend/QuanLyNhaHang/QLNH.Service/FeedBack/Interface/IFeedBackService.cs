using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.FeedBack.Interface
{
    public interface IFeedBackService
    {
        Task<List<FeedBackDto>> GetFeedBackSync();
        void AddFeedBack(FeedBackModel model);
    }
}
