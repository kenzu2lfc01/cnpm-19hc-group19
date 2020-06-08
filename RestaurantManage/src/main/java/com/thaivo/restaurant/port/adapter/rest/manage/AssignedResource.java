package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.AssignedApplication;
import com.thaivo.restaurant.application.command.AssignedCommand;
import com.thaivo.restaurant.domain.model.assigned.Assigned;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.thaivo.restaurant.domain.model.staff.Staff.Position.MANAGER;

@RestController
@RequestMapping("/manage/assigned")
public class AssignedResource {
    private AssignedApplication assignedApplication;

    @Autowired
    public AssignedResource(AssignedApplication assignedApplication) {
        this.assignedApplication = assignedApplication;
    }

    @Authentication(positions = { MANAGER })
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody AssignedCommand.Create command){
        try {
            Assigned.View assigned = assignedApplication.add(command);

            return new ResponseEntity<>(assigned, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { MANAGER })
    @PostMapping("/update")
    public ResponseEntity<Object> update(@RequestHeader(name="Authorization") String token, @RequestBody AssignedCommand.Update command){
        try {
            assignedApplication.update(command);

            return new ResponseEntity<>("Updated", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { MANAGER })
    @GetMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@RequestHeader(name="Authorization") String token, @PathVariable String id){
        try {
            assignedApplication.delete(id);

            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { MANAGER })
    @GetMapping("/get/staff/{staffId}")
    public ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token, @PathVariable String staffId){
        try {
            List<Assigned.View> list = assignedApplication.getByStaff(staffId);

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { MANAGER })
    @GetMapping("/get/dow/{dayOfWeek}")
    public ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token, @PathVariable Assigned.DayOfWeek dayOfWeek){
        try {
            List<Assigned.View> list = assignedApplication.getByDayOfWeek(dayOfWeek);

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
