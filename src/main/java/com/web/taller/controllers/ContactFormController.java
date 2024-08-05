package com.web.taller.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.web.taller.model.ContactForm;
import com.web.taller.model.ContactFormRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/controllers")
public class ContactFormController {
    @Autowired
    private ContactFormRepository contactFormRepository;

    @GetMapping("/contact")
    public String showForm(Model model) {
        model.addAttribute("contactForm", new ContactForm());
        return "contact";
    }

    @PostMapping("/contact")
    public String saveForm(@ModelAttribute("contactForm") ContactForm contact) {
        System.out.println(contact);
        contactFormRepository.save(contact);
        
        return "result";
    }

    
    
}
