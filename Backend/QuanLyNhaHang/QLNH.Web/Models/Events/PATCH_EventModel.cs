using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLNH.Web.Models.Events
{
    public class PATCH_EventModel
    {
        public int? Id { get; set; }
        public string EventURL { get; set; }
        public DateTime DateStart { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string ImgURL { get; set; }
    }
}
