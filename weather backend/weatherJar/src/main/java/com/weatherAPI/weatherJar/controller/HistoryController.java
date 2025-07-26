package com.weatherAPI.weatherJar.controller;


import com.weatherAPI.weatherJar.dto.HistoryDto;
import com.weatherAPI.weatherJar.entity.HistoryData;
import com.weatherAPI.weatherJar.service.HistoryService;
import com.weatherAPI.weatherJar.dto.HistoryDto;
import com.weatherAPI.weatherJar.service.HistoryService;
import com.weatherAPI.weatherJar.entity.HistoryData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryController {

    @Autowired
    private HistoryService historyService;

    @PostMapping("/api/history")
    public ResponseEntity<String> saveHistory(@RequestBody HistoryDto historyDto) {
        historyService.saveHistory(historyDto);
        return ResponseEntity.ok("History data saved successfully.");
    }

    @GetMapping("/api/history/city/{city}/{startDate}/{endDate}")
    public ResponseEntity<List<HistoryData>> getHistoryByCityName(
            @PathVariable String city,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {

        List<HistoryData> history = historyService.fetchHistoryData(city, startDate, endDate);
        return ResponseEntity.ok(history);
    }
//
//
//    @PostMapping("/astro/save")
//    public ResponseEntity<String> saveAstroData(@RequestBody HistoryDto historyDto) {
//        String result = historyDto.saveAstroData(astroDto);
//        return ResponseEntity.ok(result);
//    }
//
//
//    @PostMapping("/api/cities")
//    public ResponseEntity<String> addCity(@RequestBody HistoryDto historyDto) {
//        historyDto.addCity(cityDto);
//        return ResponseEntity.ok("City added successfully.");
//    }
//
//    @GetMapping("/api/cities")
//    public ResponseEntity<List<HistoryDto>> getAllCities() {
//        return ResponseEntity.ok(historyService.getAllCities());
//    }
//
//    @GetMapping("/api/cities/{id}")
//    public ResponseEntity<HistoryDto> getCityById(@PathVariable Long id) {
//        return ResponseEntity.ok(historyService.getCityById(id));
//    }
}
