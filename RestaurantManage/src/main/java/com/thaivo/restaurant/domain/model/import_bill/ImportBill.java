package com.thaivo.restaurant.domain.model.import_bill;

import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity(name = "tbl_import_bill")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImportBill {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(name = "created_at", nullable = false)
    private Long createdAt;
    @Column(name = "total_cost", nullable = false)
    private Double totalCost;
    @Column(nullable = false)
    private String description;


    //////////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "food_id", nullable = false, updatable = false)
    private Food food;

    @ManyToOne
    @JoinColumn(columnDefinition = "created_by", nullable = false, updatable = false)
    private Staff staff;
    //////////////////////////
}
