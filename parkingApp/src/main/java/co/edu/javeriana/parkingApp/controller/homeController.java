package co.edu.javeriana.parkingApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class homeController {
    @GetMapping("/parkingApp")
    public String home(){        
        return "admin-pisos";
    }
}
