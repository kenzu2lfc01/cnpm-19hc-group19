package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.ReceiptCommand;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetailService;
import com.thaivo.restaurant.domain.model.receipt.Receipt;
import com.thaivo.restaurant.domain.model.receipt.ReceiptService;
import com.thaivo.restaurant.domain.model.staff.StaffService;
import com.thaivo.restaurant.domain.model.table.RTable;
import com.thaivo.restaurant.domain.model.table.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class ReceiptApplication {
    private ReceiptService receiptService;
    private StaffService staffService;
    private TableService tableService;
    private OrderDetailService orderDetailService;

    @Autowired
    public ReceiptApplication(ReceiptService receiptService, StaffService staffService, TableService tableService, OrderDetailService orderDetailService) {
        this.receiptService = receiptService;
        this.staffService = staffService;
        this.tableService = tableService;
        this.orderDetailService = orderDetailService;
    }

    public Receipt add(ReceiptCommand.Create command){
        RTable table = tableService.getById(command.getTableId());

        Double price = orderDetailService.getTotalPrice(table.getLastOrder().getId());

        Receipt receipt = receiptService.add(Receipt.builder()
                .order(table.getLastOrder())
                .staff(staffService.getById(command.getStaffId()))
                .createdAt(System.currentTimeMillis())
                .surcharge(command.getSurcharge())
                .totalCost(price + command.getSurcharge())
                .build());

        tableService.updateStatus(table.getId(), RTable.Status.READY);

        return receipt;
    }

    public Page<Receipt> getByTime(ReceiptCommand.GetByTime command) {
        return receiptService.getByTime(command.getFrom(), command.getTo(), command.getPage(), command.getSize());
    }

    public Double getTotalCostByTime(ReceiptCommand.GetByTime command) {
        return receiptService.getTotalCostByTime(command.getFrom(), command.getTo());
    }
}
