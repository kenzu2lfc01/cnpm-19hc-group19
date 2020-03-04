using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QLNH.Business.FeedBack;
using QLNH.Business.FeedBack.Interfaces;
using QLNH.Business.Restaurant;
using QLNH.Business.Restaurant.Interfaces;
using QLNH.Business.Table;
using QLNH.Business.Table.Interfaces;
using QLNH.Infrastructure.Data;
using QLNH.Infrastructure.Repositories;
using QLNH.Infrastructure.Repositories.Interfaces;
using QLNH.Service.FeedBack;
using QLNH.Service.FeedBack.Interface;
using QLNH.Service.Restaurant;
using QLNH.Service.Restaurant.Interface;
using QLNH.Service.Table;
using QLNH.Service.Table.Interface;

namespace QLNH.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.AddSingleton<ITableRepository, TableRepository >();
            services.AddSingleton<IRestaurantInfoRepository, RestaurantInfoRepository>();
            services.AddSingleton<IFeedBackRepository, FeedBackRepository>();

            services.AddSingleton<IFeedBackBusiness ,FeedBackBusiness > ();
            services.AddSingleton<IRestaurantInfoBusiness, RestaurantInfoBusiness>();
            services.AddSingleton<ITableBusiness, TableBusiness>();

            services.AddSingleton<IRestaurantService, RestaurantService>();
            services.AddSingleton<ITableService, TableService>();
            services.AddSingleton<IFeedBackService, FeedBackService>();


            var conectionString = Configuration.GetConnectionString("Default");

            services.AddDbContext<QLNHDbContext>(options =>
            {
                options.UseSqlServer(conectionString);
            });

            services.AddDbContext<QLNHDbContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("QLNHWebContext")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}