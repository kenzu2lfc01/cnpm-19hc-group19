package com.thaivo.restaurant.domain.model.food;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, String> {

    @Modifying
    @Query(value = "UPDATE tbl_food SET name = ?2, price = ?3, image = ?4, type = ?5 WHERE id = ?1", nativeQuery = true)
    void update(String id, String name, Double price, String image, String type);


    @Modifying
    @Query(value = "UPDATE tbl_food SET is_deleted = true WHERE id = ?1", nativeQuery = true)
    void delete(String id);

    List<Food> findByIsDeletedFalse();
}
