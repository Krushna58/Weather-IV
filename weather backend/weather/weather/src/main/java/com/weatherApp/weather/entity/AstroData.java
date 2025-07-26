//package com.weatherApp.weather.entity;
//
//import javax.persistence.*;
//import java.time.LocalTime;
//
//@Entity
//@Table(name = "astro_data")
//public class AstroData {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private LocalTime sunrise;
//    private LocalTime sunset;
//    private LocalTime moonrise;
//    private LocalTime moonset;
//
//    @ManyToOne
//    @JoinColumn(name = "city_id", referencedColumnName = "id")
//    private City city;
//
//    // Getters and Setters
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public LocalTime getSunrise() {
//        return sunrise;
//    }
//
//    public void setSunrise(LocalTime sunrise) {
//        this.sunrise = sunrise;
//    }
//
//    public LocalTime getSunset() {
//        return sunset;
//    }
//
//    public void setSunset(LocalTime sunset) {
//        this.sunset = sunset;
//    }
//
//    public LocalTime getMoonrise() {
//        return moonrise;
//    }
//
//    public void setMoonrise(LocalTime moonrise) {
//        this.moonrise = moonrise;
//    }
//
//    public LocalTime getMoonset() {
//        return moonset;
//    }
//
//    public void setMoonset(LocalTime moonset) {
//        this.moonset = moonset;
//    }
//
//    public City getCity() {
//        return city;
//    }
//
//    public void setCity(City city) {
//        this.city = city;
//    }
//}