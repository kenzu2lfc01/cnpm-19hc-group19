package com.thaivo.restaurant.domain.model.receipt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

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
        return repository.findByCreatedAtBetweenOrderByCreatedAtDesc(from, to, PageRequest.of(page-1, size));
    }

    public Double getTotalCostByTime(Long from, Long to){
        return repository.getTotalCostByTime(from, to);
    }
}
