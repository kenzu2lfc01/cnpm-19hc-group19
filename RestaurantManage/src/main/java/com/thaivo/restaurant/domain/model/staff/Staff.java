package com.thaivo.restaurant.domain.model.staff;

import com.thaivo.restaurant.domain.model.account.Account;
import com.thaivo.restaurant.domain.model.assigned.Assigned;
import com.thaivo.restaurant.domain.model.import_bill.ImportBill;
import com.thaivo.restaurant.domain.model.order.Order;
import com.thaivo.restaurant.domain.model.payroll.Payroll;
import com.thaivo.restaurant.domain.model.receipt.Receipt;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity(name = "tbl_staff")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Staff {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    private String phone;
    private Long join_date;
    private Double salary;
    private Double allowance;


    /////////////////////////////
    @OneToOne(mappedBy = "staff")
    private Account account;

    @OneToMany(mappedBy = "staff")
    private Set<Assigned> assignedSet;

    @OneToMany(mappedBy = "staff")
    private Set<ImportBill> importBills;

    @OneToMany(mappedBy = "staff")
    private Set<Order> orders;

    @OneToMany(mappedBy = "staff")
    private Set<Payroll> payrolls;

    @OneToMany(mappedBy = "staff")
    private Set<Receipt> receipts;
    //////////////////////////////
}
