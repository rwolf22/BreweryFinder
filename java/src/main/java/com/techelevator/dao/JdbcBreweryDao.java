package com.techelevator.dao;

import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JdbcBreweryDao implements BreweryDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcBreweryDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Brewery> listAll() {
        List<Brewery> breweries = new ArrayList<>();
        String sql = "SELECT * FROM brewery;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while (results.next()) {
            breweries.add(mapRowToBrewery(results));
        }
        return breweries;
    }

    @Override
    public Brewery getById(Long breweryId) {
        String sql = "SELECT * FROM brewery WHERE brewery_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryId);
        if (results.next()) {
            return mapRowToBrewery(results);
        } else {
            throw new RuntimeException("breweryId " + breweryId + " was not found.");
        }
    }

    @Override
    public Brewery getByName(String breweryName) {
        String sql = "SELECT * FROM brewery WHERE name = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryName);
        if (results.next()) {
            return mapRowToBrewery(results);
        } else {
            throw new RuntimeException("name " + breweryName + " was not found.");
        }
    }

    @Override
    public List<Brewery> getAllByOwnerName(String ownerName) {
        List<Brewery> breweries = new ArrayList<>();
        String sql = "SELECT * FROM brewery " +
                "JOIN users ON user_id = owner_id " +
                "WHERE username = ?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, ownerName);
        while (result.next()) {
            breweries.add(mapRowToBrewery(result));
        }
        return breweries;
    }

    @Override
    public boolean create(Brewery newBrewery) {
        String sql = "INSERT INTO brewery (owner_id, name, address, description, image) " +
                "VALUES (?, ?, ?, ?, ?);";
        int rowsUpdated = jdbcTemplate.update(sql, newBrewery.getOwnerId(), newBrewery.getName(), newBrewery.getAddress(), newBrewery.getDescription(), newBrewery.getImage());
        return rowsUpdated > 0;
    }

    private Brewery mapRowToBrewery(SqlRowSet rowSet) {
        Brewery brewery = new Brewery();
        brewery.setId(rowSet.getLong("brewery_id"));
        brewery.setOwnerId(rowSet.getLong("owner_id"));
        brewery.setName(rowSet.getString("name"));
        brewery.setAddress(rowSet.getString("address"));
        brewery.setDescription(rowSet.getString("description"));
        brewery.setImage(rowSet.getString("image"));
        return brewery;
    }
}
