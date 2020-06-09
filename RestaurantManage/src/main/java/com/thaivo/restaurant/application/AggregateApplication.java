package com.thaivo.restaurant.application;

import com.thaivo.restaurant.domain.model.import_bill.ImportBillService;
import com.thaivo.restaurant.domain.model.payroll.PayrollService;
import com.thaivo.restaurant.domain.model.receipt.ReceiptService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class AggregateApplication {
    private ImportBillService importBillService;
    private PayrollService payrollService;
    private ReceiptService receiptService;

    @Autowired
    public AggregateApplication(ImportBillService importBillService, PayrollService payrollService, ReceiptService receiptService) {
        this.importBillService = importBillService;
        this.payrollService = payrollService;
        this.receiptService = receiptService;
    }


    public Aggregate getAllTime(){
        double totalImport = importBillService.getTotalCostByTime(0L, System.currentTimeMillis());
        double totalSalary = payrollService.getTotalSalaryByTime(0L, System.currentTimeMillis());
        double totalReceipt = receiptService.getTotalCostByTime(0L, System.currentTimeMillis());

        return Aggregate.builder()
                .label("All time")
                .totalImport(totalImport)
                .totalSalary(totalSalary)
                .totalReceipt(totalReceipt)
                .totalProfit(totalReceipt - totalImport - totalSalary)
                .build();
    }

    public List<Aggregate> getLast7day(){
        List<Aggregate> result = new ArrayList<>();


        DateTime date = DateTime.now().withTimeAtStartOfDay().minusDays(6);
        for(int i = 0; i < 7; ++i) {
            long from = date.getMillis();
            date = date.plusDays(1);
            long to = date.getMillis() - 1;

            double totalReceipt = receiptService.getTotalCostByTime(from, to);

            result.add(Aggregate.builder()
                    .label(DateTimeFormat.forPattern("dd/MM/yyyy").print(from))
                    .totalImport(0d)
                    .totalSalary(0d)
                    .totalReceipt(totalReceipt)
                    .totalProfit(0d)
                    .build());
        }

        return result;
    }

    public List<Aggregate> getLast7month(){
        List<Aggregate> result = new ArrayList<>();


        DateTime date = DateTime.now().withDayOfMonth(1).minusMonths(6).withTimeAtStartOfDay();

        for(int i = 0; i < 7; ++i) {
            long from = date.getMillis();
            date = date.plusMonths(1);
            long to = date.getMillis() - 1;

            double totalImport = importBillService.getTotalCostByTime(from, to);
            double totalReceipt = receiptService.getTotalCostByTime(from, to);
            double totalSalary = payrollService.getTotalSalaryByTime(from, to);

            result.add(Aggregate.builder()
                    .label(DateTimeFormat.forPattern("MM/yyyy").print(from))
                    .totalImport(totalImport)
                    .totalSalary(totalSalary)
                    .totalReceipt(totalReceipt)
                    .totalProfit(totalReceipt - totalImport - totalSalary)
                    .build());
        }

        return result;
    }

    public List<Aggregate> getLast7year(){
        List<Aggregate> result = new ArrayList<>();


        DateTime date = DateTime.now().withMonthOfYear(1).withDayOfMonth(1).minusYears(6).withTimeAtStartOfDay();

        for(int i = 0; i < 7; ++i) {
            long from = date.getMillis();
            date = date.plusYears(1);
            long to = date.getMillis() - 1;

            double totalImport = importBillService.getTotalCostByTime(from, to);
            double totalReceipt = receiptService.getTotalCostByTime(from, to);
            double totalSalary = payrollService.getTotalSalaryByTime(from, to);

            result.add(Aggregate.builder()
                    .label(DateTimeFormat.forPattern("yyyy").print(from))
                    .totalImport(totalImport)
                    .totalSalary(totalSalary)
                    .totalReceipt(totalReceipt)
                    .totalProfit(totalReceipt - totalImport - totalSalary)
                    .build());
        }

        return result;
    }


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Aggregate {
        private String label;

        private Double totalImport;
        private Double totalSalary;
        private Double totalReceipt;
        private Double totalProfit;
    }
}
