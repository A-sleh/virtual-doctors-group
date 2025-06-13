##

# Medical Group Management Platform

##

It is an electronic platform that registers participating doctors independently as each in their own clinic, providing them with a way to manage their local appointments and remote bookings in addition to a scientific container that allows them to share their experiences, skills, and methods of dealing with common and rare cases.

This platform aims to make the process of searching for and communicating with a doctor extremely easy by providing multiple means to help in selecting or finding the doctor based on the relevant requirements.  
This includes searching by the doctor's name, specialty, or gender, with the option to choose the nearest area, the next available appointment, or the lowest cost.

It enables users to classify doctors based on factors such as specialty, gender, user ratings, location, or nearest appointment, etc.

It also offers a remote booking feature that eliminates unnecessary transportation hassles, which is one of the main goals of the platform.

The platform provides scheduling of user appointments on their personal page and sends reminder notifications for upcoming appointments, allowing users to have inquiries with the doctor in order to enhance communication and trust between the two parties.

In summary, it provides comprehensive medical services in terms of specialty, cost, location, and time.

## Overview of the System

# Booking System

Users can search for a doctor's name, and some details will be displayed (specialty, location, working hours, contact number, rating, doctor's consultation fee with any discount, if available), and the soonest possible appointment that can be booked if the user wants to find the most suitable doctor for a specific specialty in terms of (shortest distance, closest appointment, or ratings, or doctor's fee, or the doctor's gender). A table will be displayed that includes suitable doctors along with the approximate appointment time for consulting the doctor if the booking is confirmed.

A notification will be sent to the user upon confirming the booking and one hour before the appointment time as a reminder.  
To ensure that spam or manipulation in bookings does not occur, the booking is confirmed after entering the user's personal data and paying a small amount.

The booking system is linked to the local booking system for each doctor to ensure there are no conflicts between the booking system's appointments and the local appointments for each doctor, and to update the appointments with every event.  
(The user can cancel the appointment 24 hours prior, as long as it has not been confirmed.)  
The user can confirm the appointment by paying a certain amount or paying the full consultation fee, so if there is a delay, the appointment will not be canceled (but rather placed on a waiting list) in a local list specific to the doctor's booking interface.

#### SYSTEM DESCRIPTION

## 1. Application's Route design

## Dashboard

1-Home : /app/dashboard
2-Doctor : /app/dashboard/doctor
3-patient: /app/dashboard/patient
4-support: /app/dashboard/support

## Doctor

1- Home : /app/doctor
2- Reservations: /app/doctor/:id/reservation
3- Profile: /app/doctor/:id/profile
---Profile(about): /app/doctor/:id/profile/about
---Profile(clinic): /app/doctor/:id/profile/clinic
---Profile(patientOpinion): /app/doctor/:id/profile/patientOpinion

## Patient

1- Home : /app/patient
2- Reservations: /app/patient/:id/reservation

## Autientication

1- LOGIN : /auth/login
2- REGITER : /auth/registyer

## Shared

1- SETTING: /app/setting/:id
---SETTING(account): /app/setting/:id/account
2- SUPPORT: /app/support/:id
3- SEARCHING ON DOCTOR : /app/doctors
4- CONSULTATION: /app/consultation/:id
5- ARTICALS: /app/article
