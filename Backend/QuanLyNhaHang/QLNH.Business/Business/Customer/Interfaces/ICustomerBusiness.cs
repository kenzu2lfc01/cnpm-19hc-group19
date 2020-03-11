using QLNH.Business.Models;
using QLNH.Business.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QLNH.Business.Business.Customer.Interfaces
{
    public interface ICustomerBusiness
    {
        Task<int> AddCustomer(CustomerModel model);
        CustomerDto GetCustomerDto(int customerId);
    }
}
