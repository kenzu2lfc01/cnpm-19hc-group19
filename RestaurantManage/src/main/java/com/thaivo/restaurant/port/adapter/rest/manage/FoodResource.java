package com.thaivo.restaurant.port.adapter.rest.manage;


import com.thaivo.restaurant.application.FoodApplication;
import com.thaivo.restaurant.application.command.FoodCommand;
import com.thaivo.restaurant.domain.model.food.Food;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manage/food")
public class FoodResource {
    private FoodApplication foodApplication;

    @Autowired
    public FoodResource(FoodApplication foodApplication) {
        this.foodApplication = foodApplication;
    }

    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestBody FoodCommand.Create command){
        try {
            Food.View food = foodApplication.add(command);

            return new ResponseEntity<>(food, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @PostMapping("/update")
    public ResponseEntity<Object> update(@RequestBody FoodCommand.Update command){
        try {
            Food.View food = foodApplication.update(command);

            return new ResponseEntity<>(food, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id){
        try {
            foodApplication.delete(id);

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
            List<Food.View> list = foodApplication.getAll();

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
