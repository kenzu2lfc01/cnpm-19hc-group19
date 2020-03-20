using QLNH.Infrastructure.Entities.Enums;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QLNH.Infrastructure.Entities
{
    public class Employee : DomainEntity<int>
    {
        public string FullName { get; set; }

        public EmployeeType EmployeeType { get; set; }

        public string PhoneNumber { get; set; }

        public string IdentityId { get; set; }

        public string AvartarURL { get; set; }

        public virtual BookTable BookTable { get; set; }

    }
}
