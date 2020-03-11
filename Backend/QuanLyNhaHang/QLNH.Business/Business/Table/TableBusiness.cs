using Microsoft.EntityFrameworkCore;
using QLNH.Business.Business.Customer.Interfaces;
using QLNH.Business.Business.Employee.Interfaces;
using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using QLNH.Business.Table.Interfaces;
using QLNH.Infrastructure.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLNH.Business.Table
{
    public class TableBusiness : ITableBusiness
    {
        private QLNHDbContext _context;
        private ICustomerBusiness _customer;
        private IEmployeeBusiness _employee;

        public TableBusiness(QLNHDbContext context, ICustomerBusiness customer, IEmployeeBusiness employee)
        {
            _context = context;
            _customer = customer;
            _employee = employee;
        }

        public async Task<List<BookTableDto>> GetAllBookingTable()
        {
            return await _context.BookTables.Select(x => new BookTableDto()
            {
                CustomerDto = _customer.GetCustomerDto(x.CustomerId),
                DateBooking = x.DateBooking,
                EmployeeDto = _employee.GetEmployeeDto(x.EmployeeId),
                NumberOfGuest = x.Amount
            }).ToListAsync(); 
        }

        public async Task BookingTable(BookTableModel model)
        {
            int customerId = await _customer.AddCustomer(new CustomerModel()
            {
                Email = model.Email,
                FullName = model.FullName,
                PhoneNumber = model.PhoneNumber
            });
            _context.BookTables.Add(new Infrastructure.Entities.BookTable()
            {
                Amount = model.NumberOfGuest,
                DateBooking = model.DateBooking,
                CustomerId = customerId,
                EmployeeId = 0,
            });

            await _context.SaveChangesAsync();
        }
    }
}