package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.StaffCommand;
import com.thaivo.restaurant.domain.model.account.Account;
import com.thaivo.restaurant.domain.model.account.AccountService;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.domain.model.staff.StaffService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Component
@Transactional
public class StaffApplication {
    private StaffService staffService;
    private AccountService accountService;

    public StaffApplication(StaffService staffService, AccountService accountService) {
        this.staffService = staffService;
        this.accountService = accountService;
    }


    public Staff add(StaffCommand.Create command) {

        Staff staff = staffService.add(Staff.builder()
                .name(command.getName())
                .phone(command.getPhone())
                .salary(command.getSalary())
                .allowance(command.getAllowance())
                .joinDate(System.currentTimeMillis())
                .isDeleted(false)
                .position(command.getPosition())
                .build());

        accountService.add(Account.builder()
                .staff(staff)
                .username(staff.getPhone() + "-" + UUID.randomUUID().toString())
                .password(staff.getPhone())
                .build());

        return staff;
    }

    public void update(StaffCommand.Update command){
        staffService.update(Staff.builder()
                .id(command.getId())
                .name(command.getName())
                .phone(command.getPhone())
                .salary(command.getSalary())
                .allowance(command.getAllowance())
                .position(command.getPosition())
                .build());
    }

    public void delete(String id) {
        Staff staff = staffService.getById(id);
        accountService.delete(staff.getAccount().getId());
        staffService.delete(id);
    }

    public List<Staff> getAll(){
        return staffService.getAll();
    }
}
