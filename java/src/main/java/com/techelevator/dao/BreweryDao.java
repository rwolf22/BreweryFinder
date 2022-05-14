package com.techelevator.dao;

import com.techelevator.model.Brewery;

import java.util.List;

public interface BreweryDao {

    List<Brewery> listAll();

    Brewery getById(Long breweryId);

    Brewery getByName(String breweryName);

    List<Brewery> getAllByOwnerName(String ownerName);

    boolean create(Brewery newBrewery);
}
