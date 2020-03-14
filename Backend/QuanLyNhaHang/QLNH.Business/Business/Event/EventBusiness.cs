using Microsoft.EntityFrameworkCore;
using QLNH.Business.Business.Event.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Business.Event
{
    public class EventBusiness : IEventBusiness
    {
        private QLNHDbContext _context;

        public EventBusiness(QLNHDbContext context)
        {
            _context = context;
        }

        public async Task<List<EventDto>> GetEventAsync()
        {
            return await _context.Events
                .Where(x=>x.DateStart > DateTime.Now)
                .OrderByDescending(x => x.DateStart)
                .Take(10)
                .Select(x => new EventDto()
                {
                    Content = x.Content,
                    ImgURL = x.ImgURL,
                    Title = x.Title,
                    EventURL = x.EventURL,
                    DateStart = x.DateStart,
                }).ToListAsync();
        }

        public async Task AddEventAsync(EventModel model)
        {
            _context.Events.Add(new Infrastructure.Entities.Event()
            {
                Content = model.Content,
                ImgURL = model.ImgURL,
                Title = model.Title,
                EventURL = model.EventURL,
                DateStart = model.DateStart,
            });

            await _context.SaveChangesAsync();
        }

        public async Task UpdateEventAsync(EventModel model)
        {
            try
            {
                _context.Events.Update(new Infrastructure.Entities.Event()
                {
                    Id = Convert.ToInt32(model.Id),
                    Content = model.Content,
                    ImgURL = model.ImgURL,
                    Title = model.Title,
                    EventURL = model.EventURL,
                    DateStart = model.DateStart,
                });
            }
            catch
            {
                throw new Exception("Could not find id.");
            }
            await _context.SaveChangesAsync();
        }

        public async Task DeleteEvent(int eventID)
        {
            var entity = await _context.Events.FirstOrDefaultAsync(x => x.Id == eventID);
            _context.Events.Remove(entity);
            await _context.SaveChangesAsync();

        }
    }
}
