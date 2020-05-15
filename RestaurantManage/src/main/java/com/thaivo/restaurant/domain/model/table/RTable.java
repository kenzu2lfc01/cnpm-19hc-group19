package com.thaivo.restaurant.domain.model.table;

import com.thaivo.restaurant.domain.model.order.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity(name = "tbl_table")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RTable {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    @Enumerated(EnumType.STRING)
    private Status status;
    private Integer capacity;
    private Boolean is_deleted;


    ///////////////////////////////////
    @OneToMany(mappedBy = "table")
    private Set<Order> orders;

    @OneToOne
    @JoinColumn(columnDefinition = "last_order")
    private Order lastOrder;
    //////////////////////////////////


    public enum Status { READY, BUSY }
}
