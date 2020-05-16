package com.thaivo.restaurant.application.command;

import lombok.Builder;
import lombok.Data;

public class OrderCommand {

    @Data
    @Builder
    public static class Create {
        private String staffId;
        private String tableId;
    }

    @Data
    @Builder
    public static class Get {
        private String tableId;
        private Integer page;
        private Integer size;
        private Long from;
        private Long to;
    }
}
