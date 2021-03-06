package com.thaivo.restaurant.domain.model.receipt;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReceiptRepository extends JpaRepository<Receipt, String> {

    Page<Receipt> findByCreatedAtBetweenOrderByCreatedAtDesc(Long from, Long to, Pageable pageable);

    @Query(value = "SELECT SUM(total_cost) FROM tbl_receipt WHERE created_at >= ?1 AND created_at <= ?2", nativeQuery = true)
    Double getTotalCostByTime(Long from, Long to);
}
