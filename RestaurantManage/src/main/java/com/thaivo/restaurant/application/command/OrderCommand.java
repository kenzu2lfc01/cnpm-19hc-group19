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
}
