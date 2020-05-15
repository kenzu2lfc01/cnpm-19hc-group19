package com.thaivo.restaurant.domain.model.staff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        repository.update(staff.getId(), staff.getName(), staff.getPhone(), staff.getSalary(), staff.getAllowance());
    }

    public void delete(String id){
        repository.delete(id);
    }
}
