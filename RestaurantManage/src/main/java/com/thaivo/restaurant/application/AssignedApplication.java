package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.AssignedCommand;
import com.thaivo.restaurant.domain.model.assigned.Assigned;
import com.thaivo.restaurant.domain.model.assigned.AssignedService;
import com.thaivo.restaurant.domain.model.staff.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class AssignedApplication {
    private AssignedService assignedService;
    private StaffService staffService;

    @Autowired
    public AssignedApplication(AssignedService assignedService, StaffService staffService) {
        this.assignedService = assignedService;
        this.staffService = staffService;
    }

    public Assigned add(AssignedCommand.Create command){
        return assignedService.add(Assigned.builder()
                .staff(staffService.getById(command.getStaffId()))
                .dayOfWeek(command.getDayOfWeek())
                .session(command.getSession())
                .build());
    }

    public void delete(String id){
        assignedService.delete(id);
    }

    public void update(AssignedCommand.Update command){
        Assigned assigned = assignedService.getById(command.getId());

        assignedService.update(Assigned.builder()
                .id(command.getId())
                .session(command.getSession())
                .dayOfWeek(command.getDayOfWeek())
                .staff(assigned.getStaff())
                .build());
    }

    public List<Assigned> getAll(){
        return assignedService.getAll();
    }

    public List<Assigned> getByStaff(String staffId){
        return assignedService.getByStaffId(staffId);
    }

    public List<Assigned> getByDayOfWeek(Assigned.DayOfWeek dayOfWeek){
        return assignedService.getByDayOfWeek(dayOfWeek);
    }
}
