package com.weatherApp.weather.controller;

import com.weatherApp.weather.dto.AstroDto;
import com.weatherApp.weather.service.AstroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/astro")
public class AstroController {

    @Autowired
    private AstroService astroService;

    @PostMapping("/save")
    public ResponseEntity<String> saveAstroData(@RequestBody AstroDto astroDto) {
        String result = astroService.saveAstroData(astroDto);
        return ResponseEntity.ok(result);
    }
}