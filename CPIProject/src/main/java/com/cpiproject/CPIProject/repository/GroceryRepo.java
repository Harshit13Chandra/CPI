package com.cpiproject.CPIProject.repository;


import com.cpiproject.CPIProject.model.Grocery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroceryRepo extends JpaRepository<Grocery, Integer> {
}
