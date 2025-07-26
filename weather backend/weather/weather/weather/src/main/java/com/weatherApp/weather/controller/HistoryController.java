package com.weatherApp.weather.controller;

import com.weatherApp.weather.dto.HistoryDto;
import com.weatherApp.weather.service.HistoryService;
import com.weatherApp.weather.entity.HistoryData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/history")
public class HistoryController {

    @Autowired
    private HistoryService historyService;

    @PostMapping
    public ResponseEntity<String> saveHistory(@RequestBody HistoryDto historyDto) {
        historyService.saveHistory(historyDto);
        return ResponseEntity.ok("History data saved successfully.");
    }

    @GetMapping("/city/{cityId}")
    public ResponseEntity<List<HistoryData>> getHistoryByCity(@PathVariable Long cityId) {
        List<HistoryData> history = historyService.getHistoryByCityId(cityId);
        return ResponseEntity.ok(history);
    }
}