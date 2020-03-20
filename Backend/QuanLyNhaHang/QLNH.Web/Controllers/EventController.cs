using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNH.Business.Models.Dtos;
using QLNH.Service.Event.Interface;
using QLNH.Web.Models.Events;

namespace QLNH.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private IEventService _eventService;

        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public async Task<ActionResult<List<EventDto>>> GetEventAsync()
        {
            return await _eventService.GetEventAsync();
        }

        [HttpPost]
        public async Task<ActionResult> AddEventAsync([FromBody] POST_EventModel model)
        {
            await _eventService.AddEventAsync(new Business.Models.EventModel()
            {
                Content = model.Content,
                EventURL = model.EventURL,
                DateStart = model.DateStart,
                ImgURL = model.ImgURL,
                Title = model.Title
            });

            return Ok("Add succesfull.");
        }

        [HttpPatch]
        public async Task<ActionResult> UpdateEventAsync([FromBody] PATCH_EventModel model)
        {
            await _eventService.UpdateEventAsync(new Business.Models.EventModel()
            {
                Content = model.Content,
                EventURL = model.EventURL,
                DateStart = model.DateStart,
                ImgURL = model.ImgURL,
                Title = model.Title,
                Id = model.Id
            });

            return Ok("Update sucessful");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> DeleteEvent(int id)
        {
            await _eventService.DeleteEvent(id);

            return Ok("Delete sucessful");
        }
    }
}