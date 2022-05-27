package com.techelevator.model;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class NewsAndEvents {

    private Long newsEventsId;
    @NotNull
    private Long breweryId;
    private String breweryName;
    @NotNull
    private String name;
    @NotNull
    private LocalDate eventDate;
    @NotNull
    private String description;

    public NewsAndEvents() {
    }

    public NewsAndEvents(Long newsEventsId, Long breweryId, String breweryName, String name, LocalDate eventDate, String description) {
        this.newsEventsId = newsEventsId;
        this.breweryId = breweryId;
        this.breweryName = breweryName;
        this.name = name;
        this.eventDate = eventDate;
        this.description = description;
    }

    public Long getNewsEventsId() {
        return newsEventsId;
    }

    public void setNewsEventsId(Long newsEventsId) {
        this.newsEventsId = newsEventsId;
    }

    public Long getBreweryId() {
        return breweryId;
    }

    public void setBreweryId(Long breweryId) {
        this.breweryId = breweryId;
    }

    public String getBreweryName() {
        return breweryName;
    }

    public void setBreweryName(String breweryName) {
        this.breweryName = breweryName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
