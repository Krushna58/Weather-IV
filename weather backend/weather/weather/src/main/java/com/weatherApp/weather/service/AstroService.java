//package com.weatherApp.weather.service;
//
//import com.weatherApp.weather.dto.AstroDto;
//import com.weatherApp.weather.entity.AstroData;
//import com.weatherApp.weather.entity.City;
//import com.weatherApp.weather.repository.AstroRepository;
//import com.weatherApp.weather.repository.CityRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class AstroService {
//
//    @Autowired
//    private AstroRepository astroRepository;
//
//    @Autowired
//    private CityRepository cityRepository;
//
//    public String saveAstroData(AstroDto dto) {
//        Optional<City> cityOptional = cityRepository.findById(dto.getCityId());
//
//        if (!cityOptional.isPresent()) {
//            return "City not found";
//        }
//
//        AstroData data = new AstroData();
//        data.setSunrise(dto.getSunrise());
//        data.setSunset(dto.getSunset());
//        data.setMoonrise(dto.getMoonrise());
//        data.setMoonset(dto.getMoonset());
//        data.setCity(cityOptional.get());
//
//        astroRepository.save(data);
//        return "Astro data saved successfully";
//    }
//}