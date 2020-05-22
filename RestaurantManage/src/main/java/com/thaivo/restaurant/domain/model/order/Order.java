package com.thaivo.restaurant.domain.model.order;

import com.thaivo.restaurant.domain.model.ReferenceData;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import com.thaivo.restaurant.domain.model.receipt.Receipt;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.domain.model.table.RTable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(columnDefinition = "created_by", nullable = false, updatable = false)
    private Staff staff;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(columnDefinition = "table_id", nullable = false, updatable = false)
    private RTable table;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    private List<OrderDetail> orderDetails;

    @OneToOne(mappedBy = "order", fetch = FetchType.LAZY)
    private Receipt receipt;

    @OneToOne(mappedBy = "lastOrder", fetch = FetchType.LAZY)
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
        private List<OrderDetail.View> orderDetails;

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
                            .map(OrderDetail.View::quick)
                            .collect(Collectors.toList()))
                    .build();
        }
        public static View quick(Order order){
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
                    .build();
        }
    }
}
