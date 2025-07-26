package com.weatherApp.weather.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.core.support.LdapContextSource;

@Configuration
public class LdapConfig {

    @Bean
    public LdapContextSource contextSource() {
        LdapContextSource source = new LdapContextSource();
        source.setUrl("ldap://192.168.1.27:389");
        source.setBase("dc=inspiritvision,dc=com");
        source.setUserDn("cn=admin,dc=inspiritvision,dc=com");
        source.setPassword("Sena@120");
        return source;
    }

    @Bean
    public LdapTemplate ldapTemplate() {
        return new LdapTemplate(contextSource());
    }
}