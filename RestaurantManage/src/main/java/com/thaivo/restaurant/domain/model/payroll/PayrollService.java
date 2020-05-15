package com.thaivo.restaurant.domain.model.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PayrollService {
    private PayrollRepository repository;

    @Autowired
    public PayrollService(PayrollRepository repository) {
        this.repository = repository;
    }


    public Payroll add(Payroll payroll){
        return repository.save(payroll);
    }
}
