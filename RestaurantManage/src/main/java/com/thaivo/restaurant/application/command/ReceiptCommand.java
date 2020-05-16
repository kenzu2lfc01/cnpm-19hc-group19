package com.thaivo.restaurant.application.command;

import lombok.Builder;
import lombok.Data;

public class ReceiptCommand {

    @Data
    @Builder
    public static class Create {
        private String tableId;
        private String staffId;
        private Double surcharge;
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
