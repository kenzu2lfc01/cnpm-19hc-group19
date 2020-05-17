package com.thaivo.restaurant.application.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class OrderCommand {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Create {
        private String staffId;
        private String tableId;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Get {
        private String tableId;
        private Integer page;
        private Integer size;
        private Long from;
        private Long to;
    }
}
