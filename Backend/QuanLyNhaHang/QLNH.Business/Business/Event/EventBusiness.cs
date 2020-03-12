using QLNH.Business.Business.Event.Interfaces;
using QLNH.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Business.Business.Event
{
    public class EventBusiness : IEventBusiness
    {
        private QLNHDbContext _context;

        public EventBusiness(QLNHDbContext context)
        {
            _context = context;
        }


    }
}
