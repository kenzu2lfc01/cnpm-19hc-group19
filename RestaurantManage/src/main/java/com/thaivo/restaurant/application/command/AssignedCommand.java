package com.thaivo.restaurant.application.command;

import com.thaivo.restaurant.domain.model.assigned.Assigned;
import lombok.Builder;
import lombok.Data;

public class AssignedCommand {

    @Data
    @Builder
    public static class Create {
        private String staffId;
        private Assigned.DayOfWeek dayOfWeek;
        private Assigned.Session session;
    }

    @Data
    @Builder
    public static class Update {
        private String id;
        private Assigned.DayOfWeek dayOfWeek;
        private Assigned.Session session;
    }
}
