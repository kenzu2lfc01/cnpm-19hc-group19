package com.thaivo.restaurant.domain.model.receipt;

import com.thaivo.restaurant.domain.model.order.Order;
import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity(name = "tbl_receipt")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Receipt {
    @Id
    @GeneratedValue
    private String id;
    private String total_cost;
    private Long created_at;


    /////////////////////////////////
    @OneToOne
    @JoinColumn(columnDefinition = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(columnDefinition = "created_by")
    private Staff staff;
    /////////////////////////////////
}
