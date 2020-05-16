package com.thaivo.restaurant.domain.model.account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;


public interface AccountRepository extends JpaRepository<Account, String> {

    @Modifying
    @Query(value = "UPDATE tbl_account SET username = ?2, password = ?3 WHERE id = ?1", nativeQuery = true)
    void update(String id, String username, String password);

    Account findByUsername(String username);
}
