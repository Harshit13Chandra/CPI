package com.cpiproject.CPIProject.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Restaurants {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAvailableDeliverers() {
        return AvailableDeliverers;
    }

    public void setAvailableDeliverers(int availableDeliverers) {
        AvailableDeliverers = availableDeliverers;
    }

    public String getLoc() {
        return loc;
    }

    public void setLoc(String loc) {
        this.loc = loc;
    }

    @Id
    int id;
    String name;
    String loc;
    int AvailableDeliverers;
}
