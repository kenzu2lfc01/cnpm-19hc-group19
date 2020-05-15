package com.thaivo.restaurant.domain.model.food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
    private FoodRepository repository;

    @Autowired
    public FoodService(FoodRepository repository) {
        this.repository = repository;
    }

    public Food add(Food food){
        return repository.save(food);
    }

    public void update(Food food){
        repository.update(food.getId(), food.getName(), food.getPrice(), food.getImage(), food.getType());
    }

    public void delete(String id){
        repository.deleteById(id);
    }

    public List<Food> getAll(){
        return repository.findAll();
    }
}
