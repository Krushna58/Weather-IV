package com.weatherAPI.weatherJar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

@SpringBootApplication
@EnableScheduling
public class WeatherJarApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeatherJarApplication.class, args);
	}




}
