package com.registration.registration.service;

import com.registration.registration.model.registrations;

public interface RegistrationService {
    public String createregistration(registrations registration);
    public registrations getregistrationById(Integer id);
    public Iterable<registrations> getAllregistrations();
    public registrations updateregistrationById(Integer id, registrations registration);
    public registrations deleteregistrationById(Integer id);
}