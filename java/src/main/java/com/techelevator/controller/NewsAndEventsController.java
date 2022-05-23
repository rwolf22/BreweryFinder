package com.techelevator.controller;

import com.techelevator.dao.JdbcNewsAndEventsDao;
import com.techelevator.model.NewsAndEvents;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/newsAndEvents")
public class NewsAndEventsController {

    JdbcNewsAndEventsDao newsAndEventsDao;

    public NewsAndEventsController(JdbcNewsAndEventsDao newsAndEventsDao) {
        this.newsAndEventsDao = newsAndEventsDao;
    }

    @RequestMapping(path = "/all", method = RequestMethod.GET)
    public List<NewsAndEvents> getAll () {
        return newsAndEventsDao.getAll();
    }

    @RequestMapping(path = "/create", method = RequestMethod.POST)
    public boolean create(@RequestBody NewsAndEvents event) {
        return newsAndEventsDao.create(event);
    }
}
