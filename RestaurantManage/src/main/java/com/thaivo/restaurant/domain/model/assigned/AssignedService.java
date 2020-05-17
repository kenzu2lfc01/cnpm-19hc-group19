package com.thaivo.restaurant.domain.model.assigned;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignedService {
    private AssignedRepository repository;

    @Autowired
    public AssignedService(AssignedRepository repository) {
        this.repository = repository;
    }

    public Assigned add(Assigned assigned){
        boolean exists = repository.existsByStaffIdAndDayOfWeekAndSession(assigned.getStaff().getId(), assigned.getDayOfWeek(), assigned.getSession());
        if(exists) throw new RuntimeException("Duplicate");
        return repository.save(assigned);
    }

    public void update(Assigned assigned){
        boolean exists = repository.existsByStaffIdAndDayOfWeekAndSession(assigned.getStaff().getId(), assigned.getDayOfWeek(), assigned.getSession());
        if(exists) throw new RuntimeException("Duplicate");
        repository.update(assigned.getId(), assigned.getDayOfWeek().toString(), assigned.getSession().toString());
    }

    public void delete(String id){
        repository.deleteById(id);
    }

    public Assigned getById(String id){
        Optional<Assigned> byId = repository.findById(id);
        if(byId.isPresent()) return byId.get();
        throw new RuntimeException("Assigned not found");
    }
    public List<Assigned> getAll(){
        return repository.findAll();
    }
    public List<Assigned> getByDayOfWeek(Assigned.DayOfWeek dayOfWeek){
        return repository.findByDayOfWeek(dayOfWeek);
    }
    public List<Assigned> getByStaffId(String staffId){
        return repository.findByStaffId(staffId);
    }
}
