package com.thaivo.restaurant.domain.model.account;

import com.thaivo.restaurant.application.command.AccountCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class AccountService {
    private AccountRepository repository;

    @Autowired
    public AccountService(AccountRepository repository) {
        this.repository = repository;
    }

    public Account add(Account account) {
        String password = this.encrypt(account.getPassword(), account.getUsername());
        account.setPassword(password);
        return repository.save(account);
    }

    public void update(AccountCommand.Update command) {
        Account account = repository.findByUsername(command.getUsername());
        if(account != null && !account.getId().equals(command.getId()))
            throw new RuntimeException("Username duplicate");
        String password = this.encrypt(command.getPassword(), command.getUsername());
        repository.update(command.getId(), command.getUsername(), password);
    }

    public void delete(String id){
        repository.deleteById(id);
    }


    private String encrypt(String password, String salt){
        String generatedPassword = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            md.update(salt.getBytes(StandardCharsets.UTF_8));
            byte[] bytes = md.digest(password.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte aByte : bytes) {
                sb.append(Integer.toString((aByte & 0xff) + 0x100, 16).substring(1));
            }
            generatedPassword = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return generatedPassword;
    }
}
