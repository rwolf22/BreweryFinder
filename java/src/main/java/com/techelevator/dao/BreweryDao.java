package com.techelevator.dao;

import com.techelevator.model.Brewery;

import java.util.List;

public interface BreweryDao {

    List<Brewery> getAll();

    boolean create(Brewery newBrewery);

    List<Brewery> getFavorites(String username);

    boolean favoriteExists(String username, String breweryName);

    boolean addFavorite(String breweryName, String username);

    boolean removeFavorite(String breweryName, String username);

    String getNameById(Long breweryId);
}
