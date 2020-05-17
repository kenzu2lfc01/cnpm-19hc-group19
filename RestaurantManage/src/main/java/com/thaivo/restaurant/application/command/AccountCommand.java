package com.thaivo.restaurant.application.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class AccountCommand {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Login {
        private String username;
        private String password;
    }


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Update {
        private String id;
        private String username;
        private String password;
    }
}
