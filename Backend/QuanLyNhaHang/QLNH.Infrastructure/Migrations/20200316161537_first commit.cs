using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QLNH.Infrastructure.Migrations
{
    public partial class firstcommit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "Customers",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        FullName = table.Column<string>(nullable: true),
            //        Email = table.Column<string>(nullable: true),
            //        PhoneNumber = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Customers", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Employees",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        FullName = table.Column<string>(nullable: true),
            //        EmployeeType = table.Column<int>(nullable: false),
            //        PhoneNumber = table.Column<string>(nullable: true),
            //        IdentityId = table.Column<string>(nullable: true),
            //        AvartarURL = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Employees", x => x.Id);
            //    });
            //migrationBuilder.AddColumn<string>("Content", "Events", "varchar(255)", true, 255, true, null, true, null, null, null);
            //migrationBuilder.AddColumn<string>("DateStart", "Events", "varchar(20)" , true, 20, true, null, true, null, null, null);

            //migrationBuilder.CreateTable(
            //    name: "FeedBacks",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        Name = table.Column<string>(nullable: true),
            //        Email = table.Column<string>(nullable: true),
            //        Subject = table.Column<string>(nullable: true),
            //        Message = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_FeedBacks", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Foods",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        Name = table.Column<string>(nullable: true),
            //        ImageURL = table.Column<string>(nullable: true),
            //        Price = table.Column<decimal>(nullable: false),
            //        Promote = table.Column<decimal>(nullable: false),
            //        IsPromote = table.Column<bool>(nullable: false),
            //        IsNew = table.Column<bool>(nullable: false),
            //        Category = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Foods", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RestaurantInformations",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        Name = table.Column<string>(nullable: true),
            //        Adresss = table.Column<string>(nullable: true),
            //        PhoneNumber = table.Column<string>(nullable: true),
            //        Email = table.Column<string>(nullable: true),
            //        OpenTime = table.Column<string>(nullable: true),
            //        LogoURL = table.Column<string>(nullable: true),
            //        HomeURL = table.Column<string>(nullable: true),
            //        MenuURL = table.Column<string>(nullable: true),
            //        ReserveURL = table.Column<string>(nullable: true),
            //        FaceBookURL = table.Column<string>(nullable: true),
            //        Location_src = table.Column<string>(nullable: true),
            //        TwitterURL = table.Column<string>(nullable: true),
            //        InstagramURL = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RestaurantInformations", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Tables",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        EmployeeId = table.Column<int>(nullable: false),
            //        TableStatusId = table.Column<int>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Tables", x => x.Id);
            //    });


            //migrationBuilder.CreateTable(
            //    name: "BookTables",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        Amount = table.Column<int>(nullable: false),
            //        //DateBooking = table.Column<DateTime>(nullable: false),
            //        CustomerId = table.Column<int>(nullable: false),
            //        EmployeeId = table.Column<int>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_BookTables", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_BookTables_Customers_CustomerId",
            //            column: x => x.CustomerId,
            //            principalTable: "Customers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //        table.ForeignKey(
            //            name: "FK_BookTables_Employees_EmployeeId",
            //            column: x => x.EmployeeId,
            //            principalTable: "Employees",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_BookTables_CustomerId",
            //    table: "BookTables",
            //    column: "CustomerId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_BookTables_EmployeeId",
            //    table: "BookTables",
            //    column: "EmployeeId",
            //    unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropTable(
            //    name: "BookTables");

            //migrationBuilder.DropTable(
            //    name: "Events");

            //migrationBuilder.DropTable(
            //    name: "FeedBacks");

            //migrationBuilder.DropTable(
            //    name: "Foods");

            //migrationBuilder.DropTable(
            //    name: "RestaurantInformations");

            //migrationBuilder.DropTable(
            //    name: "Tables");

            //migrationBuilder.DropTable(
            //    name: "Customers");

            //migrationBuilder.DropTable(
            //    name: "Employees");
        }
    }
}
