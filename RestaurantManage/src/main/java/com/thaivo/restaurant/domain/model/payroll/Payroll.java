package com.thaivo.restaurant.domain.model.payroll;

import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity(name = "tbl_payroll")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Payroll {
    @Id
    @GeneratedValue
    private String id;
    private Double salary;
    private Double allowance;
    private Double total;
    private Integer month;
    private Integer year;


    ///////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "staff_id")
    private Staff staff;
    ///////////////////////
}
