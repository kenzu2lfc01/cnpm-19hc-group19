package com.thaivo.restaurant.port.adapter.rest.manage;

import com.thaivo.restaurant.application.ImportBillApplication;
import com.thaivo.restaurant.application.command.ImportBillCommand;
import com.thaivo.restaurant.domain.model.import_bill.ImportBill;
import com.thaivo.restaurant.domain.model.staff.Staff;
import com.thaivo.restaurant.port.adapter.auth.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("manage/import_bill")
public class ImportBillResource {
    private ImportBillApplication importBillApplication;

    @Autowired
    public ImportBillResource(ImportBillApplication importBillApplication) {
        this.importBillApplication = importBillApplication;
    }

    @Authentication(positions = { Staff.Position.CHEF, Staff.Position.MANAGER })
    @PostMapping("/add")
    public ResponseEntity<Object> add(@RequestHeader(name="Authorization") String token, @RequestBody ImportBillCommand.Create command){
        try {
            command.setStaffId(token);

            ImportBill.View importBill = importBillApplication.add(command);

            return new ResponseEntity<>(importBill, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Authentication(positions = { Staff.Position.MANAGER, Staff.Position.CHEF })
    @GetMapping("/get")
    public ResponseEntity<Object> get(@RequestHeader(name="Authorization") String token, @ModelAttribute ImportBillCommand.GetByTime command){
        try {
            Page<ImportBill.View> page = importBillApplication.getByTime(command);

            return new ResponseEntity<>(page, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @Authentication(positions = { Staff.Position.CHEF, Staff.Position.MANAGER })
    @GetMapping("/get/{staffId}")
    public ResponseEntity<Object> getByStaff(@RequestHeader(name="Authorization") String token, @PathVariable String staffId){
        try {
            List<ImportBill.View> list = importBillApplication.getByStaff(staffId);

            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
