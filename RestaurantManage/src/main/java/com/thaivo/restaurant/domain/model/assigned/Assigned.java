package com.thaivo.restaurant.domain.model.assigned;

import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity(name = "tbl_assigned")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Assigned {
    @Id
    @GeneratedValue
    private String id;
    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfWeek;
    @Enumerated(EnumType.STRING)
    private Session session;


    //////////////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "staff_id")
    private Staff staff;
    //////////////////////////////

    public enum Session { MORNING, AFTERNOON, EVENING }
    public enum DayOfWeek { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }
}
