package com.thaivo.restaurant.domain.model.import_bill;

import org.springframework.beans.factory.annotation.Autowired;
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
}
