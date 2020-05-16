package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.PayrollCommand;
import com.thaivo.restaurant.domain.model.payroll.Payroll;
import com.thaivo.restaurant.domain.model.payroll.PayrollService;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.domain.model.staff.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class PayrollApplication {
    private PayrollService payrollService;
    private StaffService staffService;

    @Autowired
    public PayrollApplication(PayrollService payrollService, StaffService staffService) {
        this.payrollService = payrollService;
        this.staffService = staffService;
    }


    public Payroll add(PayrollCommand.Create command){
        Staff staff = staffService.getById(command.getStaffId());

        return payrollService.add(Payroll.builder()
                .staff(staff)
                .month(command.getMonth())
                .year(command.getYear())
                .salary(staff.getSalary())
                .allowance(staff.getAllowance())
                .total(staff.getSalary() + staff.getAllowance())
                .build());
    }

    public List<Payroll> getByStaff(String staffId){
        return payrollService.getByStaffId(staffId);
    }

    public List<Payroll> getByMonthYear(Integer month, Integer year){
        return payrollService.getByMonthAndYear(month, year);
    }

    public Page<Payroll> getByTime(PayrollCommand.GetByTime command){
        return payrollService.getByTime(command.getFrom(), command.getTo(), PageRequest.of(command.getPage()-1, command.getSize()));
    }

    public Double getTotalSalaryByTime(PayrollCommand.GetByTime command){
        return payrollService.getTotalSalaryByTime(command.getFrom(), command.getTo());
    }
}
