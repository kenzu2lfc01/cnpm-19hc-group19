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
import java.util.stream.Collectors;

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


    public Payroll.View add(PayrollCommand.Create command){
        Staff staff = staffService.getById(command.getStaffId());

        Payroll payroll = payrollService.add(Payroll.builder()
                .staff(staff)
                .month(command.getMonth())
                .year(command.getYear())
                .salary(staff.getSalary())
                .allowance(staff.getAllowance())
                .total(staff.getSalary() + staff.getAllowance())
                .build());

        return Payroll.View.from(payroll);
    }

    public List<Payroll.View> getByStaff(String staffId){
        return payrollService.getByStaffId(staffId).stream()
            .map(Payroll.View::from).collect(Collectors.toList());
    }

    public List<Payroll.View> getByMonthYear(Integer month, Integer year){
        return payrollService.getByMonthAndYear(month, year).stream()
                .map(Payroll.View::from).collect(Collectors.toList());
    }

    public Page<Payroll.View> getByTime(PayrollCommand.GetByTime command){
        return payrollService.getByTime(command.getFrom(), command.getTo(), PageRequest.of(command.getPage()-1, command.getSize()))
                .map(Payroll.View::from);
    }

    public Double getTotalSalaryByTime(PayrollCommand.GetByTime command){
        return payrollService.getTotalSalaryByTime(command.getFrom(), command.getTo());
    }
}
