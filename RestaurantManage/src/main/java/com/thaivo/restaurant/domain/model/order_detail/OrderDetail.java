package com.thaivo.restaurant.domain.model.order_detail;

import com.thaivo.restaurant.domain.model.ReferenceData;
import com.thaivo.restaurant.domain.model.account.Account;
import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.order.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity(name = "tbl_order_detail")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(nullable = false)
    private Double price;
    @Column(nullable = false)
    private Integer amount;
    @Column(name = "order_at", nullable = false)
    private Long orderAt;
    @Column(name = "done_at")
    private Long doneAt;
    private String note;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;


    ////////////////////////////////////////////
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(columnDefinition = "order_id", nullable = false, updatable = false)
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(columnDefinition = "food_id", nullable = false, updatable = false)
    private Food food;
    ////////////////////////////////////////////


    public enum Status { PENDING, PROGRESS, READY, FINISH }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class View {
        private String id;
        private Double price;
        private Integer amount;
        private Long orderAt;
        private Long doneAt;
        private String note;
        private Status status;
        private ReferenceData food;
        private ReferenceData table;

        public static View from(OrderDetail orderDetail){
            return View.builder()
                    .id(orderDetail.getId())
                    .price(orderDetail.getPrice())
                    .amount(orderDetail.getAmount())
                    .orderAt(orderDetail.getOrderAt())
                    .doneAt(orderDetail.getDoneAt())
                    .note(orderDetail.getNote())
                    .status(orderDetail.getStatus())
                    .food(ReferenceData.builder()
                            .id( orderDetail.getFood().getId())
                            .name(orderDetail.getFood().getName())
                            .build())
                    .table(ReferenceData.builder()
                            .id(orderDetail.getOrder().getTable().getId())
                            .name(orderDetail.getOrder().getTable().getId())
                            .build()
                    )
                    .build();
        }
        public static View quick(OrderDetail orderDetail){
            return View.builder()
                    .id(orderDetail.getId())
                    .price(orderDetail.getPrice())
                    .amount(orderDetail.getAmount())
                    .orderAt(orderDetail.getOrderAt())
                    .doneAt(orderDetail.getDoneAt())
                    .note(orderDetail.getNote())
                    .status(orderDetail.getStatus())
                    .food(ReferenceData.builder()
                            .id( orderDetail.getFood().getId())
                            .name(orderDetail.getFood().getName())
                            .build())
                    .build();
        }
    }
}
