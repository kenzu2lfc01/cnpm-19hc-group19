package com.thaivo.restaurant.application.command;

import lombok.Builder;
import lombok.Data;

public class ImportBillCommand {

    @Data
    @Builder
    public static class Create {
        private String staffId;
        private String foodId;
        private Double totalCost;
        private String description;
    }


    @Data
    @Builder
    public static class GetByTime {
        private Long from;
        private Long to;
        private Integer page;
        private Integer size;
    }
}
