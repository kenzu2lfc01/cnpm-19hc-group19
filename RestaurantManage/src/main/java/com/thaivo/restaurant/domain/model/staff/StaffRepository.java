package com.thaivo.restaurant.domain.model.staff;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface StaffRepository extends JpaRepository<Staff, String> {

    @Modifying
    @Query(value = "UPDATE tbl_staff SET is_deleted = true WHERE id = ?1", nativeQuery = true)
    void delete(String id);


    @Modifying
    @Query(value = "UPDATE tbl_staff SET name = ?2, phone = ?3, salary = ?4, allowance = ?5, position = ?6 WHERE id = ?1", nativeQuery = true)
    void update(String id, String name, String phone, Double salary, Double allowance, Staff.Position position);
}
