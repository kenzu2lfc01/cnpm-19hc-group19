package com.thaivo.restaurant.domain.model.receipt;

import com.thaivo.restaurant.domain.model.ReferenceData;
import com.thaivo.restaurant.domain.model.account.Account;
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
    private Double surcharge;
    @Column(name = "total_cost", nullable = false)
    private Double totalCost;
    @Column(name = "created_at", nullable = false)
    private Long createdAt;


    /////////////////////////////////
    @OneToOne
    @JoinColumn(columnDefinition = "order_id", nullable = false, unique = true, updatable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(columnDefinition = "created_by", nullable = false, updatable = false)
    private Staff staff;
    /////////////////////////////////

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class View {
        private String id;
        private Double surcharge;
        private Double totalCost;
        private Long createdAt;
        private String orderId;
        private ReferenceData staff;

        public static View from(Receipt receipt){
            return View.builder()
                    .id(receipt.getId())
                    .surcharge(receipt.getSurcharge())
                    .totalCost(receipt.getTotalCost())
                    .createdAt(receipt.getCreatedAt())
                    .orderId(receipt.getOrder().getId())
                    .staff(ReferenceData.builder()
                            .id(receipt.getStaff().getId())
                            .name(receipt.getStaff().getName())
                            .build())
                    .build();
        }
    }
}
