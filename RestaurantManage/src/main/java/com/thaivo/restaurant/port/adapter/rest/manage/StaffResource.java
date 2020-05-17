package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.StaffApplication;
import com.thaivo.restaurant.application.command.StaffCommand;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
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

    @Authentication(positions = { Staff.Position.MANAGER })
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody StaffCommand.Create command){
        try {
            Staff.View staff = staffApplication.add(command);

            return new ResponseEntity<>(staff, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER })
    @PostMapping("/update")
    public ResponseEntity<Object> update(@RequestHeader(name="Authorization") String token, @RequestBody StaffCommand.Update command){
        try {
            Staff.View staff = staffApplication.update(command);

            return new ResponseEntity<>(staff, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER })
    @GetMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@RequestHeader(name="Authorization") String token, @PathVariable String id){
        try {
            staffApplication.delete(id);

            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER })
    @GetMapping("/get")
    public ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token){
        try {
            List<Staff.View> list = staffApplication.getAll();

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER })
    @GetMapping("/get/{id}")
    public ResponseEntity<Object> getById(@RequestHeader(name="Authorization") String token, @PathVariable String id){
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
