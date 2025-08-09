package com.vaccine.repositoy;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vaccine.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

}
