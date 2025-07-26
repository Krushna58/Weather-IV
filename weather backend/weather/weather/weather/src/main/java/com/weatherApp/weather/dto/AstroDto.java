package com.weatherApp.weather.dto;

import java.time.LocalTime;

public class AstroDto {
    private LocalTime sunrise;
    private LocalTime sunset;
    private LocalTime moonrise;
    private LocalTime moonset;
    private Long cityId;

    // Getters and Setters
    public LocalTime getSunrise() {
        return sunrise;
    }

    public void setSunrise(LocalTime sunrise) {
        this.sunrise = sunrise;
    }

    public LocalTime getSunset() {
        return sunset;
    }

    public void setSunset(LocalTime sunset) {
        this.sunset = sunset;
    }

    public LocalTime getMoonrise() {
        return moonrise;
    }

    public void setMoonrise(LocalTime moonrise) {
        this.moonrise = moonrise;
    }

    public LocalTime getMoonset() {
        return moonset;
    }

    public void setMoonset(LocalTime moonset) {
        this.moonset = moonset;
    }

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }
}