package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.OrderApplication;
import com.thaivo.restaurant.application.command.OrderCommand;
import com.thaivo.restaurant.domain.model.order.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.EntityGraph;
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

    // Require SERVE staff
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody OrderCommand.Create command) {
        try {
            token = token.substring(7);
            command.setStaffId(token);

            Order.View order = orderApplication.add(command);

            return new ResponseEntity<>(order, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    // Require MANAGE
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
}
