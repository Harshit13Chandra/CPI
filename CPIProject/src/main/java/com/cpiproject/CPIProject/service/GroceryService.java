package com.cpiproject.CPIProject.service;


import com.cpiproject.CPIProject.model.Grocery;
import com.cpiproject.CPIProject.repository.GroceryRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroceryService {

    private final GroceryRepo groceryRepo;

    public GroceryService(GroceryRepo groceryRepo) {
        this.groceryRepo = groceryRepo;
    }

    public List<Grocery> findGroceries() {

        return groceryRepo.findAll();

    }
}
