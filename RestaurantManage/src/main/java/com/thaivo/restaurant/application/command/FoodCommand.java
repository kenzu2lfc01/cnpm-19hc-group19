package com.thaivo.restaurant.application.command;

import com.thaivo.restaurant.domain.model.food.Food;
import lombok.Builder;
import lombok.Data;

public class FoodCommand {

    @Data
    @Builder
    public static class Create {
        private String name;
        private Double price;
        private String image;
        private Food.Type type;
    }

    @Data
    @Builder
    public static class Update {
        private String id;
        private String name;
        private Double price;
        private String image;
        private Food.Type type;
    }
}
