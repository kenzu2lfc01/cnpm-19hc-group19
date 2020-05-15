package com.thaivo.restaurant.domain.model.payroll;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PayrollRepository extends JpaRepository<Payroll, String> {

    List<Payroll> findByStaffId(String staffId);
    List<Payroll> findByMonthAndYear(Integer month, Integer year);
}
