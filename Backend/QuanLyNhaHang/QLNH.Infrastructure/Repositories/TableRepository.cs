using QLNH.Infrastructure.Data;
using QLNH.Infrastructure.Entities;
using QLNH.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Infrastructure.Repositories
{
    public class TableRepository : RepositoryBase<Table, int>, ITableRepository
    {
        private QLNHDbContext _context;

        public TableRepository(QLNHDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
