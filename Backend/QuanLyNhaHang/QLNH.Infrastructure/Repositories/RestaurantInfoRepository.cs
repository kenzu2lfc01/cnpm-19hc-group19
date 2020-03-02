using QLNH.Infrastructure.Data;
using QLNH.Infrastructure.Entities;
using QLNH.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Infrastructure.Repositories
{
    public class RestaurantInfoRepository : RepositoryBase<RestaurantInformation, int>, IRestaurantInfoRepository
    {
        private QLNHDbContext _context;

        public RestaurantInfoRepository(QLNHDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
