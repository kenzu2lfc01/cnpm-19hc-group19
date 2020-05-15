package com.thaivo.restaurant.domain.model.order;

import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import com.thaivo.restaurant.domain.model.receipt.Receipt;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.domain.model.table.RTable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity(name = "tbl_order")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue
    private String id;
    private Long created_at;


    //////////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "created_by")
    private Staff staff;

    @ManyToOne
    @JoinColumn(columnDefinition = "table_id")
    private RTable table;

    @OneToMany(mappedBy = "order")
    private Set<OrderDetail> orderDetails;

    @OneToOne(mappedBy = "order")
    private Receipt receipt;

    @OneToOne(mappedBy = "lastOrder")
    private RTable lastTable;
    //////////////////////////
}
