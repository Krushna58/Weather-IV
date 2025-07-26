package com.weatherAPI.weatherJar;

import com.weatherAPI.weatherJar.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class WeatherScheduler {
    private final ApplicationEvent applicationEvent;
    private final HistoryService historyService;

    @Autowired
    public WeatherScheduler(HistoryService historyService, ApplicationEvent applicationEvent, HistoryService historyService1) {
        this.applicationEvent = applicationEvent;
//        this.historyService = historyService;
        this.historyService = historyService1;
    }

    @Scheduled(cron = "0 0 1 * * ?")
    public void scheduledWeatherFetch(){
        System.out.println("System Running Scheduler....................");
        historyService.dropTable();
        applicationEvent.fetchAndSaveWeatherHistory();
        System.out.println("Data updated");
    }
}
