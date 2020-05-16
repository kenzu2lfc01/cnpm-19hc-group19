package com.thaivo.restaurant.domain.model.staff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService {
    private StaffRepository repository;

    @Autowired
    public StaffService(StaffRepository repository) {
        this.repository = repository;
    }

    public Staff add(Staff staff){
        return repository.save(staff);
    }

    public void update(Staff staff){
        repository.update(staff.getId(), staff.getName(), staff.getPhone(), staff.getSalary(), staff.getAllowance(), staff.getPosition());
    }

    public void delete(String id){
        repository.delete(id);
    }

    public List<Staff> getAll(){
        return repository.findByIsDeletedFalse();
    }

    public Staff getById(String id){
        Optional<Staff> byId = repository.findById(id);
        if(byId.isPresent()) return byId.get();
        throw new RuntimeException("Staff not found");
    }
}
