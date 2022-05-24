package com.techelevator.dao;

import com.techelevator.model.NewsAndEvents;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JdbcNewsAndEventsDao implements NewsAndEventsDao{

    JdbcTemplate jdbcTemplate;

    public JdbcNewsAndEventsDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<NewsAndEvents> getAll() {
        List<NewsAndEvents> events = new ArrayList<>();
        String sql = "SELECT * FROM news_events;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            events.add(mapRowToNewsAndEvents(results));
        }
        return events;
    }

    @Override
    public boolean create(NewsAndEvents event) {
        String sql = "INSERT INTO news_events (brewery_id, name, event_date, description) " +
                "VALUES(?, ?, ?, ?);";
        int rowsUpdated = jdbcTemplate.update(sql, event.getBreweryId(), event.getName(), event.getEventDate(), event.getDescription());
        return rowsUpdated > 0;
    }

    private NewsAndEvents mapRowToNewsAndEvents (SqlRowSet rowSet) {
        NewsAndEvents event = new NewsAndEvents();
        event.setNewsEventsId(rowSet.getLong("news_events_id"));
        event.setBreweryId(rowSet.getLong("brewery_id"));
        event.setName(rowSet.getString("name"));
        event.setEventDate(rowSet.getDate("event_date").toLocalDate());
        event.setDescription(rowSet.getString("description"));
        return event;
    }
}
