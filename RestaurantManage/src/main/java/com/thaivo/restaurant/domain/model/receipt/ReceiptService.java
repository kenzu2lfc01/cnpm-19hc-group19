package com.thaivo.restaurant.domain.model.receipt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public Receipt getById(String id){
        Optional<Receipt> byId = repository.findById(id);
        if(byId.isPresent()) return byId.get();
        throw new RuntimeException("Receipt not found");
    }

    public Page<Receipt> getByTime(Long from, Long to, Pageable pageable){
        return repository.findByCreatedAtBetweenOrderByCreatedAtDesc(from, to, pageable);
    }

    public double getTotalCostByTime(Long from, Long to){
        Double cost = repository.getTotalCostByTime(from, to);
        return cost == null ? 0 : cost;
    }
}
