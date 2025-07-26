package com.weatherApp.weather.controller;

//import com.weatherApp.weather.dto.HistoryAverageDto;
import com.weatherApp.weather.dto.HistoryDto;
import com.weatherApp.weather.service.HistoryService;
import com.weatherApp.weather.entity.HistoryData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryController {

    @Autowired
    private HistoryService historyService;


//    @GetMapping("/api/history/average/{city}/{startDate}/{endDate}")
//    public ResponseEntity<HistoryAverageDto> getAverageWeather(
//            @PathVariable String city,
//            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
//            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
//
//        HistoryAverageDto averageDto = historyService.calculateAverages(city, startDate, endDate);
//        return ResponseEntity.ok(averageDto);
//    }

    @GetMapping("/api/history/city/{city}/{startDate}/{endDate}")
    public ResponseEntity<List<HistoryData>> getHistoryByCityName(
            @PathVariable String city,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {

        List<HistoryData> history = historyService.fetchHistoryData(city, startDate, endDate);
        return ResponseEntity.ok(history);
    }

    @GetMapping("/api/history/export/{city}/{startDate}/{endDate}")
    public ResponseEntity<byte[]> exportHistoryCsv(
            @PathVariable String city,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {

        byte[] csvData = historyService.exportCsv(city, startDate, endDate);
        String filename = city + "_history_" + startDate + "_to_" + endDate + ".csv";

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                .contentType(MediaType.TEXT_PLAIN)
                .body(csvData);
    }


}