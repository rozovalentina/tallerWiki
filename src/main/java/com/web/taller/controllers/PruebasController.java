package com.web.taller.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PruebasController {

    @GetMapping("/pruebas")
    public String MostrarPruebas() {
        return "pruebas";
    }
}
