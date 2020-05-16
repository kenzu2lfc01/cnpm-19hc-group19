package com.thaivo.restaurant.domain.model.payroll;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PayrollService {
    private PayrollRepository repository;

    @Autowired
    public PayrollService(PayrollRepository repository) {
        this.repository = repository;
    }


    public Payroll add(Payroll payroll){
        boolean exists = repository.existsByStaffIdAndMonthAndYear(payroll.getStaff().getId(), payroll.getMonth(), payroll.getYear());
        if(exists) throw new RuntimeException("Duplicate");

        DateTime dateTime = new DateTime().withDate(payroll.getYear(), payroll.getMonth(), 1);

        payroll.setTimestamp(dateTime.getMillis());
        return repository.save(payroll);
    }

    public List<Payroll> getByStaffId(String staffId){
        return repository.findByStaffId(staffId);
    }

    public List<Payroll> getByMonthAndYear(Integer month, Integer year){
        return repository.findByMonthAndYear(month, year);
    }

    public Page<Payroll> getByTime(Long from, Long to, Pageable pageable){
        return repository.findByTimestampBetweenOrderByTimestampDesc(from, to, pageable);
    }

    public Double getTotalSalaryByTime(Long from, Long to){
        return repository.getTotalSalaryByTime(from, to);
    }
}
