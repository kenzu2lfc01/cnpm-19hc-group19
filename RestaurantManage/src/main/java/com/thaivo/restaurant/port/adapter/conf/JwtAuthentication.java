package com.thaivo.restaurant.port.adapter.conf;

import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtAuthentication {
    public static final String SECRET_KEY = "129345678998765432112345678998765";
    public static final int EXPIRE_TIME = 86400000;

    public String generateAccessToken(Payload payload) {
        try {
            JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                    .claim("id", payload.getId())
                    .claim("name", payload.getName())
                    .claim("position", payload.getPosition())
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
        try {
            SignedJWT signedJWT = SignedJWT.parse(token);
            JWSVerifier verifier = new MACVerifier(SECRET_KEY.getBytes());

            if(!signedJWT.verify(verifier)) throw new RuntimeException("Verify fail");
            JWTClaimsSet claims = signedJWT.getJWTClaimsSet();

            if (claims.getExpirationTime().before(new Date()))
                throw new RuntimeException("Access token expired!");

            return Payload.builder()
                    .id(claims.getStringClaim("id"))
                    .name(claims.getStringClaim("name"))
                    .position(claims.getStringClaim("position"))
                    .build();
        } catch (Throwable e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }
    }


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Payload {
        private String id;
        private String name;
        private String position;
    }
}
