package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.ReceiptApplication;
import com.thaivo.restaurant.application.command.ReceiptCommand;
import com.thaivo.restaurant.domain.model.receipt.Receipt;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manage/receipt")
public class ReceiptResource {
    private ReceiptApplication receiptApplication;

    @Autowired
    public ReceiptResource(ReceiptApplication receiptApplication) {
        this.receiptApplication = receiptApplication;
    }

    @Authentication(positions = { Staff.Position.MANAGER, Staff.Position.CASHIER })
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody ReceiptCommand.Create command){
        try {
            command.setStaffId(token);

            Receipt.View receipt = receiptApplication.add(command);

            return new ResponseEntity<>(receipt, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER, Staff.Position.CASHIER })
    @GetMapping("/get")
    public ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token, @ModelAttribute ReceiptCommand.GetByTime command){
        try {
            Page<Receipt.View> page = receiptApplication.getByTime(command);

            return new ResponseEntity<>(page, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER, Staff.Position.CASHIER })
    @GetMapping("/get/{id}")
    public ResponseEntity<Object> getById(@RequestHeader(name="Authorization") String token, @PathVariable String id){
        try {
            Receipt.View receipt = receiptApplication.getById(id);

            return new ResponseEntity<>(receipt, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
