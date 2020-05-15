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

    public void updateAmount(OrderDetail orderDetail){
        Optional<OrderDetail> byId = repository.findById(orderDetail.getId());
        if (!byId.isPresent()) return;
        if(byId.get().getStatus() == OrderDetail.Status.FINISH)
            throw new RuntimeException("Order completed!");
        repository.updateAmount(orderDetail.getId(), orderDetail.getAmount());
    }

    public void updateStatus(OrderDetail orderDetail){
        repository.updateStatus(orderDetail.getId(), orderDetail.getStatus());
    }

    public void delete(String id){
        repository.deleteById(id);
    }
}
