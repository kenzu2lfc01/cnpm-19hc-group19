package com.thaivo.restaurant.domain.model.import_bill;

import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity(name = "tbl_import_bill")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImportBill {
    @Id
    @GeneratedValue
    private String id;
    private Long created_at;
    private Double total_cost;
    private String description;


    //////////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "food_id")
    private Food food;

    @ManyToOne
    @JoinColumn(columnDefinition = "created_by")
    private Staff staff;
    //////////////////////////
}
