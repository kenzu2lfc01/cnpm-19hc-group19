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
    public class FeedBackController : Controller
    {
        private IFeedBackService _feedBackService;

        public FeedBackController(IFeedBackService feedBackService)
        {
            _feedBackService = feedBackService;
        }

        [HttpGet]
        public async Task<ActionResult<List<FeedBackDto>>> GetFeedBackSync()
        {
             return Ok(await _feedBackService.GetFeedBackSync());
        }

        [HttpPost]
        public async Task<ActionResult> AddFeedBack([FromQuery] FeedBackModel model)
        {
            await _feedBackService.AddFeedBack(model);
            return Ok("Add success.");
        }
    }
}