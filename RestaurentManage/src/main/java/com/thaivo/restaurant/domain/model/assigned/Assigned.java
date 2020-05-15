package com.thaivo.restaurant.domain.model.assigned;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Staff {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    private String phone;
    private Long join_date;
    private Double salary;
    private Double allowance;
}
