using Microsoft.EntityFrameworkCore;
using QLNH.Business.Business.Customer.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Business.Customer
{
    public class CustomerBusiness : ICustomerBusiness
    {
        private QLNHDbContext _context;

        public CustomerBusiness(QLNHDbContext context)
        {
            _context = context;
        }

        public CustomerDto GetCustomerDto(int customerId)
        {
            return _context.Customers.Where(x => x.Id == customerId).Select(x => new CustomerDto()
            {
                Email = x.Email,
                FullName = x.FullName,
                PhoneNumber = x.PhoneNumber
            }).FirstOrDefault();
        }

        public async Task<int> AddCustomer(CustomerModel model)
        {
            var customer = await _context.Customers.Where(x => x.PhoneNumber == model.PhoneNumber).FirstOrDefaultAsync(); 

            if (customer != null) return customer.Id;

            var entityCustomer = new Infrastructure.Entities.Customer()
            {
                Email = model.Email,
                FullName = model.FullName,
                PhoneNumber = model.PhoneNumber
            };

            _context.Customers.Add(entityCustomer);
            await _context.SaveChangesAsync();

            return entityCustomer.Id;
        }
    }
}
