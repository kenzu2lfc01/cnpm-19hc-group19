package com.thaivo.restaurant.domain.model.account;

import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity(name = "tbl_account")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false)
    private String password;


    ////////////////////////////
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(columnDefinition = "staff_id", nullable = false, unique = true, updatable = false)
    private Staff staff;
    ////////////////////////////

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class View {
        private String id;
        private String username;
        private String password;

        public static View from(Account account){
            return View.builder()
                    .id(account.getId())
                    .username(account.getUsername())
                    .password(account.getPassword())
                    .build();
        }
    }
}
