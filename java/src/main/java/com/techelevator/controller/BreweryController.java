package com.techelevator.controller;

import com.techelevator.dao.JdbcBreweryDao;
import com.techelevator.model.Brewery;
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
        return breweryDao.listAll();
    }

    @RequestMapping(path = "/id/{id}", method = RequestMethod.GET)
    public Brewery getById(@PathVariable Long id) {
        return breweryDao.getById(id);
    }

    @RequestMapping(path = "/name/{breweryName}", method = RequestMethod.GET)
    public Brewery getByName(@PathVariable String breweryName) {
        return breweryDao.getByName(breweryName);
    }

    @RequestMapping(path = "/owner/{ownerName}", method = RequestMethod.GET)
    public List<Brewery> getAllByOwnerName(@PathVariable String ownerName) {
        return breweryDao.getAllByOwnerName(ownerName);
    }

    @RequestMapping(path = "/create", method = RequestMethod.POST)
    public boolean create(@RequestBody Brewery newBrewery) {
        return breweryDao.create(newBrewery);
    }
}
