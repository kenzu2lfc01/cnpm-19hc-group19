package com.thaivo.restaurant.application.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class ReceiptCommand {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Create {
        private String tableId;
        private String staffId;
        private Double surcharge;
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
