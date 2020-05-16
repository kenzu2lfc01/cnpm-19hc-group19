package com.thaivo.restaurant.domain.model.import_bill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ImportBillService {
    private ImportBillRepository repository;

    @Autowired
    public ImportBillService(ImportBillRepository repository) {
        this.repository = repository;
    }

    public ImportBill add(ImportBill bill){
        return repository.save(bill);
    }

    public Page<ImportBill> getByTime(Long from, Long to, Pageable pageable){
       return repository.findByCreatedAtBetweenOrderByCreatedAtDesc(from, to, pageable);
    }

    public Double getTotalCostByTime(Long from, Long to){
        return repository.getTotalCostByTime(from, to);
    }
}
