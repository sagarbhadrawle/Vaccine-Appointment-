package com.vaccine.repositoy;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vaccine.model.VaccinationCenter;

public interface VaccinationCenterRepository extends JpaRepository<VaccinationCenter, Integer> {

}

