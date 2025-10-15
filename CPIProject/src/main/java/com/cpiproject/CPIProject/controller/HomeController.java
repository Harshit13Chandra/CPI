package com.cpiproject.CPIProject.controller;

import com.cpiproject.CPIProject.model.Grocery;
import com.cpiproject.CPIProject.model.Restaurants;
import com.cpiproject.CPIProject.model.Users;
import com.cpiproject.CPIProject.service.GroceryService;
import com.cpiproject.CPIProject.service.RestaurantService;
import com.cpiproject.CPIProject.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    private final UserService userService;
    private final RestaurantService restaurantService;
    private final GroceryService groceryService;

    public HomeController(UserService userService, RestaurantService restaurantService, GroceryService groceryService) {
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.groceryService = groceryService;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> payload) {
        String regId = payload.get("registrationId");
        String phone = payload.get("phoneNumber");
        Optional<Optional<Users>> users = Optional.ofNullable(userService.findUser(regId));

        Map<String, Object> response = new HashMap<>();
        if (users.isPresent()) {
            response.put("status", "success");
            response.put("user", users.get());
            return ResponseEntity.ok(response);
        } else {
            response.put("status", "error");
            response.put("message", "Student not Registered");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }



    @GetMapping("/restaurants")
    public List<Map<String, Object>> getRestaurants() {
        List<Restaurants> restaurants = restaurantService.findAllRest();
        return restaurants.stream().map(r -> {
            Map<String, Object> res = new HashMap<>();
            res.put("id", r.getId());
            res.put("name", r.getName());
            res.put("availableDeliverers", r.getAvailableDeliverers());
            return res;
        }).collect(Collectors.toList());
    }

    @GetMapping("/grocery/items")
    public List<Grocery> getAllGroceryItems() {
        return groceryService.findGroceries();
    }

//    @PostMapping("/grocery/order")
//    public ResponseEntity<Map<String, String>> groceryOrder(@RequestBody Map<String, Object> payload) {
//        String ordererId = (String) payload.get("ordererId");
//        List<String> items = (List<String>) payload.get("items");
//
//        Order order = new Order();
//        order.setOrderType("GROCERY");
//        order.setOrdererId(ordererId);
//        order.setItems(String.join(",", items));
//        orderRepo.save(order);
//
//        return ResponseEntity.ok(Map.of("status", "success", "message", "Grocery order submitted successfully"));
//    }




}
