using QLNH.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Infrastructure.Data
{
    public class QLNHDbContext : DbContext
    {
        public QLNHDbContext(DbContextOptions<QLNHDbContext> options) : base(options)
        {

        }
        public virtual DbSet<BookTable> Employees { get; set; }
        public virtual DbSet<PayslipDetail> PayslipDetails { get; set; }
        public virtual DbSet<RequestDetail> RequestDetail { get; set; }

    }
}
