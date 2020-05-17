package com.thaivo.restaurant.domain.model.order_detail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderDetailService {
    private OrderDetailRepository repository;

    @Autowired
    public OrderDetailService(OrderDetailRepository repository) {
        this.repository = repository;
    }

    public OrderDetail add(OrderDetail orderDetail){
        return repository.save(orderDetail);
    }

    public void updateAmount(String id, Integer amount){
        repository.updateAmount(id, amount);
    }

    public void updateStatus(String id, OrderDetail.Status status){
        repository.updateStatus(id, status.toString(), System.currentTimeMillis());
    }

    public void delete(String id){
        repository.deleteById(id);
    }

    public Double getTotalPrice(String orderId){
        return repository.getTotalPrice(orderId);
    }
}
