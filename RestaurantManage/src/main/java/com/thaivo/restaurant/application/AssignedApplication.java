package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.AssignedCommand;
import com.thaivo.restaurant.domain.model.assigned.Assigned;
import com.thaivo.restaurant.domain.model.assigned.AssignedService;
import com.thaivo.restaurant.domain.model.staff.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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

    public Assigned.View add(AssignedCommand.Create command){
        Assigned assigned = assignedService.add(Assigned.builder()
                .staff(staffService.getById(command.getStaffId()))
                .dayOfWeek(command.getDayOfWeek())
                .session(command.getSession())
                .build());

        return Assigned.View.from(assigned);
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

    public List<Assigned.View> getByStaff(String staffId){
        return assignedService.getByStaffId(staffId).stream()
            .map(Assigned.View::from).collect(Collectors.toList());
    }

    public List<Assigned.View> getByDayOfWeek(Assigned.DayOfWeek dayOfWeek){
        return assignedService.getByDayOfWeek(dayOfWeek).stream()
            .map(Assigned.View::from).collect(Collectors.toList());
    }
}
