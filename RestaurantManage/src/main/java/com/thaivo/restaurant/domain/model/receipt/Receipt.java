package com.thaivo.restaurant.domain.model.receipt;

import com.thaivo.restaurant.domain.model.order.Order;
import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity(name = "tbl_receipt")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Receipt {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(nullable = false)
    private String total_cost;
    @Column(nullable = false)
    private Long created_at;


    /////////////////////////////////
    @OneToOne
    @JoinColumn(columnDefinition = "order_id", nullable = false, unique = true)
    private Order order;

    @ManyToOne
    @JoinColumn(columnDefinition = "created_by", nullable = false)
    private Staff staff;
    /////////////////////////////////
}
