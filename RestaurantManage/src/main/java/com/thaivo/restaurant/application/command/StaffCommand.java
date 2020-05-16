package com.thaivo.restaurant.application.command;

import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class StaffCommand {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Create {
        private String name;
        private String phone;
        private Double salary;
        private Double allowance;
        private Staff.Position position;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Update {
        private String id;
        private String name;
        private String phone;
        private Double salary;
        private Double allowance;
        private Staff.Position position;
    }

}
