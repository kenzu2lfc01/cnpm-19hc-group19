package com.thaivo.restaurant.domain.model.order_detail;

import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.order.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity(name = "tbl_order_detail")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {
    @Id
    @GeneratedValue
    private String id;
    private Double price;
    private Integer amount;
    private Long order_at;
    private Long done_at;
    private String note;
    @Enumerated(EnumType.STRING)
    private Status status;


    ////////////////////////////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(columnDefinition = "food_id")
    private Food food;
    ////////////////////////////////////////////


    public enum Status { PENDING, PROGRESS, FINISH }
}
