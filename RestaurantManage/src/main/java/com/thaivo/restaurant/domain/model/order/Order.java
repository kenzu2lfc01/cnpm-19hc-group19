package com.thaivo.restaurant.domain.model.order;

import com.thaivo.restaurant.domain.model.ReferenceData;
import com.thaivo.restaurant.domain.model.account.Account;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import com.thaivo.restaurant.domain.model.receipt.Receipt;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.domain.model.table.RTable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Collections;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@Entity(name = "tbl_order")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(name = "created_at", nullable = false)
    private Long createdAt;


    //////////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "created_by", nullable = false, updatable = false)
    private Staff staff;

    @ManyToOne
    @JoinColumn(columnDefinition = "table_id", nullable = false, updatable = false)
    private RTable table;

    @OneToMany(mappedBy = "order")
    private Set<OrderDetail> orderDetails;

    @OneToOne(mappedBy = "order")
    private Receipt receipt;

    @OneToOne(mappedBy = "lastOrder")
    private RTable lastTable;
    //////////////////////////

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class View {
        private String id;
        private Long createdAt;
        private ReferenceData staff;
        private ReferenceData table;
        private Set<OrderDetail.View> orderDetails;

        public static View from(Order order){
            return View.builder()
                    .id(order.getId())
                    .createdAt(order.getCreatedAt())
                    .staff(ReferenceData.builder()
                            .id(order.getStaff().getId())
                            .name(order.getStaff().getName())
                            .build())
                    .table(ReferenceData.builder()
                            .id(order.getTable().getId())
                            .name(order.getTable().getName())
                            .build())
                    .orderDetails(order.getOrderDetails() == null? null :
                            order.getOrderDetails().stream()
                            .map(OrderDetail.View::from)
                            .collect(Collectors.toSet()))
                    .build();
        }
    }
}
