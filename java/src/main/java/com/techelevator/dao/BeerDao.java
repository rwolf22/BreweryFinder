package com.techelevator.dao;

import com.techelevator.model.Beer;

import java.util.List;

public interface BeerDao {

    List<Beer> getAll();

    boolean createBeer(Beer newBeer);

    List<Beer> getFavorites(String username);

    boolean addFavorite(String username, String beerName);
}
