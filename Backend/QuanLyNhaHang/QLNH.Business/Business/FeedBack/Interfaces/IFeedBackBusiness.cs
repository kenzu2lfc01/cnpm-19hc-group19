using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.FeedBack.Interfaces
{
    public interface IFeedBackBusiness
    {
        Task<List<FeedBackDto>> GetFeedBackSync();
        Task AddFeedBack(FeedBackModel model);
    }
}
