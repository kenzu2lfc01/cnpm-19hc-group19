package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.TableApplication;
import com.thaivo.restaurant.application.command.TableCommand;
import com.thaivo.restaurant.domain.model.table.RTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manage/table")
public class TableResource {

    private TableApplication tableApplication;

    @Autowired
    public TableResource(TableApplication tableApplication) {
        this.tableApplication = tableApplication;
    }


    // Require Manage
    @PostMapping("/add")
    ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody TableCommand.Create command){
        try {
            RTable.View table = tableApplication.add(command);
            return new ResponseEntity<>(table, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Require Manage
    @PostMapping("/update")
    ResponseEntity<Object> update(@RequestHeader(name="Authorization") String token, @RequestBody TableCommand.Update command){
        try {
            RTable.View table = tableApplication.update(command);
            return new ResponseEntity<>(table, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Require Manage
    @GetMapping("/delete/{id}")
    ResponseEntity<Object> delete(@RequestHeader(name="Authorization") String token, @PathVariable String id){
        try {
            tableApplication.deleted(id);
            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Require Manage
    @GetMapping("/get")
    ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token, @RequestParam(required = false) RTable.Status status){
        try {
            List<RTable.View> list;
            if(status == null) list = tableApplication.getAll();
            else list = tableApplication.getByStatus(status);

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Require Manage
    @GetMapping("/get/{id}")
    ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token, @PathVariable String id){
        try {
            RTable.View table = tableApplication.getById(id);

            return new ResponseEntity<>(table, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
