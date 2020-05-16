package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.StaffApplication;
import com.thaivo.restaurant.application.command.StaffCommand;
import com.thaivo.restaurant.domain.model.staff.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manage/staff")
public class StaffResource {

    private StaffApplication staffApplication;

    @Autowired
    public StaffResource(StaffApplication staffApplication) {
        this.staffApplication = staffApplication;
    }

    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestBody StaffCommand.Create command){
        try {
            Staff.View staff = staffApplication.add(command);

            return new ResponseEntity<>(staff, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/update")
    public ResponseEntity<Object> update(@RequestBody StaffCommand.Update command){
        try {
            Staff.View staff = staffApplication.update(command);

            return new ResponseEntity<>(staff, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id){
        try {
            staffApplication.delete(id);

            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/get")
    public ResponseEntity<Object> get(){
        try {
            List<Staff.View> list = staffApplication.getAll();

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Object> getById(@PathVariable String id){
        try {
            Staff.View staff = staffApplication.getById(id);

            return new ResponseEntity<>(staff, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
