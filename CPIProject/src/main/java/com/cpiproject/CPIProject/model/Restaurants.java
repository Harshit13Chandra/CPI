package com.cpiproject.CPIProject.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Restaurants {

    @Id
    int id;
    String name;
    String loc;
}
