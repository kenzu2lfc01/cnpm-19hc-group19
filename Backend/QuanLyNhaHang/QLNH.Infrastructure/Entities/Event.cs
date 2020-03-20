using MySql.Data.EntityFrameworkCore.DataAnnotations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Text;

namespace QLNH.Infrastructure.Entities
{
    public class Event : DomainEntity<int>
    {
        [Column(TypeName = "varchar(255)")]
        public string EventURL { get; set; }

        [Column(TypeName = "varchar(255)")]
        public string Title { get; set; }

        [Column(TypeName = "varchar(max)")]
        public string Content { get; set; }

        [Column(TypeName = "varchar(255)")]
        public string ImgURL { get; set; }

        public DateTime DateStart { get; set; }
    }
}
