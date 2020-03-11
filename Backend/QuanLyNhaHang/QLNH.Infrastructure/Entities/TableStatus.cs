using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace QLNH.Infrastructure.Entities
{
    public class TableStatus : DomainEntity<int>
    {
        public bool IsBook{ get; set; }

        public DateTime DateBook { get; set; }

        [ForeignKey("TableId")]
        public Table Table { get; set; }
    }
}
