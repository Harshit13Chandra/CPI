package com.cpiproject.CPIProject.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Users {
    @Id
    String regId;
    String phone;
    int rating;
    int OrdersDelivered;
    boolean isAvailableForFood;
    boolean isAvailableForGrocery;
}
