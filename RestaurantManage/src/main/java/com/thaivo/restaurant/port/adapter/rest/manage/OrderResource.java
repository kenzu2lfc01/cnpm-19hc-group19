package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.OrderApplication;
import com.thaivo.restaurant.application.command.OrderCommand;
import com.thaivo.restaurant.domain.model.order.Order;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manage/order")
public class OrderResource {
    private OrderApplication orderApplication;


    @Autowired
    public OrderResource(OrderApplication orderApplication) {
        this.orderApplication = orderApplication;
    }

    @Authentication(positions = { Staff.Position.SERVE })
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody OrderCommand.Create command) {
        try {
            command.setStaffId(token);

            Order.View order = orderApplication.add(command);

            return new ResponseEntity<>(order, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @Authentication(positions = { Staff.Position.MANAGER })
    @GetMapping("/get")
    public ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token, @ModelAttribute OrderCommand.Get command) {
        try {
            Page<Order.View> page;
            if(command.getTableId() == null) page = orderApplication.getByTime(command);
            else page = orderApplication.getByTimeInTable(command);

            return new ResponseEntity<>(page, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER })
    @GetMapping("/get/{id}")
    public ResponseEntity<Object> getById(@RequestHeader(name="Authorization") String token, @PathVariable String id) {
        try {
            Order.View order = orderApplication.getById(id);

            return new ResponseEntity<>(order, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
