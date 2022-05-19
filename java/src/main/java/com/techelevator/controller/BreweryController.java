package com.techelevator.controller;

import com.techelevator.dao.JdbcBreweryDao;
import com.techelevator.model.Brewery;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/brewery")
public class BreweryController {

    private JdbcBreweryDao breweryDao;

    public BreweryController(JdbcBreweryDao breweryDao) {
        this.breweryDao = breweryDao;
    }

    @RequestMapping(path = "/all" , method = RequestMethod.GET)
    public List<Brewery> getAll() {
        return breweryDao.getAll();
    }

    @RequestMapping(path = "/create", method = RequestMethod.POST)
    public boolean create(@RequestBody Brewery newBrewery) {
        return breweryDao.create(newBrewery);
    }

    @RequestMapping(path = "/favorites/{username}/all", method = RequestMethod.GET)
    public List<Brewery> getFavorites(@PathVariable String username) {
        return breweryDao.getFavorites(username);
    }

    @RequestMapping(path = "favorites/{username}/add/{breweryName}", method = RequestMethod.POST)
    public boolean addFavorite(@PathVariable String username, @PathVariable String breweryName) {
        return breweryDao.addFavorite(breweryName, username);
    }
}
