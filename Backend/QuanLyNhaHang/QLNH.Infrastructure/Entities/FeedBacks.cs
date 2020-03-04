using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class FeedBacks : DomainEntity<int>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}
