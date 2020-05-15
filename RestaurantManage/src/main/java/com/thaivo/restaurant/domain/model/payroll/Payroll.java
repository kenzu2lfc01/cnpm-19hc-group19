package com.thaivo.restaurant.domain.model.payroll;

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


    ///////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "staff_id", nullable = false, updatable = false)
    private Staff staff;
    ///////////////////////
}
