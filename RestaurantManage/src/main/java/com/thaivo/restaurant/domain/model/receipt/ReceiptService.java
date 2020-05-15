package com.thaivo.restaurant.domain.model.receipt;

import org.springframework.beans.factory.annotation.Autowired;
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
}
