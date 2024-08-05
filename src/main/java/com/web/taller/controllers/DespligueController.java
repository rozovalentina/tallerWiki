package com.web.taller.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DespligueController {
    
    @GetMapping("/despliegue")
    public String showDeployPage() {
        return "despliegue";
    }

}
