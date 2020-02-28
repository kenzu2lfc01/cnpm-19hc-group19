﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class RestaurantInformation : DomainEntity<int>
    {
        public string Name { get; set; }

        public string Adresss { get; set; }

        public string PhoneNumber { get; set; }

        public string TimeToStartWorking { get; set; }

        public string LogoURL { get; set; }
    }
}
