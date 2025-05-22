---
sidebar_position: 1
title: "Personnel Model Overview"
description: "Overview of the Personnel model in Tamaki Control, detailing departments, shifts, and certifications."
---

# Personnel Model

## Overview

The Personnel model in Tamaki Control supports the organization and management of individuals within the manufacturing
environment. This model includes departments, certifications, personnel, and shifts, each with its own set of attributes
and relationships. This structure allows for tracking roles, schedules, and skills required for efficient plant
operations.

---

## Personnel Model Structure

The Personnel model consists of the following key entities:

### 1. Personnel Department

Represents individual departments within the organization, allowing hierarchical organization of departments under a
parent structure.

#### Key Fields:

- **name**: Name of the department (e.g., "Maintenance")
- **description**: Description of the department's role
- **path**: Hierarchical path representing the department's position within the organizational structure

See [personnel_departments](personnel-department) for more details.

---

### 2. Personnel Certification

Represents certifications required or held by personnel within the organization, supporting the management of
qualifications and skill sets.

#### Key Fields:

- **name**: Name of the certification (e.g., "Safety Training")
- **description**: Description of the certification

See [personnel_certifications](personnel-certification) for more details.

---

### 3. Person

Represents an individual within the organization, including their assigned department, shift, status, and
certifications.

#### Key Fields:

- **firstName**: First name of the individual
- **lastName**: Last name of the individual
- **username**: Unique username associated with the individual
- **personStatus**: Current status of the individual (e.g., `ACTIVE`, `INACTIVE`)
- **personnelCertifications**: List of certifications held by the individual

See [personnel](personnel.md) for more details.

---

## Entity Relationships

The Personnel model supports various relationships between entities to allow hierarchical and organizational
structuring:

- **Department Hierarchies**: Departments can be organized in parent-child structures.
- **Personnel Assignments**: Individuals can be assigned to departments, shifts, and certifications.
- **Location-Based Shifts**: Shifts can be associated with specific locations to manage workforce distribution within
  the facility.

## Usage

The Personnel model is designed to support:

1. **Role Management**: Track individuals' assignments to departments and shifts for improved workforce management.
2. **Skill Tracking**: Manage certifications to ensure personnel meet qualification requirements for​⬤
