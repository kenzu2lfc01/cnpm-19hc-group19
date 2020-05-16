package com.thaivo.restaurant.application.command;

import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class OrderDetailCommand {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Create {
        private String orderId;
        private String foodId;
        private Integer amount;
        private String note;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UpdateAmount {
        private String id;
        private Integer amount;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UpdateStatus {
        private String id;
        private OrderDetail.Status status;
    }
}
