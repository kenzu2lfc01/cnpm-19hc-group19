using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QLNH.Infrastructure.Migrations
{
    public partial class updateentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Tables_EmployeeId",
                table: "Employees");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Tables",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "TableStatus",
                table: "Tables",
                newName: "TableStatusId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "RestaurantInformations",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "TimeToStartWorking",
                table: "RestaurantInformations",
                newName: "TwitterURL");

            migrationBuilder.RenameColumn(
                name: "Country",
                table: "Foods",
                newName: "ImageURL");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Employees",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "BookTables",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "TypeBooking",
                table: "BookTables",
                newName: "EmployeeId");

            migrationBuilder.RenameColumn(
                name: "TimeBooking",
                table: "BookTables",
                newName: "DateBooking");

            migrationBuilder.RenameColumn(
                name: "CustomerBookingId",
                table: "BookTables",
                newName: "CustomerId");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "RestaurantInformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FaceBookURL",
                table: "RestaurantInformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HomeURL",
                table: "RestaurantInformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InstagramURL",
                table: "RestaurantInformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Location_src",
                table: "RestaurantInformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MenuURL",
                table: "RestaurantInformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OpenTime",
                table: "RestaurantInformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReserveURL",
                table: "RestaurantInformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Foods",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsNew",
                table: "Foods",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsPromote",
                table: "Foods",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "Promote",
                table: "Foods",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeId",
                table: "Employees",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FullName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EventURL = table.Column<string>(nullable: true),
                    DateStart = table.Column<DateTime>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    ImgURL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FeedBacks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Subject = table.Column<string>(nullable: true),
                    Message = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FeedBacks", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Tables_EmployeeId",
                table: "Employees",
                column: "EmployeeId",
                principalTable: "Tables",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Tables_EmployeeId",
                table: "Employees");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "FeedBacks");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "RestaurantInformations");

            migrationBuilder.DropColumn(
                name: "FaceBookURL",
                table: "RestaurantInformations");

            migrationBuilder.DropColumn(
                name: "HomeURL",
                table: "RestaurantInformations");

            migrationBuilder.DropColumn(
                name: "InstagramURL",
                table: "RestaurantInformations");

            migrationBuilder.DropColumn(
                name: "Location_src",
                table: "RestaurantInformations");

            migrationBuilder.DropColumn(
                name: "MenuURL",
                table: "RestaurantInformations");

            migrationBuilder.DropColumn(
                name: "OpenTime",
                table: "RestaurantInformations");

            migrationBuilder.DropColumn(
                name: "ReserveURL",
                table: "RestaurantInformations");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "IsNew",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "IsPromote",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "Promote",
                table: "Foods");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Tables",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "TableStatusId",
                table: "Tables",
                newName: "TableStatus");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "RestaurantInformations",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "TwitterURL",
                table: "RestaurantInformations",
                newName: "TimeToStartWorking");

            migrationBuilder.RenameColumn(
                name: "ImageURL",
                table: "Foods",
                newName: "Country");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Employees",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "BookTables",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "EmployeeId",
                table: "BookTables",
                newName: "TypeBooking");

            migrationBuilder.RenameColumn(
                name: "DateBooking",
                table: "BookTables",
                newName: "TimeBooking");

            migrationBuilder.RenameColumn(
                name: "CustomerId",
                table: "BookTables",
                newName: "CustomerBookingId");

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeId",
                table: "Employees",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Tables_EmployeeId",
                table: "Employees",
                column: "EmployeeId",
                principalTable: "Tables",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
