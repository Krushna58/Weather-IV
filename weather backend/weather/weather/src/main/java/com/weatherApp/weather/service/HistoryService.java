package com.weatherApp.weather.service;

//import com.weatherApp.weather.dto.HistoryAverageDto;
import com.weatherApp.weather.dto.HistoryDto;
import com.weatherApp.weather.entity.HistoryData;
import com.weatherApp.weather.repository.HistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import java.io.ByteArrayOutputStream;
import java.io.OutputStreamWriter;


@Service
public class HistoryService {

    @Autowired
    HistoryRepository historyRepository;

//    @Autowired
//    private CityRepository cityRepository;

//    public HistoryData saveHistory(HistoryDto dto) {
////        HistoryData city = historyRepository.findByCityName(dto.getCityName())
////                .orElseThrow(() -> new RuntimeException("City not found"));
//        try{
//            HistoryData data = new HistoryData();
//
//
//            data.setCityName(dto.getCityName());
//            data.setDate(dto.getDate());
//            data.setHumidity(dto.getHumidity());
//            data.setMoonrise(dto.getMoonrise());
//            data.setMoonset(dto.getMoonset());
//            data.setRainfall(dto.getRainfall());
//            data.setSunrise(dto.getSunrise());
//            data.setSunset(dto.getSunset());
//            data.setTemperature(dto.getTemperature());
//
//            return historyRepository.save(data);
//        } catch (Exception e) {
//            System.out.println("Duplicate Data");
//            return null;
//        }
//
//
//    }



    public List<HistoryData> fetchHistoryData(String city, LocalDate startDate, LocalDate endDate) {
        return historyRepository.findByCityNameIgnoreCaseAndDateBetween(city, startDate, endDate);
    }

    public byte[] exportCsv(String city, LocalDate startDate, LocalDate endDate) {
        List<HistoryData> filteredData = historyRepository.findByCityNameIgnoreCaseAndDateBetween(city, startDate, endDate);

        if (filteredData.isEmpty()) {
            throw new RuntimeException("No data found for the given city and date range.");
        }

        try (ByteArrayOutputStream out = new ByteArrayOutputStream();
             OutputStreamWriter writer = new OutputStreamWriter(out)) {

            writer.write("History ID,CityName,Date,Humidity,Moonrise,Moonset,Rainfall,Sunrise,Sunset,Temperature\n");

            for (HistoryData data : filteredData) {
                writer.write(data.getHistoryId() + "," +
                        data.getCityName() + "," +
                        data.getDate() + "," +
                        data.getHumidity() + "," +
                        data.getMoonrise() + "," +
                        data.getMoonset() + "," +
                        data.getRainfall() + "," +
                        data.getSunrise() + "," +
                        data.getSunset() + "," +
                        data.getTemperature() + "\n");
            }

            writer.flush();
            return out.toByteArray();
        } catch (IOException e) {
            throw new RuntimeException("Error generating CSV", e);
        }
    }

//    public HistoryAverageDto calculateAverages(String city, LocalDate startDate, LocalDate endDate) {
//        List<HistoryData> dataList = historyRepository.findByCityNameIgnoreCaseAndDateBetween(city, startDate, endDate);
//
//        if (dataList.isEmpty()) {
//            throw new RuntimeException("No weather data found for the given parameters.");
//        }
//
//        double avgTemp = dataList.stream().mapToDouble(HistoryData::getTemperature).average().orElse(0);
//        double avgHumidity = dataList.stream().mapToDouble(HistoryData::getHumidity).average().orElse(0);
//        double avgRainfall = dataList.stream().mapToDouble(HistoryData::getRainfall).average().orElse(0);
//
//        HistoryAverageDto result = new HistoryAverageDto();
//        result.setCityName(city);
//        result.setAvgTemperature(avgTemp);
//        result.setAvgHumidity(avgHumidity);
//        result.setAvgRainfall(avgRainfall);
//
//        return result;
//    }

}