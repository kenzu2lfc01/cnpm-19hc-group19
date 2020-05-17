package com.thaivo.restaurant.port.adapter.auth;

import com.thaivo.restaurant.domain.model.staff.Staff;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Authentication {
    Staff.Position[] positions() default { };
}
