using System;
using System.Collections.Generic;
using System.Text;

namespace QLNH.Business.Models.Dtos
{
    public class EventDto
    {
        public string EventURL { get; set; }
        public DateTime DateStart { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string ImgURL { get; set; }
    }
}
