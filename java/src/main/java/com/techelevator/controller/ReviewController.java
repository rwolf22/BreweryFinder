package com.techelevator.controller;

import com.techelevator.dao.JdbcReviewDao;
import com.techelevator.model.Review;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/review")
public class ReviewController {

    JdbcReviewDao reviewDao;

    public ReviewController(JdbcReviewDao reviewDao) {
        this.reviewDao = reviewDao;
    }

    @RequestMapping(path = "/all", method = RequestMethod.GET)
    public List<Review> getAll() {
        return reviewDao.getAll();
    }

    @RequestMapping(path = "/create", method = RequestMethod.POST)
    public boolean create(@RequestBody Review newReview) {
        return reviewDao.create(newReview);
    }
}
