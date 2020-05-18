package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.AccountApplication;
import com.thaivo.restaurant.application.command.AccountCommand;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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


    @Authentication(positions = { Staff.Position.MANAGER })
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

    // No require
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody AccountCommand.Login command){
        try {
            Staff.View staff = accountApplication.getStaffInfo(command);
            String accessToken = accountApplication.getAccessToken(command);

            HttpHeaders headers = new HttpHeaders();
            headers.add("access_token", accessToken);
            return new ResponseEntity<>(staff, headers, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
