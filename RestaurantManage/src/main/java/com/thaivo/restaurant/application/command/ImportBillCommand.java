package com.thaivo.restaurant.application.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class ImportBillCommand {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Create {
        private String staffId;
        private String foodId;
        private Double totalCost;
        private String description;
    }


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class GetByTime {
        private Long from;
        private Long to;
        private Integer page;
        private Integer size;
    }
}
