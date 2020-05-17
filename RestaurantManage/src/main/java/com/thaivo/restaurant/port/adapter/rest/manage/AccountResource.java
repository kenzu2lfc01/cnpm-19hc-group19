package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.AccountApplication;
import com.thaivo.restaurant.application.command.AccountCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manage/account")
public class AccountResource {

    private AccountApplication accountApplication;

    // Require Manage
    @Autowired
    public AccountResource(AccountApplication accountApplication) {
        this.accountApplication = accountApplication;
    }


    // Require Manage
    @PostMapping("/update")
    public ResponseEntity<Object> update(@RequestHeader(name="Authorization") String token, @RequestBody AccountCommand.Update command){
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
