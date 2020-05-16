package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.AssignedApplication;
import com.thaivo.restaurant.application.command.AssignedCommand;
import com.thaivo.restaurant.domain.model.assigned.Assigned;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manage/assigned")
public class AssignedResource {
    private AssignedApplication assignedApplication;

    @Autowired
    public AssignedResource(AssignedApplication assignedApplication) {
        this.assignedApplication = assignedApplication;
    }

    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestBody AssignedCommand.Create command){
        try {
            Assigned.View assigned = assignedApplication.add(command);

            return new ResponseEntity<>(assigned, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/update")
    public ResponseEntity<Object> update(@RequestBody AssignedCommand.Update command){
        try {
            assignedApplication.update(command);

            return new ResponseEntity<>("Updated", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<Object> update(@PathVariable String id){
        try {
            assignedApplication.delete(id);

            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/get/staff/{staffId}")
    public ResponseEntity<Object> get(@PathVariable String staffId){
        try {
            List<Assigned.View> list = assignedApplication.getByStaff(staffId);

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/get/dow/{dayOfWeek}")
    public ResponseEntity<Object> get(@PathVariable Assigned.DayOfWeek dayOfWeek){
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
