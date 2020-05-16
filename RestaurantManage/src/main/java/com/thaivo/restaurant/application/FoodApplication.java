package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.FoodCommand;
import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.food.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class FoodApplication {
    private FoodService foodService;

    @Autowired
    public FoodApplication(FoodService foodService) {
        this.foodService = foodService;
    }

    public Food add(FoodCommand.Create command){
        return foodService.add(Food.builder()
                .name(command.getName())
                .price(command.getPrice())
                .image(command.getImage())
                .type(command.getType())
                .isDeleted(false)
                .build());
    }

    public void delete(String foodId){
        foodService.delete(foodId);
    }

    public void update(FoodCommand.Update command){
        foodService.update(Food.builder()
                .id(command.getId())
                .name(command.getName())
                .price(command.getPrice())
                .image(command.getImage())
                .type(command.getType())
                .build());
    }

    public List<Food> getAll(){
        return foodService.getAll();
    }
}
