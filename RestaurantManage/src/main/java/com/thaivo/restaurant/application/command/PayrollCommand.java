package com.thaivo.restaurant.application.command;

import lombok.Builder;
import lombok.Data;

public class PayrollCommand {

    @Data
    @Builder
    public static class Create {
        private String staffId;
        private Integer month;
        private Integer year;
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
