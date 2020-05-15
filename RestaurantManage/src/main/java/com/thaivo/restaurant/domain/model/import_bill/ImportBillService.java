package com.thaivo.restaurant.domain.model.import_bill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Page<ImportBill> getByTime(Long from, Long to, Integer page, Integer size){
        Integer total = repository.countByTime(from, to);
        List<ImportBill> list = repository.findByTime(from, to, (page-1) * size, size);

        return new PageImpl<>(list, PageRequest.of(page, size), total);
    }
}
