package com.thaivo.restaurant.port.adapter.auth;

import com.thaivo.restaurant.domain.model.staff.Staff;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Aspect
@Service
public class AuthenticationService {
    private JwtAuthentication jwtAuthentication;

    @Autowired
    public AuthenticationService(JwtAuthentication jwtAuthentication) {
        this.jwtAuthentication = jwtAuthentication;
    }


    @Around("@annotation(Authentication)")
    public Object authentication(ProceedingJoinPoint point) {
        try {
            Object[] args = point.getArgs();
            String accessToken = args[0].toString().substring(7);
            if(accessToken.equals(JwtAuthentication.SECRET_KEY)){
                args[0] = null;
                return point.proceed(args);
            }

            JwtAuthentication.Payload payload = jwtAuthentication.authentication(accessToken);
            args[0] = payload.getId();

            MethodSignature signature = (MethodSignature) point.getSignature();
            Authentication authentication = signature.getMethod().getDeclaredAnnotation(Authentication.class);


            for (Staff.Position position : authentication.positions()) {
                if(position.equals(payload.getPosition()))
                    return point.proceed(args);
            }

            return new ResponseEntity<Object>("No permission", HttpStatus.FORBIDDEN);
        }
        catch (Throwable throwable) {
            return new ResponseEntity<Object>(throwable.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }

}
