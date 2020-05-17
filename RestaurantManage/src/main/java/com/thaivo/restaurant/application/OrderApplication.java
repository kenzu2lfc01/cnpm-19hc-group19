package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.OrderCommand;
import com.thaivo.restaurant.domain.model.order.Order;
import com.thaivo.restaurant.domain.model.order.OrderService;
import com.thaivo.restaurant.domain.model.staff.StaffService;
import com.thaivo.restaurant.domain.model.table.RTable;
import com.thaivo.restaurant.domain.model.table.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class OrderApplication {
    private OrderService orderService;
    private TableService tableService;
    private StaffService staffService;

    @Autowired
    public OrderApplication(OrderService orderService, TableService tableService, StaffService staffService) {
        this.orderService = orderService;
        this.tableService = tableService;
        this.staffService = staffService;
    }


    public Order.View add(OrderCommand.Create command){
        RTable table = tableService.getById(command.getTableId());
        if(table.getStatus() == RTable.Status.BUSY)
            throw new RuntimeException("Table not available");

        tableService.updateStatus(table.getId(), RTable.Status.BUSY);

        Order order = orderService.add(Order.builder()
                .staff(staffService.getById(command.getStaffId()))
                .table(table)
                .createdAt(System.currentTimeMillis())
                .build());

        tableService.updateLastOrder(table.getId(), order.getId());

        return Order.View.from(order);
    }

    public Page<Order.View> getByTime(OrderCommand.Get command){
        return orderService.getByTime(command.getFrom(), command.getTo(), PageRequest.of(command.getPage()-1, command.getSize()))
                .map(Order.View::from);
    }

    public Page<Order.View> getByTimeInTable(OrderCommand.Get command){
        return orderService.getByTimeInTable(command.getTableId(), command.getFrom(), command.getTo(), PageRequest.of(command.getPage()-1, command.getSize()))
                .map(Order.View::from);
    }
}
