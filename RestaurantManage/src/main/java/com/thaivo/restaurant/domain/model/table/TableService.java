package com.thaivo.restaurant.domain.model.table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableService {
    private TableRepository repository;

    @Autowired
    public TableService(TableRepository repository) {
        this.repository = repository;
    }

    public RTable add(RTable table){
        return repository.save(table);
    }

    public void update(RTable table){
        repository.update(table.getId(), table.getName(), table.getCapacity());
    }

    public void updateStatus(RTable table){
        repository.updateStatus(table.getId(), table.getStatus());
    }

    public void updateLastOrder(RTable table){
        repository.updateLastOrder(table.getId(), table.getLastOrder().getId());
    }

    public void delete(String id){
        repository.delete(id);
    }

    public List<RTable> getAll(){
        return repository.findAll();
    }

    public List<RTable> getByStatus(RTable.Status status){
        return repository.findByStatus(status);
    }
}
