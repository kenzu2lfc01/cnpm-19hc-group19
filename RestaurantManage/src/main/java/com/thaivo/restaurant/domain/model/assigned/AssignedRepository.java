package com.thaivo.restaurant.domain.model.assigned;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface AssignedRepository extends JpaRepository<Assigned, String> {

    @Query(value = "SELECT * from tbl_assigned WHERE staff_id = ?1 AND day_of_week = ?2 AND session = ?3", nativeQuery = true)
    Assigned findDuplicate(String staff_id, Assigned.DayOfWeek dayOfWeek, Assigned.Session session);

    @Modifying
    @Query(value = "UPDATE tbl_assigned SET day_of_week = ?2, session = ?3 WHERE id = ?1", nativeQuery = true)
    void update(String id, Assigned.DayOfWeek dayOfWeek, Assigned.Session session);

}
