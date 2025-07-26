package com.weatherApp.weather.service;

import com.weatherApp.weather.dto.HistoryDto;
import com.weatherApp.weather.entity.City;
import com.weatherApp.weather.entity.HistoryData;
import com.weatherApp.weather.repository.CityRepository;
import com.weatherApp.weather.repository.HistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryService {

    @Autowired
    private HistoryRepository historyRepository;

    @Autowired
    private CityRepository cityRepository;

    public HistoryData saveHistory(HistoryDto dto) {
        City city = cityRepository.findById(dto.getCityId())
                .orElseThrow(() -> new RuntimeException("City not found"));

        HistoryData data = new HistoryData();
        data.setCity(city);
        data.setDate(dto.getDate());
        data.setTemperature(dto.getTemperature());
        data.setHumidity(dto.getHumidity());
        data.setRainfall(dto.getRainfall());

        return historyRepository.save(data);
    }

    public List<HistoryData> getHistoryByCityId(Long cityId) {
        return historyRepository.findByCity_CityId(cityId);
    }
}