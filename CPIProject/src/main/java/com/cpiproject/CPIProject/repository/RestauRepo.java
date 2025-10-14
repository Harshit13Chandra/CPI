package com.cpiproject.CPIProject.repository;

import com.cpiproject.CPIProject.model.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestauRepo extends JpaRepository<Restaurants, Integer> {
}
