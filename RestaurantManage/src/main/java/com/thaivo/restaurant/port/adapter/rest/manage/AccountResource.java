package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.AccountApplication;
import com.thaivo.restaurant.application.command.AccountCommand;
import com.thaivo.restaurant.domain.model.staff.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manage/account")
public class AccountResource {

    private AccountApplication accountApplication;

    @Autowired
    public AccountResource(AccountApplication accountApplication) {
        this.accountApplication = accountApplication;
    }


    @PostMapping("/update")
    public ResponseEntity<Object> update(@RequestBody AccountCommand.Update command){
        try {
            accountApplication.update(command);

            return new ResponseEntity<>("Updated", HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
