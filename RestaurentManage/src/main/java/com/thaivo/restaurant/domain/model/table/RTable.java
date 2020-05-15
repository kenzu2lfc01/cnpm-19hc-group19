package com.thaivo.restaurant.domain.model.table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Table {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    @Enumerated(EnumType.STRING)
    private Status status;
    private Integer capacity;
    private Boolean is_deleted;

    public enum Status { READY, BUSY }
}
