﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
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
        public virtual DbSet<BookTable> BookTables { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Food> Foods { get; set; }
        public virtual DbSet<RestaurantInformation> RestaurantInformations { get; set; }
        public virtual DbSet<Table> Tables { get; set; }
        public virtual DbSet<FeedBacks> FeedBacks { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Event> Events { get; set; }
    }

    public class QLNHDbContextFactory : IDesignTimeDbContextFactory<QLNHDbContext>
    {
        public QLNHDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<QLNHDbContext>();
            optionsBuilder.UseMySql("Server=sql12.freesqldatabase.com;Database=sql12328090;Uid=sql12328090;Pwd=Pu2W58TCBd");

            return new QLNHDbContext(optionsBuilder.Options);
        }
    }
}
