package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.PayrollApplication;
import com.thaivo.restaurant.application.command.PayrollCommand;
import com.thaivo.restaurant.domain.model.payroll.Payroll;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manage/payroll")
public class PayrollResource {
    private PayrollApplication payrollApplication;

    @Autowired
    public PayrollResource(PayrollApplication payrollApplication) {
        this.payrollApplication = payrollApplication;
    }

    @Authentication(positions = { Staff.Position.MANAGER })
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody PayrollCommand.Create command){
        try {
            Payroll.View payroll = payrollApplication.add(command);

            return new ResponseEntity<>(payroll, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER })
    @GetMapping("/getByStaff/{staffId}")
    public ResponseEntity<Object> getByStaff(@RequestHeader(name="Authorization") String token, @PathVariable String staffId){
        try {
            List<Payroll.View> list = payrollApplication.getByStaff(staffId);

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER })
    @GetMapping("/getByTime")
    public ResponseEntity<Object> getByTime(@RequestHeader(name="Authorization") String token, @ModelAttribute PayrollCommand.GetByTime command){
        try {
            Page<Payroll.View> page = payrollApplication.getByTime(command);

            return new ResponseEntity<>(page, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
