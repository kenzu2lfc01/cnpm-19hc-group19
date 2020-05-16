package com.thaivo.restaurant.domain.model.payroll;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PayrollRepository extends JpaRepository<Payroll, String> {

    List<Payroll> findByStaffId(String staffId);
    List<Payroll> findByMonthAndYear(Integer month, Integer year);
    boolean existsByStaffIdAndMonthAndYear(String staffId, Integer month, Integer year);

    Page<Payroll> findByTimestampBetweenOrderByTimestampDesc(Long from, Long to, Pageable pageable);

    @Query(value = "SELECT SUM(total) FROM tbl_payroll WHERE timestamp >= ?1 AND timestamp <= ?2", nativeQuery = true)
    Double getTotalSalaryByTime(Long from, Long to);
}
