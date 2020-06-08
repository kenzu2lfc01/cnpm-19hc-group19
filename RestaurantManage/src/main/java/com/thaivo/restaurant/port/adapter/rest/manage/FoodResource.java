package com.thaivo.restaurant.port.adapter.rest.manage;


import com.thaivo.restaurant.application.FoodApplication;
import com.thaivo.restaurant.application.command.FoodCommand;
import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.thaivo.restaurant.domain.model.staff.Staff.Position.MANAGER;

@RestController
@RequestMapping("/manage/food")
public class FoodResource {
    private FoodApplication foodApplication;

    @Autowired
    public FoodResource(FoodApplication foodApplication) {
        this.foodApplication = foodApplication;
    }

    @Authentication(positions = { MANAGER })
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody FoodCommand.Create command){
        try {
            Food.View food = foodApplication.add(command);

            return new ResponseEntity<>(food, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { MANAGER })
    @PostMapping("/update")
    public ResponseEntity<Object> update(@RequestHeader(name="Authorization") String token, @RequestBody FoodCommand.Update command){
        try {
            Food.View food = foodApplication.update(command);

            return new ResponseEntity<>(food, HttpStatus.OK);
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
            foodApplication.delete(id);

            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { MANAGER, Staff.Position.SERVE, Staff.Position.CHEF })
    @GetMapping("/get")
    public ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token){
        try {
            List<Food.View> list = foodApplication.getAll();

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
