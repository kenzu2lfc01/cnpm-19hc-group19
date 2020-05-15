package com.thaivo.restaurant.domain.model.receipt;

import com.thaivo.restaurant.domain.model.import_bill.ImportBill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReceiptService {
    private ReceiptRepository repository;

    @Autowired
    public ReceiptService(ReceiptRepository repository) {
        this.repository = repository;
    }

    public Receipt add(Receipt receipt){
        return repository.save(receipt);
    }

    public Page<Receipt> getByTime(Long from, Long to, Integer page, Integer size){
        Integer total = repository.countByTime(from, to);
        List<Receipt> list = repository.findByTime(from, to, (page-1) * size, size);

        return new PageImpl<>(list, PageRequest.of(page, size), total);
    }
}
