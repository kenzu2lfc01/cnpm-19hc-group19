using Microsoft.EntityFrameworkCore.Migrations;

namespace QLNH.Infrastructure.Migrations
{
    public partial class secondcommit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>("DateBooking", "BookTables", "varchar(20)", true, 255, true, null, true, null, null, null);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
