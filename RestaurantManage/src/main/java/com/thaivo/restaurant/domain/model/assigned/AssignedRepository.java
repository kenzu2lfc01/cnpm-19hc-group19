package com.thaivo.restaurant.domain.model.assigned;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AssignedRepository extends JpaRepository<Assigned, String> {

    @Modifying
    @Query(value = "UPDATE tbl_assigned SET day_of_week = ?2, session = ?3 WHERE id = ?1", nativeQuery = true)
    void update(String id, Assigned.DayOfWeek dayOfWeek, Assigned.Session session);


    Boolean existsByStaffIdAndDayOfWeekAndSession(String staffId, Assigned.DayOfWeek dayOfWeek, Assigned.Session session);
     List<Assigned> findByDayOfWeek(Assigned.DayOfWeek dayOfWeek);
     List<Assigned> findByStaffId(String staff);
}
