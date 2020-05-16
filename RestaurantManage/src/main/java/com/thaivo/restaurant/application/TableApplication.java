package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.TableCommand;
import com.thaivo.restaurant.domain.model.table.RTable;
import com.thaivo.restaurant.domain.model.table.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class TableApplication {
    private TableService tableService;

    @Autowired
    public TableApplication(TableService tableService) {
        this.tableService = tableService;
    }

    public RTable add(TableCommand.Create command){
        return tableService.add(RTable.builder()
                .name(command.getName())
                .status(RTable.Status.READY)
                .capacity(command.getCapacity())
                .isDeleted(false)
                .build());
    }

    public void update(TableCommand.Update command){
        tableService.update(RTable.builder()
                .id(command.getId())
                .name(command.getName())
                .capacity(command.getCapacity())
                .build());
    }

    public void deleted(String id){
        tableService.delete(id);
    }

    public List<RTable> getAll(){
        return tableService.getAll();
    }
    public List<RTable> getByStatus(RTable.Status status){
        return tableService.getByStatus(status);
    }
}
