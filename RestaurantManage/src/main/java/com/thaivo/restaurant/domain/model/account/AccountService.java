package com.thaivo.restaurant.domain.model.account;

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

    public void update(Account account) {
        Account exists = repository.findByUsername(account.getUsername());
        if(exists != null && !account.getId().equals(exists.getId()))
            throw new RuntimeException("Username duplicate");
        String password = this.encrypt(account.getPassword(), account.getUsername());
        repository.update(account.getId(), account.getUsername(), password);
    }

    public void delete(String id){
        repository.deleteById(id);
    }

    public Account login(String username, String password) {
        password = this.encrypt(password, username);
        Account account = repository.findByUsernameAndPassword(username, password);
        if (account != null) return account;
        throw new RuntimeException("Username or password wrong");
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
