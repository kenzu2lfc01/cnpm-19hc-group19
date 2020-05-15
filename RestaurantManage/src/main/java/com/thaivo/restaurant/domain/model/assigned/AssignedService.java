package com.thaivo.restaurant.domain.model.assigned;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignedService {
    private AssignedRepository repository;

    @Autowired
    public AssignedService(AssignedRepository repository) {
        this.repository = repository;
    }

    public Assigned add(Assigned assigned){
        Assigned duplicate = repository.findDuplicate(assigned.getStaff().getId(), assigned.getDow(), assigned.getSession());
        if(duplicate != null) throw new RuntimeException("Duplicate");
        return repository.save(assigned);
    }

    public void update(Assigned assigned){
        Assigned duplicate = repository.findDuplicate(assigned.getStaff().getId(), assigned.getDow(), assigned.getSession());
        if(duplicate != null) throw new RuntimeException("Duplicate");
        repository.update(assigned.getId(), assigned.getDow(), assigned.getSession());
    }

    public void delete(String id){
        repository.deleteById(id);
    }

    public List<Assigned> getAll(){
        return repository.findAll();
    }
    public List<Assigned> getByDayOfWeek(Assigned.DayOfWeek dayOfWeek){
        return repository.findByDow(dayOfWeek);
    }
    public List<Assigned> getByStaffId(String staffId){
        return repository.findByStaffId(staffId);
    }
}
