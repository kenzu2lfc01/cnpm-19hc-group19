using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Business.Employee.Interfaces
{
    public interface IEmployeeBusiness
    {
        EmployeeDto GetEmployeeDto(int employeeId);
    }
}
