package com.cpiproject.CPIProject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Grocery {
    @Id
    int id;
    String name;
}
