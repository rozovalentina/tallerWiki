package com.web.taller.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "contacto")
public class ContactForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id_contacto;
    private String name;
    private String surnames;
    private String email;
    private int semester;
    private String description;

}
