using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Service.Event.Interface
{
    public interface IEventService
    {
        Task<List<EventDto>> GetEventAsync();
        Task AddEventAsync(EventModel model);
        Task UpdateEventAsync(EventModel model);
        Task DeleteEvent(int eventID);
    }
}
