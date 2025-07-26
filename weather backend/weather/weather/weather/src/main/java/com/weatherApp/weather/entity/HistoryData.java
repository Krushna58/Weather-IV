package com.weatherApp.weather.entity;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "history_data")
public class HistoryData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long historyId;

    private LocalDate date;
    private Double temperature;
    private Double humidity;
    private Double rainfall;

    @ManyToOne
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    // Getters and Setters

    public Long getHistoryId() {
        return historyId;
    }

    public void setHistoryId(Long historyId) {
        this.historyId = historyId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public Double getHumidity() {
        return humidity;
    }

    public void setHumidity(Double humidity) {
        this.humidity = humidity;
    }

    public Double getRainfall() {
        return rainfall;
    }

    public void setRainfall(Double rainfall) {
        this.rainfall = rainfall;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}