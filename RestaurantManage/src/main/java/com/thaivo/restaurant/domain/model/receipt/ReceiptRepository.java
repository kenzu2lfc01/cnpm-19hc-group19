package com.thaivo.restaurant.domain.model.receipt;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<Receipt, String> {
}
