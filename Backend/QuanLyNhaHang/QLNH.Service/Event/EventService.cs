using QLNH.Business.Business.Event.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Service.Event.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QLNH.Service.Event
{
    public class EventService : IEventService
    {
        private IEventBusiness _eventBusiness;

        public EventService(IEventBusiness eventBusiness)
        {
            _eventBusiness = eventBusiness;
        }

        public async Task<List<EventDto>> GetEventAsync()
        {
            return await _eventBusiness.GetEventAsync();
        }

        public async Task AddEventAsync(EventModel model)
        {
            await _eventBusiness.AddEventAsync(model);
        }


        public async Task UpdateEventAsync(EventModel model)
        {
            await _eventBusiness.UpdateEventAsync(model);
        }

        public async Task DeleteEvent(int eventID)
        {
            await _eventBusiness.DeleteEvent(eventID);
        }
    }
}
