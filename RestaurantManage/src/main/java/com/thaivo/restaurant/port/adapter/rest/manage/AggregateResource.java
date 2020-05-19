package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.AggregateApplication;
import com.thaivo.restaurant.application.AggregateApplication.Aggregate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/manage/aggregate")
public class AggregateResource {

    private AggregateApplication aggregateApplication;

    public AggregateResource(AggregateApplication aggregateApplication) {
        this.aggregateApplication = aggregateApplication;
    }


    @RequestMapping("")
    public ResponseEntity<Object> getAllTime(){
        try {
            Aggregate aggregate = aggregateApplication.getAllTime();

            return new ResponseEntity<>(aggregate, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping("/last7day")
    public ResponseEntity<Object> getLast7Day(){
        try {
            List<Aggregate> last7day = aggregateApplication.getLast7day();

            return new ResponseEntity<>(last7day, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
