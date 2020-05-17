package com.thaivo.restaurant.domain.model.table;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TableRepository extends JpaRepository<RTable, String> {


    @Modifying
    @Query(value = "UPDATE tbl_table SET is_deleted = true WHERE id = ?1", nativeQuery = true)
    void delete(String id);


    @Modifying
    @Query(value = "UPDATE tbl_table SET name = ?2, capacity = ?3 WHERE id = ?1", nativeQuery = true)
    void update(String id, String name, Integer capacity);


    @Modifying
    @Query(value = "UPDATE tbl_table SET status = ?2 WHERE id = ?1", nativeQuery = true)
    void updateStatus(String id, String status);


    @Modifying
    @Query(value = "UPDATE tbl_table SET last_order_id = ?2 WHERE id = ?1", nativeQuery = true)
    void updateLastOrder(String id, String last_order_id);

    List<RTable> findByStatusAndIsDeletedFalse(RTable.Status status);
    List<RTable> findByIsDeletedFalse();
}
