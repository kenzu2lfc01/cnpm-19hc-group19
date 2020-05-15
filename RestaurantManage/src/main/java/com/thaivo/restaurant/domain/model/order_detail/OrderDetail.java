package com.thaivo.restaurant.domain.model.order_detail;

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
    @Column(nullable = false)
    private Long order_at;
    private Long done_at;
    private String note;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;


    ////////////////////////////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "order_id", nullable = false, updatable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(columnDefinition = "food_id", nullable = false, updatable = false)
    private Food food;
    ////////////////////////////////////////////


    public enum Status { PENDING, PROGRESS, FINISH }
}
