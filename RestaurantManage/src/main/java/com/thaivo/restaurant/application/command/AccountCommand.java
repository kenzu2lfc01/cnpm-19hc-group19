package com.thaivo.restaurant.application.command;

import lombok.Builder;
import lombok.Data;

public class AccountCommand {

    @Data
    @Builder
    public static class Update {
        private String id;
        private String username;
        private String password;
    }
}
