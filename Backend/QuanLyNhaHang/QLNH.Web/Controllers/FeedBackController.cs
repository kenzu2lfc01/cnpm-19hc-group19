using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Service.FeedBack.Interface;

namespace QLNH.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedBackController : ControllerBase
    {
        private IFeedBackService _feedBackService;

        public FeedBackController(IFeedBackService feedBackService)
        {
            _feedBackService = feedBackService;
        }

        [HttpGet]
        public async Task<List<FeedBackDto>> GetFeedBackSync()
        {
            return await _feedBackService.GetFeedBackSync();
        }

        [HttpPost]
        public void AddFeedBack(FeedBackModel model)
        {
            _feedBackService.AddFeedBack(model);
        }
    }
}