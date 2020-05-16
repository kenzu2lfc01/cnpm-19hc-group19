package com.thaivo.restaurant.application;

import com.thaivo.restaurant.application.command.OrderDetailCommand;
import com.thaivo.restaurant.domain.model.food.Food;
import com.thaivo.restaurant.domain.model.food.FoodService;
import com.thaivo.restaurant.domain.model.order.OrderService;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetail;
import com.thaivo.restaurant.domain.model.order_detail.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class OrderDetailApplication {
    private OrderDetailService orderDetailService;
    private FoodService foodService;
    private OrderService orderService;

    @Autowired
    public OrderDetailApplication(OrderDetailService orderDetailService, FoodService foodService, OrderService orderService) {
        this.orderDetailService = orderDetailService;
        this.foodService = foodService;
        this.orderService = orderService;
    }

    public OrderDetail add(OrderDetailCommand.Create command){
        Food food = foodService.getById(command.getFoodId());

        return orderDetailService.add(OrderDetail.builder()
                .food(food)
                .order(orderService.getById(command.getFoodId()))
                .note(command.getNote())
                .amount(command.getAmount())
                .orderAt(System.currentTimeMillis())
                .status(OrderDetail.Status.PENDING)
                .price(food.getPrice())
                .build());
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
