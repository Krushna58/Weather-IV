//package com.weatherApp.weather.controller;
//
//import com.weatherApp.weather.dto.CityDto;
//import com.weatherApp.weather.service.CityService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/cities")
//public class CityController {
//
//    @Autowired
//    private CityService cityService;
//
//    @PostMapping
//    public ResponseEntity<String> addCity(@RequestBody CityDto cityDto) {
//        cityService.addCity(cityDto);
//        return ResponseEntity.ok("City added successfully.");
//    }
//
//    @GetMapping
//    public ResponseEntity<List<CityDto>> getAllCities() {
//        return ResponseEntity.ok(cityService.getAllCities());
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<CityDto> getCityById(@PathVariable Long id) {
//        return ResponseEntity.ok(cityService.getCityById(id));
//    }
//}