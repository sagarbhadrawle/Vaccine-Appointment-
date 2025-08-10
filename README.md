# Vaccine Appointment System

![Vaccine Logo](https://github.com/sagarbhadrawle/Vaccine-Appointment-/blob/main/VaccineAppointmentFronted/images/logo.png)

## 📖 Overview
The **Vaccine Appointment System** is a Spring Boot-based application that helps users register, book appointments, and track vaccination details.  
It integrates authentication, validation, and documentation features for a secure and smooth workflow.

---

## 🗄 Database Entity Representation

Below is the entity relationship diagram (ERD) representation based on your models:


### Entities
1. **User** – Stores user personal details, credentials, and role.
2. **Member** – Tracks vaccination doses, registration, and linked user.
3. **Appointment** – Stores booking details, slots, and vaccination center info.
4. **VaccinationCenter** – Stores location details and associated inventory.
5. **Vaccine** – Stores vaccine information and linked member.
6. **VaccineInventory** – Tracks vaccine stock and date.
7. **VaccineCount** – (Implied) Tracks count of available vaccines.

---

## 💻 Technologies Used
This project uses the following technologies and tools:

- **Java 17+** – Core programming language
- **Spring Boot** – Application framework
- **Spring Boot Security** – Authentication & authorization
- **Spring Data JPA** – ORM for database interaction
- **Maven** – Build and dependency management
- **Validation API (Jakarta Validation)** – Data validation
- **Swagger UI** – API documentation and testing
- **Lombok** – Reduces boilerplate code
- **MySQL / PostgreSQL** – Relational database support

---

## 📂 Package Structure

---

## 🚀 Features
- User registration & login
- Vaccination slot booking
- Dose tracking (Dose 1 & Dose 2)
- Center inventory management
- Secure API access with Spring Security
- API documentation with Swagger

---

## 🧑‍💻 Author
**Sagar Bhadrawle**

---

## 📸 Project Representation
Below is a representation of the system workflow and purpose:

![Vaccine Immunization](image.png)

