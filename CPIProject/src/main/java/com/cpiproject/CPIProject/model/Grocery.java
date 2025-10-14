package com.cpiproject.CPIProject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Grocery {
    @Id
    int id;
    String name;
}
