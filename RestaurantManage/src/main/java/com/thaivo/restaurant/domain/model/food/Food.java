package com.thaivo.restaurant.domain.model.food;

import com.thaivo.restaurant.domain.model.import_bill.ImportBill;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity(name = "tbl_food")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Food {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    private Double price;
    private String image;
    @Enumerated(EnumType.STRING)
    private Type type;


    /////////////////////////////////
    @OneToMany(mappedBy = "food")
    private Set<ImportBill> importBills;

    @OneToMany(mappedBy = "food")
    private Set<OrderDetail> orderDetails;
    /////////////////////////////////

    public enum Type { FOOD, DRINK }
}
