package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.AccountCommand;
import com.thaivo.restaurant.domain.model.account.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class AccountApplication {
    private AccountService accountService;

    @Autowired
    public AccountApplication(AccountService accountService) {
        this.accountService = accountService;
    }

    public void update(AccountCommand.Update command){
        accountService.update(command);
    }
}
