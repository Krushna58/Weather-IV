package com.weatherApp.weather.service;

import com.weatherApp.weather.dto.CityDto;
import com.weatherApp.weather.entity.City;
import com.weatherApp.weather.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public void addCity(CityDto dto) {
        City city = new City();
        city.setCityName(dto.getCityName());
        city.setState(dto.getState());
        city.setCountry(dto.getCountry());
        city.setLatitude(dto.getLatitude());
        city.setLongitude(dto.getLatitude());
        cityRepository.save(city);
    }

    public List<CityDto> getAllCities() {
        return cityRepository.findAll().stream().map(city -> {
            CityDto dto = new CityDto();
            dto.setCityId(city.getCityId());
            dto.setCityName(city.getCityName());
            dto.setState(city.getState());
            dto.setCountry(city.getCountry());
            dto.setLatitude(city.getLatitude());
            dto.setLongitude(city.getLongitude());
            return dto;
        }).collect(Collectors.toList());
    }

    public CityDto getCityById(Long id) {
        City city = cityRepository.findById(id).orElseThrow(() -> new RuntimeException("City not found"));
        CityDto dto = new CityDto();
        dto.setCityId(city.getCityId());
        dto.setCityName(city.getCityName());
        dto.setState(city.getState());
        dto.setCountry(city.getCountry());
        dto.setLatitude(city.getLatitude());
        dto.setLongitude(city.getLongitude());
        return dto;
    }
}