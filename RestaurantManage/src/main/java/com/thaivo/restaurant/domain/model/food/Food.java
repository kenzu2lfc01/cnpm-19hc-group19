package com.thaivo.restaurant.domain.model.food;

import com.thaivo.restaurant.domain.model.import_bill.ImportBill;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity(name = "tbl_food")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Food {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private Double price;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Type type;
    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted;


    /////////////////////////////////
    @OneToMany(mappedBy = "food")
    private Set<ImportBill> importBills;

    @OneToMany(mappedBy = "food")
    private Set<OrderDetail> orderDetails;
    /////////////////////////////////

    public enum Type { FOOD, DRINK }
}
