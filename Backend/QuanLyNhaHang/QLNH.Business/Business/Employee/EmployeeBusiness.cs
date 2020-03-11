using Microsoft.EntityFrameworkCore;
using QLNH.Business.Business.Employee.Interfaces;
using QLNH.Business.Models.Dtos;
using QLNH.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Business.Employee
{
    public class EmployeeBusiness : IEmployeeBusiness
    {
        private QLNHDbContext _context;

        public EmployeeBusiness(QLNHDbContext context)
        {
            _context = context;
        }

        public EmployeeDto GetEmployeeDto(int employeeId)
        {
            return _context.Employees.Where(x => x.Id == employeeId).Select(y => new EmployeeDto()
            {
                FullName = y.FullName,
                UrlAvatar = y.AvartarURL
            }).FirstOrDefault();
        }
    }
}
