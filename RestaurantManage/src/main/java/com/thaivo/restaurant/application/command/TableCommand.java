package com.thaivo.restaurant.application.command;

import lombok.Builder;
import lombok.Data;

public class TableCommand {

    @Data
    @Builder
    public static class Create {
        private String name;
        private Integer capacity;
    }

    @Data
    @Builder
    public static class Update {
        private String id;
        private String name;
        private Integer capacity;
    }
}
