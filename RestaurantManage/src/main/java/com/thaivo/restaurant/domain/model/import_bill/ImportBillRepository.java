package com.thaivo.restaurant.domain.model.import_bill;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ImportBillRepository extends JpaRepository<ImportBill, String> {

    @Query(value = "SELECT * FROM tbl_import_bill WHERE created_at >= ?1 && created_at < ?2 LIMIT ?3, ?4", nativeQuery = true)
    List<ImportBill> findByTime(Long from, Long to, Integer skip, Integer take);

    @Query(value = "SELECT COUNT(*) FROM tbl_import_bill WHERE created_at >= ?1 && created_at < ?2", nativeQuery = true)
    Integer countByTime(Long from, Long to);
}
