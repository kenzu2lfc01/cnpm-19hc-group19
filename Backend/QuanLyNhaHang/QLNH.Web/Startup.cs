using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QLNH.Business.Business.Customer;
using QLNH.Business.Business.Customer.Interfaces;
using QLNH.Business.Business.Employee;
using QLNH.Business.Business.Employee.Interfaces;
using QLNH.Business.Business.Event;
using QLNH.Business.Business.Event.Interfaces;
using QLNH.Business.Business.Food;
using QLNH.Business.Business.Food.Interfaces;
using QLNH.Business.FeedBack;
using QLNH.Business.FeedBack.Interfaces;
using QLNH.Business.Restaurant;
using QLNH.Business.Restaurant.Interfaces;
using QLNH.Business.Table;
using QLNH.Business.Table.Interfaces;
using QLNH.Infrastructure.Data;
using QLNH.Service.Customer;
using QLNH.Service.Customer.Interface;
using QLNH.Service.Event;
using QLNH.Service.Event.Interface;
using QLNH.Service.FeedBack;
using QLNH.Service.FeedBack.Interface;
using QLNH.Service.Food;
using QLNH.Service.Food.Interfaces;
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
            services.AddMvc(option => option.EnableEndpointRouting = false).SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddScoped<IFeedBackBusiness ,FeedBackBusiness> ();
            services.AddScoped<IRestaurantInfoBusiness, RestaurantInfoBusiness>();
            services.AddScoped<ITableBusiness, TableBusiness>();
            services.AddScoped<ICustomerBusiness, CustomerBusiness>();
            services.AddScoped<IEmployeeBusiness, EmployeeBusiness>();
            services.AddScoped<IEventBusiness, EventBusiness>();
            services.AddScoped<IFoodBusiness, FoodBusiness>();

            services.AddScoped<IFeedBackService, FeedBackService>();
            services.AddScoped<IRestaurantService, RestaurantService>();
            services.AddScoped<ITableService, TableService>();
            services.AddScoped<ICustomerService, CustomerService>();
            services.AddScoped<IEventService, EventService>();
            services.AddScoped<IFoodService, FoodService>();

            var conectionString = Configuration.GetConnectionString("Default");

            services.AddDbContext<QLNHDbContext>(options =>
            {
                options.UseSqlServer(conectionString);
            });

            services.AddDbContext<QLNHDbContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("Default")));
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