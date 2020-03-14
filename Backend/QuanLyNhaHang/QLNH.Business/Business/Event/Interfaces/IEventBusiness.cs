using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Business.Event.Interfaces
{
    public interface IEventBusiness
    {
        Task<List<EventDto>> GetEventAsync();
        Task AddEventAsync(EventModel model);
        Task UpdateEventAsync(EventModel model);
        Task DeleteEvent(int eventID);
    }
}
