package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.OrderDetailApplication;
import com.thaivo.restaurant.application.command.OrderDetailCommand;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manage/order_detail")
public class OrderDetailResource {
    private OrderDetailApplication orderDetailApplication;

    @Autowired
    public OrderDetailResource(OrderDetailApplication orderDetailApplication) {
        this.orderDetailApplication = orderDetailApplication;
    }

    @Authentication(positions = { Staff.Position.SERVE })
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody OrderDetailCommand.Create command) {
        try {
            OrderDetail.View orderDetail = orderDetailApplication.add(command);

            return new ResponseEntity<>(orderDetail, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @Authentication(positions = { Staff.Position.SERVE })
    @PostMapping("/update/amount")
    public ResponseEntity<Object> updateAmount(@RequestHeader(name="Authorization") String token, @RequestBody OrderDetailCommand.UpdateAmount command) {
        try {
            orderDetailApplication.updateAmount(command);

            return new ResponseEntity<>("Updated", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @Authentication(positions = { Staff.Position.CHEF, Staff.Position.SERVE })
    @PostMapping("/update/status")
    public ResponseEntity<Object> updateStatus(@RequestHeader(name="Authorization") String token, @RequestBody OrderDetailCommand.UpdateStatus command) {
        try {
            orderDetailApplication.updateStatus(command);

            return new ResponseEntity<>("Updated", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @Authentication(positions = { Staff.Position.SERVE })
    @GetMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@RequestHeader(name="Authorization") String token, @PathVariable String id) {
        try {
            orderDetailApplication.delete(id);

            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @Authentication(positions = { Staff.Position.CHEF, Staff.Position.SERVE })
    @GetMapping("/get/{status}")
    public ResponseEntity<Object> getPending(@RequestHeader(name="Authorization") String token, @PathVariable OrderDetail.Status status) {
        try {
            List<OrderDetail.View> list = orderDetailApplication.getOrderDetailByStatus(status);

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
