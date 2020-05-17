package com.thaivo.restaurant.application.command;

import com.thaivo.restaurant.domain.model.food.Food;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class FoodCommand {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Create {
        private String name;
        private Double price;
        private String image;
        private Food.Type type;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Update {
        private String id;
        private String name;
        private Double price;
        private String image;
        private Food.Type type;
    }
}
