package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.OrderDetailCommand;
import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.food.FoodService;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetailService;
import com.thaivo.restaurant.domain.model.table.RTable;
import com.thaivo.restaurant.domain.model.table.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class OrderDetailApplication {
    private OrderDetailService orderDetailService;
    private FoodService foodService;
    private TableService tableService;

    @Autowired
    public OrderDetailApplication(OrderDetailService orderDetailService, FoodService foodService, TableService tableService) {
        this.orderDetailService = orderDetailService;
        this.foodService = foodService;
        this.tableService = tableService;
    }

    public OrderDetail.View add(OrderDetailCommand.Create command){
        Food food = foodService.getById(command.getFoodId());
        RTable table = tableService.getById(command.getTableId());

        if(table.getStatus() == RTable.Status.READY) throw new RuntimeException("No order at table");

        OrderDetail orderDetail = orderDetailService.add(OrderDetail.builder()
                .food(food)
                .order(table.getLastOrder())
                .note(command.getNote())
                .amount(command.getAmount())
                .orderAt(System.currentTimeMillis())
                .status(OrderDetail.Status.PENDING)
                .price(food.getPrice())
                .build());

        return OrderDetail.View.from(orderDetail);
    }

    public void updateAmount(OrderDetailCommand.UpdateAmount command){
        orderDetailService.updateAmount(command.getId(), command.getAmount());
    }

    public void updateStatus(OrderDetailCommand.UpdateStatus command){
        orderDetailService.updateStatus(command.getId(), command.getStatus());
    }

    public void delete(String id){
        orderDetailService.delete(id);
    }
}
