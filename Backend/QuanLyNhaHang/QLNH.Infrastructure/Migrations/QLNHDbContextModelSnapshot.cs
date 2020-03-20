﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QLNH.Infrastructure.Data;

namespace QLNH.Infrastructure.Migrations
{
    [DbContext(typeof(QLNHDbContext))]
    partial class QLNHDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("QLNH.Infrastructure.Entities.BookTable", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Amount");

                    b.Property<int>("CustomerId");

                    b.Property<DateTime>("DateBooking");

                    b.Property<int>("EmployeeId");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("EmployeeId")
                        .IsUnique();

                    b.ToTable("BookTables");
                });

            modelBuilder.Entity("QLNH.Infrastructure.Entities.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("FullName");

                    b.Property<string>("PhoneNumber");

                    b.HasKey("Id");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("QLNH.Infrastructure.Entities.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AvartarURL");

                    b.Property<int>("EmployeeType");

                    b.Property<string>("FullName");

                    b.Property<string>("IdentityId");

                    b.Property<string>("PhoneNumber");

                    b.HasKey("Id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("QLNH.Infrastructure.Entities.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content")
                        .HasColumnType("varchar(max)");

                    b.Property<DateTime>("DateStart");

                    b.Property<string>("EventURL")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("ImgURL")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Title")
                        .HasColumnType("varchar(255)");

                    b.HasKey("Id");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("QLNH.Infrastructure.Entities.FeedBacks", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("Message");

                    b.Property<string>("Name");

                    b.Property<string>("Subject");

                    b.HasKey("Id");

                    b.ToTable("FeedBacks");
                });

            modelBuilder.Entity("QLNH.Infrastructure.Entities.Food", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Category");

                    b.Property<string>("ImageURL");

                    b.Property<bool>("IsNew");

                    b.Property<bool>("IsPromote");

                    b.Property<string>("Name");

                    b.Property<decimal>("Price");

                    b.Property<decimal>("Promote");

                    b.HasKey("Id");

                    b.ToTable("Foods");
                });

            modelBuilder.Entity("QLNH.Infrastructure.Entities.RestaurantInformation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Adresss");

                    b.Property<string>("Email");

                    b.Property<string>("FaceBookURL");

                    b.Property<string>("HomeURL");

                    b.Property<string>("InstagramURL");

                    b.Property<string>("Location_src");

                    b.Property<string>("LogoURL");

                    b.Property<string>("MenuURL");

                    b.Property<string>("Name");

                    b.Property<string>("OpenTime");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("ReserveURL");

                    b.Property<string>("TwitterURL");

                    b.HasKey("Id");

                    b.ToTable("RestaurantInformations");
                });

            modelBuilder.Entity("QLNH.Infrastructure.Entities.Table", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EmployeeId");

                    b.Property<int>("TableStatusId");

                    b.HasKey("Id");

                    b.ToTable("Tables");
                });

            modelBuilder.Entity("QLNH.Infrastructure.Entities.BookTable", b =>
                {
                    b.HasOne("QLNH.Infrastructure.Entities.Customer", "Customer")
                        .WithMany("BookTables")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("QLNH.Infrastructure.Entities.Employee", "Employee")
                        .WithOne("BookTable")
                        .HasForeignKey("QLNH.Infrastructure.Entities.BookTable", "EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
