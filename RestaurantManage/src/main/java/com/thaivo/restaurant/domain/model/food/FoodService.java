package com.thaivo.restaurant.domain.model.food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        repository.update(food.getId(), food.getName(), food.getPrice(), food.getImage(), food.getType().toString());
    }

    public void delete(String id){
        repository.delete(id);
    }

    public List<Food> getAll(){
        return repository.findByIsDeletedFalse();
    }

    public Food getById(String id){
        Optional<Food> byId = repository.findById(id);
        if(byId.isPresent()) return byId.get();
        throw new RuntimeException("Food not found");
    }
}
