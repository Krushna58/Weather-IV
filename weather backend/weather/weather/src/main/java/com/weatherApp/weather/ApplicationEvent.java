//package com.weatherApp.weather;
//
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.weatherApp.weather.dto.HistoryDto;
//import com.weatherApp.weather.entity.HistoryData;
//import com.weatherApp.weather.repository.HistoryRepository;
//import com.weatherApp.weather.service.HistoryService;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.HierarchicalBeanFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.context.event.ApplicationReadyEvent;
//import org.springframework.context.ApplicationListener;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Component;
//import org.springframework.web.client.RestTemplate;
//
//import java.time.LocalDate;
//import java.time.LocalTime;
//import java.time.format.DateTimeFormatter;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.Locale;
//
//@Component
//public class ApplicationEvent implements ApplicationListener<ApplicationReadyEvent> {
//
//    @Autowired
//    RestTemplate  restTemplate;
//
////    @Autowired
////    HistoryDto historyDto;
//
//    @Autowired
//    HistoryService historyService;
//
//
//
//    private static final Logger logger = LoggerFactory.getLogger(ApplicationEvent.class);
//
////    @Override
////    public void onApplicationEvent(ApplicationReadyEvent event) {
////        logger.info("Calling Weather API here");
////        HttpHeaders headers = new HttpHeaders();
////
////// set `Content-Type` and `Accept` headers
////        headers.set("key","74118886e3de48b592162836251507");
////// build the request
////        HttpEntity request = new HttpEntity(headers);
////
////        String url = "https://api.weatherapi.com/v1/history.json?q=Pune&dt=2025-01-01&end_dt=2025-01-30";
////// make an HTTP GET request with headers
////        ResponseEntity<HistoryDto[]> response = restTemplate.exchange(
////                url,
////                HttpMethod.GET,
////                request,
////                HistoryDto[].class,
////                1
////        );
////
////        //JsonNode weatherJson = response.getBody();
////
//    ////        HistoryDto[] historyDtos = response.getBody();
//    ////        logger.info(" response ==>{} ", historyDtos);
////    }
////    @Override
////    public void onApplicationEvent(ApplicationReadyEvent event) {
////
////        List<String> cities = Arrays.asList(
////                "Mumbai", "Pune", "Nagpur", "Nashik", "Thane",
////                "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Nanded",
////                "Sangli", "Jalgaon", "Akola", "Latur", "Dhule",
////                "Ahmednagar", "Chandrapur", "Parbhani", "Beed", "Ratnagiri"
////        );
////
////        LocalDate endDate = LocalDate.now();
////        LocalDate startDate = endDate.minusDays(29);
////
////        logger.info("Calling Weather API here");
////        HttpHeaders headers = new HttpHeaders();
////        headers.set("key", "74118886e3de48b592162836251507");
////        HttpEntity<?> request = new HttpEntity<>(headers);
//////    String url = String.format(
//////            "https://api.weatherapi.com/v1/history.json?q=%s&dt=%s&end_dt=%s",
//////            city, startDate, endDate
//////    );
////
//////    ResponseEntity<String> response = restTemplate.exchange(
//////            url, HttpMethod.GET, request, String.class
//////    );
////        ObjectMapper mapper = new ObjectMapper();
////
////
////        for (String city : cities) {
////            String url = String.format(
////                    "https://api.weatherapi.com/v1/history.json?q=%s&dt=%s&end_dt=%s",
////                    city, startDate, endDate
////            );
////
////            try {
////                ResponseEntity<String> response = restTemplate.exchange(
////                        url, HttpMethod.GET, request, String.class
////                );
////                JsonNode root = mapper.readTree(response.getBody());
////                JsonNode location = root.path("location");
////                JsonNode forecastDays = root.path("forecast").path("forecastday");
////
////                for (JsonNode dayNode : forecastDays) {
////                    JsonNode day = dayNode.path("day");
////                    JsonNode astro = dayNode.path("astro");
////
////                    String cityName = location.path("name").asText();
////                    LocalDate date = LocalDate.parse(dayNode.path("date").asText());
////                    Double temperature = day.path("avgtemp_c").asDouble();
////                    Double rainfall = day.path("totalprecip_mm").asDouble();
////                    Double humidity = day.path("avghumidity").asDouble();
////
////                    String sunrise = astro.path("sunrise").asText();
////                    String sunset = astro.path("sunset").asText();
////                    String moonrise = astro.path("moonrise").asText();
////                    String moonset = astro.path("moonset").asText();
////
////                    HistoryDto historyDto = new HistoryDto();
////                    historyDto.setCityName(cityName);
////                    historyDto.setDate(date);
////                    historyDto.setTemperature(temperature);
////                    historyDto.setRainfall(rainfall);
////                    historyDto.setHumidity(humidity);
////                    historyDto.setSunrise(sunrise);
////                    historyDto.setSunset(sunset);
////                    historyDto.setMoonrise(moonrise);
////                    historyDto.setMoonset(moonset);
////
////                    historyService.saveHistory(historyDto);
////                    logger.info("Saved data: {}, Date: {}", cityName, date);
////                }
////
////            } catch (Exception e) {
////                logger.error("Error processing city: " + city, e);
////            }
////        }
//    }
//
//
//
//
//
//
//
//
//
//
//
//}