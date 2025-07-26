package com.weatherApp.weather.repository;

import com.weatherApp.weather.entity.HistoryData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryRepository extends JpaRepository<HistoryData, Long> {
    List<HistoryData> findByCity_CityId(Long cityId);
}