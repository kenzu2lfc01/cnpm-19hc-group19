package com.thaivo.restaurant.domain.model.account;

import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity(name = "tbl_account")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    @Id
    @GeneratedValue
    private String id;
    private String username;
    private String password;


    ////////////////////////////
    @OneToOne
    @JoinColumn(columnDefinition = "staff_id")
    private Staff staff;
    ////////////////////////////
}
