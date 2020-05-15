package com.thaivo.restaurant;

import com.thaivo.restaurant.domain.model.account.Account;
import com.thaivo.restaurant.domain.model.account.AccountRepository;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.domain.model.staff.StaffRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@SpringBootApplication
public class RestaurantApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(RestaurantApplication.class, args);

        AccountRepository accountRepository = context.getBean(AccountRepository.class);
        StaffRepository staffRepository = context.getBean(StaffRepository.class);

        Staff staff = staffRepository.saveAndFlush(Staff.builder()
                                    .name("Thai Vo").phone("0989421615")
                                    .join_date(System.currentTimeMillis())
                                    .salary(1000d).allowance(100d)
                                    .is_deleted(false)
                                    .build());
        Account account = accountRepository.saveAndFlush(Account.builder()
                .username("thai-vo512")
                .password("my-password")
                .staff(staff)
                .build());

        System.out.println(staff.getId());
        System.out.println(account.getId());
    }

}
