package com.thaivo.restaurant.domain.model.import_bill;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ImportBillRepository extends JpaRepository<ImportBill, String> {

    List<ImportBill> findByStaffIdOrderByCreatedAtDesc(String staffId);
    Page<ImportBill> findByCreatedAtBetweenOrderByCreatedAtDesc(Long from, Long to, Pageable pageable);

    @Query(value = "SELECT SUM(total_cost) FROM tbl_import_bill WHERE created_at >= ?1 AND created_at <= ?2", nativeQuery = true)
    Double getTotalCostByTime(Long from, Long to);
}
