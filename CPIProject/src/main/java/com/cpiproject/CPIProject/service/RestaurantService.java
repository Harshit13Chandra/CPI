package com.cpiproject.CPIProject.service;


import com.cpiproject.CPIProject.model.Restaurants;
import com.cpiproject.CPIProject.repository.RestauRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {

    private RestauRepo restauRepo;

    public RestaurantService(RestauRepo restauRepo) {
        this.restauRepo = restauRepo;
    }


    public List<Restaurants> findAllRest() {

        return restauRepo.findAll();

    }
}
