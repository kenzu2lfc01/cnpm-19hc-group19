package com.thaivo.restaurant.domain.model.order_detail;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, String> {

    @Modifying
    @Query(value = "UPDATE tbl_order_detail SET amount = ?2 WHERE id = ?1", nativeQuery = true)
    void updateAmount(String id, Integer amount);

    @Modifying
    @Query(value = "UPDATE tbl_order_detail SET status = ?2 WHERE id = ?1", nativeQuery = true)
    void updateStatus(String id, OrderDetail.Status status);
}
