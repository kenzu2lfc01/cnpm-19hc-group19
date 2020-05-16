package com.thaivo.restaurant.domain.model.table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public void updateStatus(String id, RTable.Status status){
        repository.updateStatus(id, status);
    }

    public void updateLastOrder(String id, String orderId){
        repository.updateLastOrder(id, orderId);
    }

    public void delete(String id){
        repository.delete(id);
    }

    public List<RTable> getAll(){
        return repository.findByIsDeletedFalse();
    }

    public List<RTable> getByStatus(RTable.Status status){
        return repository.findByStatusAndIsDeletedFalse(status);
    }

    public RTable getById(String id){
        Optional<RTable> byId = repository.findById(id);
        if(byId.isPresent()) return byId.get();
        throw new RuntimeException("Table not found");
    }
}
