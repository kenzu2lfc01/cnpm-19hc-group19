package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.FoodCommand;
import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.food.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Component
@Transactional
public class FoodApplication {
    private FoodService foodService;

    @Autowired
    public FoodApplication(FoodService foodService) {
        this.foodService = foodService;
    }

    public Food.View add(FoodCommand.Create command){
        Food food = foodService.add(Food.builder()
                .name(command.getName())
                .price(command.getPrice())
                .image(command.getImage())
                .type(command.getType())
                .isDeleted(false)
                .build());

        return Food.View.from(food);
    }

    public void delete(String foodId){
        foodService.delete(foodId);
    }

    public Food.View update(FoodCommand.Update command){
        foodService.update(Food.builder()
                .id(command.getId())
                .name(command.getName())
                .price(command.getPrice())
                .image(command.getImage())
                .type(command.getType())
                .build());

        Food food = foodService.getById(command.getId());
        return Food.View.from(food);
    }

    public List<Food.View> getAll(){
        return foodService.getAll().stream()
                .map(Food.View::from)
                .collect(Collectors.toList());
    }
}
