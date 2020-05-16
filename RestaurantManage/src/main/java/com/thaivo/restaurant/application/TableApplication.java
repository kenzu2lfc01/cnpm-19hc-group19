package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.TableCommand;
import com.thaivo.restaurant.domain.model.table.RTable;
import com.thaivo.restaurant.domain.model.table.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Component
@Transactional
public class TableApplication {
    private TableService tableService;

    @Autowired
    public TableApplication(TableService tableService) {
        this.tableService = tableService;
    }

    public RTable.View add(TableCommand.Create command){
        RTable table = tableService.add(RTable.builder()
                .name(command.getName())
                .status(RTable.Status.READY)
                .capacity(command.getCapacity())
                .isDeleted(false)
                .build());
        return RTable.View.from(table);
    }

    public RTable.View update(TableCommand.Update command){
        tableService.update(RTable.builder()
                .id(command.getId())
                .name(command.getName())
                .capacity(command.getCapacity())
                .build());

        RTable table = tableService.getById(command.getId());
        table.setLastOrder(null);
        return RTable.View.from(table);
    }

    public void deleted(String id){
        tableService.delete(id);
    }

    public RTable.View getById(String id){
        RTable table = tableService.getById(id);
        return RTable.View.from(table);
    }
    public List<RTable.View> getAll(){
        return tableService.getAll().stream()
                .peek(i -> i.setLastOrder(null))
                .map(RTable.View::from)
                .collect(Collectors.toList());
    }
    public List<RTable.View> getByStatus(RTable.Status status){
        return tableService.getByStatus(status).stream()
                .peek(i -> i.setLastOrder(null))
                .map(RTable.View::from)
                .collect(Collectors.toList());
    }
}
