package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.ImportBillCommand;
import com.thaivo.restaurant.domain.model.food.FoodService;
import com.thaivo.restaurant.domain.model.import_bill.ImportBill;
import com.thaivo.restaurant.domain.model.import_bill.ImportBillService;
import com.thaivo.restaurant.domain.model.staff.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class ImportBillApplication {
    private ImportBillService importBillService;
    private StaffService staffService;
    private FoodService foodService;


    @Autowired
    public ImportBillApplication(ImportBillService importBillService, StaffService staffService, FoodService foodService) {
        this.importBillService = importBillService;
        this.staffService = staffService;
        this.foodService = foodService;
    }

    public ImportBill add(ImportBillCommand.Create command){
        return importBillService.add(ImportBill.builder()
                .staff(staffService.getById(command.getStaffId()))
                .food(foodService.getById(command.getFoodId()))
                .totalCost(command.getTotalCost())
                .description(command.getDescription())
                .createdAt(System.currentTimeMillis())
                .build());
    }

    public Page<ImportBill> getByTime(ImportBillCommand.GetByTime command){
        return importBillService.getByTime(command.getFrom(), command.getTo(), command.getPage(), command.getSize());
    }

    public Double getTotalCostByTime(ImportBillCommand.GetByTime command){
        return importBillService.getTotalCostByTime(command.getFrom(), command.getTo());
    }
}
