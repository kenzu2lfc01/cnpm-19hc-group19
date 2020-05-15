package com.thaivo.restaurant.domain.model.receipt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReceiptRepository extends JpaRepository<Receipt, String> {

    @Query(value = "SELECT * FROM tbl_receipt WHERE created_at >= ?1 && created_at < ?2 LIMIT ?3, ?4", nativeQuery = true)
    List<Receipt> findByTime(Long from, Long to, Integer skip, Integer take);

    @Query(value = "SELECT COUNT(*) FROM tbl_receipt WHERE created_at >= ?1 && created_at < ?2", nativeQuery = true)
    Integer countByTime(Long from, Long to);

}
