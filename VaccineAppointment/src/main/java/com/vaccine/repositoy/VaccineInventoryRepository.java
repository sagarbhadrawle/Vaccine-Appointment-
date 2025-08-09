package com.vaccine.repositoy;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vaccine.model.VaccineInventory;

public interface VaccineInventoryRepository extends JpaRepository<VaccineInventory, Integer> {

	
	public List<VaccineInventory> findByDate(LocalDate date);
	public List<VaccineInventory> findByVaccineId(Integer vaccineId);
	
}
