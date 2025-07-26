package com.weatherAPI.weatherJar.service;

import com.weatherAPI.weatherJar.dto.HistoryDto;
import com.weatherAPI.weatherJar.dto.HistoryDto;
import com.weatherAPI.weatherJar.entity.HistoryData;
import com.weatherAPI.weatherJar.repository.HistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class HistoryService {

    @Autowired
    HistoryRepository historyRepository;

//    @Autowired
//    private CityRepository cityRepository;

    public HistoryData saveHistory(HistoryDto dto) {
//        HistoryData city = historyRepository.findByCityName(dto.getCityName())
//                .orElseThrow(() -> new RuntimeException("City not found"));
        try{
            HistoryData data = new HistoryData();


            data.setCityName(dto.getCityName());
            data.setDate(dto.getDate());
            data.setHumidity(dto.getHumidity());
            data.setMoonrise(dto.getMoonrise());
            data.setMoonset(dto.getMoonset());
            data.setRainfall(dto.getRainfall());
            data.setSunrise(dto.getSunrise());
            data.setSunset(dto.getSunset());
            data.setTemperature(dto.getTemperature());

            return historyRepository.save(data);
        } catch (Exception e) {
            System.out.println("Duplicate Data");
            return null;
        }


    }

    public void dropTable()
    {
        historyRepository.deleteAll();
    }

    public List<HistoryData> fetchHistoryData(String city, LocalDate startDate, LocalDate endDate) {
        return historyRepository.findByCityNameIgnoreCaseAndDateBetween(city, startDate, endDate);
    }

}