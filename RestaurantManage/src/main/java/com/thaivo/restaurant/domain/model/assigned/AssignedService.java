package com.thaivo.restaurant.domain.model.assigned;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssignedService {
    private AssignedRepository repository;

    @Autowired
    public AssignedService(AssignedRepository repository) {
        this.repository = repository;
    }

    public Assigned add(Assigned assigned){
        Assigned duplicate = this.repository.findDuplicate(assigned.getStaff().getId(), assigned.getDay_of_week(), assigned.getSession());
        if(duplicate != null) throw new RuntimeException("Duplicate");
        return repository.save(assigned);
    }

    public void update(Assigned assigned){
        Assigned duplicate = this.repository.findDuplicate(assigned.getStaff().getId(), assigned.getDay_of_week(), assigned.getSession());
        if(duplicate != null) throw new RuntimeException("Duplicate");
        repository.update(assigned.getId(), assigned.getDay_of_week(), assigned.getSession());
    }

    public void delete(String id){
        repository.deleteById(id);
    }
}
