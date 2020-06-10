package com.thaivo.restaurant.port.adapter.auth;

import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import com.thaivo.restaurant.domain.model.staff.Staff;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtAuthentication {
    public static final String SUPER_ADMIN = "SUPER_ADMIN_THAI_VO";
    public static final String SECRET_KEY = "129345678998765432112345678998765";
    public static final long EXPIRE_TIME = 30 * 86400000L;

    public String generateAccessToken(Payload payload) {
        try {
            JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                    .claim("id", payload.getId())
                    .claim("name", payload.getName())
                    .claim("position", payload.getPosition().toString())
                    .expirationTime(new Date(System.currentTimeMillis() + EXPIRE_TIME)).build();

            SignedJWT signedJWT = new SignedJWT(new JWSHeader(JWSAlgorithm.HS256), claimsSet);
            signedJWT.sign(new MACSigner(SECRET_KEY.getBytes()));

            return signedJWT.serialize();
        } catch (Throwable e) {
            e.printStackTrace();
            throw new RuntimeException("Can't generate token!");
        }
    }

    public Payload authentication(String token) {
        JWTClaimsSet claims;
        try {
            SignedJWT signedJWT = SignedJWT.parse(token);
            JWSVerifier verifier = new MACVerifier(SECRET_KEY.getBytes());

            if(!signedJWT.verify(verifier)) throw new RuntimeException("Verify fail");
            claims = signedJWT.getJWTClaimsSet();
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            throw new RuntimeException("Access token parse fail!");
        }

        if (claims.getExpirationTime().before(new Date()))
            throw new RuntimeException("Access token expired!");

        try {
            return Payload.builder()
                    .id(claims.getStringClaim("id"))
                    .name(claims.getStringClaim("name"))
                    .position(Staff.Position.valueOf(claims.getStringClaim("position")))
                    .build();
        }
        catch (Throwable e) {
            e.printStackTrace();
            throw new RuntimeException("Access token parse fail!");
        }
    }


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Payload {
        private String id;
        private String name;
        private Staff.Position position;
    }
}
