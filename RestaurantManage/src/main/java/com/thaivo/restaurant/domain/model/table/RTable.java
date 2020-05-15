package com.thaivo.restaurant.domain.model.table;

import com.thaivo.restaurant.domain.model.order.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity(name = "tbl_table")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RTable {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;
    @Column(nullable = false)
    private Integer capacity;
    @Column(nullable = false)
    private Boolean is_deleted;


    ///////////////////////////////////
    @OneToMany(mappedBy = "table")
    private Set<Order> orders;

    @OneToOne
    @JoinColumn(columnDefinition = "last_order", unique = true)
    private Order lastOrder;
    //////////////////////////////////


    public enum Status { READY, BUSY }
}
