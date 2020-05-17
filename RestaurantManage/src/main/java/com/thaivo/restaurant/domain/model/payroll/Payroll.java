package com.thaivo.restaurant.domain.model.payroll;

import com.thaivo.restaurant.domain.model.ReferenceData;
import com.thaivo.restaurant.domain.model.account.Account;
import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity(name = "tbl_payroll")
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"staff_id", "month", "year"}))
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Payroll {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(nullable = false)
    private Double salary;
    @Column(nullable = false)
    private Double allowance;
    @Column(nullable = false)
    private Double total;
    @Column(nullable = false)
    private Integer month;
    @Column(nullable = false)
    private Integer year;
    private Long timestamp;


    ///////////////////////
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(columnDefinition = "staff_id", nullable = false, updatable = false)
    private Staff staff;
    ///////////////////////

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class View {
        private String id;
        private Double salary;
        private Double allowance;
        private Double total;
        private Integer month;
        private Integer year;
        private ReferenceData staff;

        public static View from(Payroll payroll){
            return View.builder()
                    .id(payroll.getId())
                    .salary(payroll.getSalary())
                    .allowance(payroll.getAllowance())
                    .total(payroll.getTotal())
                    .month(payroll.getMonth())
                    .year(payroll.getYear())
                    .staff(ReferenceData.builder()
                            .id(payroll.getStaff().getId())
                            .name(payroll.getStaff().getName())
                            .build())
                    .build();
        }
    }
}
