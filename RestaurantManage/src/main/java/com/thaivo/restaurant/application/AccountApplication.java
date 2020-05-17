package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.AccountCommand;
import com.thaivo.restaurant.domain.model.account.Account;
import com.thaivo.restaurant.domain.model.account.AccountService;
import com.thaivo.restaurant.port.adapter.auth.JwtAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class AccountApplication {
    private AccountService accountService;
    private JwtAuthentication authentication;

    @Autowired
    public AccountApplication(AccountService accountService, JwtAuthentication authentication) {
        this.accountService = accountService;
        this.authentication = authentication;
    }

    public void update(AccountCommand.Update command){
        accountService.update(Account.builder()
                .id(command.getId())
                .username(command.getUsername())
                .password(command.getPassword())
                .build());
    }

    public String getAccessToken(AccountCommand.Login command){
        Account account = accountService.login(command.getUsername(), command.getPassword());

        return authentication.generateAccessToken(JwtAuthentication.Payload.builder()
                .id(account.getStaff().getId())
                .name(account.getStaff().getName())
                .position(account.getStaff().getPosition())
                .build());
    }
}
