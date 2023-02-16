package com.registration.registration.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name="registration_forms")
public class registrations {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    @Column(name="Fname")
    private String fname;
    @Column(name="Lname")
    private String lname;
    @Column(name="Mobile")
    private Long mobile;
    @Column(name="Aadhar")
    private Long aadhar;
    @Column(name="Password")
    private String password;
}
