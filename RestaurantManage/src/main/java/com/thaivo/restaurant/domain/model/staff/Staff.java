package com.thaivo.restaurant.domain.model.staff;

import com.thaivo.restaurant.domain.model.ReferenceData;
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
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Entity(name = "tbl_staff")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Staff {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String phone;
    @Column(name = "join_date", nullable = false)
    private Long joinDate;
    @Column(nullable = false)
    private Double salary;
    @Column(nullable = false)
    private Double allowance;
    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Position position;


    /////////////////////////////
    @OneToOne(mappedBy = "staff", fetch = FetchType.LAZY)
    private Account account;

    @OneToMany(mappedBy = "staff", fetch = FetchType.LAZY)
    private List<Assigned> assignedSet;

    @OneToMany(mappedBy = "staff", fetch = FetchType.LAZY)
    private List<ImportBill> importBills;

    @OneToMany(mappedBy = "staff", fetch = FetchType.LAZY)
    private List<Order> orders;

    @OneToMany(mappedBy = "staff", fetch = FetchType.LAZY)
    private List<Payroll> payrolls;

    @OneToMany(mappedBy = "staff", fetch = FetchType.LAZY)
    private List<Receipt> receipts;
    //////////////////////////////

    public enum Position { SERVE, CHEF, CASHIER, MANAGER }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class View {
        private String id;
        private String name;
        private String phone;
        private Long joinDate;
        private Double salary;
        private Double allowance;
        private Position position;
        private Account.View account;

        public static View from(Staff staff){
            return View.builder()
                    .id(staff.getId())
                    .name(staff.getName())
                    .phone(staff.getPhone())
                    .joinDate(staff.getJoinDate())
                    .salary(staff.getSalary())
                    .allowance(staff.getAllowance())
                    .position(staff.getPosition())
                    .account(Account.View.from(staff.getAccount()))
                    .build();
        }
    }
}
