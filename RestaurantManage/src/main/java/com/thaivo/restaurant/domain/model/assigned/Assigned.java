package com.thaivo.restaurant.domain.model.assigned;

import com.thaivo.restaurant.domain.model.ReferenceData;
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
    @Column(name = "day_of_week", nullable = false)
    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfWeek;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Session session;


    //////////////////////////////
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(columnDefinition = "staff_id", nullable = false, updatable = false)
    private Staff staff;
    //////////////////////////////

    public enum Session { MORNING, AFTERNOON, EVENING }
    public enum DayOfWeek { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class View {
        private String id;
        private DayOfWeek dayOfWeek;
        private Session session;
        private ReferenceData staff;

        public static View from(Assigned account){
            return View.builder()
                    .id(account.getId())
                    .dayOfWeek(account.getDayOfWeek())
                    .session(account.getSession())
                    .staff(ReferenceData.builder()
                            .id(account.getStaff().getId())
                            .name(account.getStaff().getName())
                            .build())
                    .build();
        }
    }
}
