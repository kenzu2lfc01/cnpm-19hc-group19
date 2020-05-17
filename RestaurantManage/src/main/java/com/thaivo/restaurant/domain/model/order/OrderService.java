package com.thaivo.restaurant.domain.model.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {
    private OrderRepository repository;

    @Autowired
    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    public Order add(Order order){
        return repository.save(order);
    }

    public Order getById(String id){
        Optional<Order> byId = repository.findById(id);
        if(byId.isPresent()) return byId.get();
        throw new RuntimeException("Order not found");
    }

    public Page<Order> getByTime(Long from, Long to, Pageable pageable){
        return repository.findByCreatedAtBetweenOrderByCreatedAtDesc(from, to, pageable);
    }

    public Page<Order> getByTimeInTable(String tableId, Long from, Long to, Pageable pageable){
        return repository.findByTableIdAndCreatedAtBetweenOrderByCreatedAtDesc(tableId, from, to, pageable);
    }
}
