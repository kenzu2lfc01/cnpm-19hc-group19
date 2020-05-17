package com.thaivo.restaurant.domain.model.order;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, String> {

    Page<Order> findByCreatedAtBetweenOrderByCreatedAtDesc(Long from, Long to, Pageable pageable);

    Page<Order> findByTableIdAndCreatedAtBetweenOrderByCreatedAtDesc(String tableId, Long from, Long to, Pageable pageable);
}
