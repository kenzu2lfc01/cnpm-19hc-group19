package com.thaivo.restaurant.domain.model.assigned;

import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity(name = "tbl_assigned")
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"staff_id", "day_of_week", "session"}))
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Assigned {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DayOfWeek day_of_week;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Session session;


    //////////////////////////////
    @ManyToOne
    @JoinColumn(columnDefinition = "staff_id", nullable = false, updatable = false)
    private Staff staff;
    //////////////////////////////

    public enum Session { MORNING, AFTERNOON, EVENING }
    public enum DayOfWeek { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }
}
