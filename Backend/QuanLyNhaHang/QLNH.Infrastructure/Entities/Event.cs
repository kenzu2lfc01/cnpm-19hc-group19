using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class Event : DomainEntity<int>
    {
        public string EventURL { get; set; }
        public DateTime DateStart { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string ImgURL { get; set; }
    }
}
