package com.weatherApp.weather.repository;

import com.weatherApp.weather.dto.HistoryDto;
import com.weatherApp.weather.entity.HistoryData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface HistoryRepository extends JpaRepository<HistoryData, Long> {
    List<HistoryData> findByCityNameIgnoreCaseAndDateBetween(
            String cityName, LocalDate startDate, LocalDate endDate);


   // List<HistoryData> findByNameIgnoreCaseAndDateBetween(String cityName, LocalDate startDate, LocalDate endDate);

//    Optional<HistoryData> findByCityName(String name);
}
