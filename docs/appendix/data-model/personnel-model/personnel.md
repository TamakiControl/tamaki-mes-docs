---
sidebar_position: 3
title: "personnel"
description: "Documentation for the personnel table, outlining its columns and structure."
---

# Personnel

## Overview

The `Person` entity represents individuals within the organization. Each person is assigned to a department, may be
linked to a specific shift, and can hold multiple certifications. This structure allows for detailed workforce
management, covering assignments, schedules, and skill tracking within the organization.

## Table Structure

The following table outlines the SQL columns for the `personnel` table, providing a brief description of each, along
with sample data where applicable.

| Column                    | Type            | Description                                                                                                      | Example                             |
|---------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                      | `String` (ULID) | Unique identifier for the person.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                 | `Boolean`       | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`            | `DateTime`      | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`              | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date`           | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`             | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`                   | `String`        | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`                  | `String`        | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`                  | `String`        | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`                  | `String`        | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `personnel_department_id` | `String` (ULID) | References the department to which the person is assigned. See [personnel_departments](personnel-department).    | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `person_status`           | `String` (Enum) | Status of the person, such as `ACTIVE` or `INACTIVE`.                                                            | `ACTIVE`                            |
| `first_name`              | `String`        | First name of the individual.                                                                                    | `John`                              |
| `last_name`               | `String`        | Last name of the individual.                                                                                     | `Doe`                               |
| `initials`                | `String`        | Generated initials for the person based on their first and last names.                                           | `JD`                                |
| `username`                | `String`        | Unique username of the person, typically tied to the defined user source.                                        | `jdoe`                              |

## Field Details

### `personnel_department_id`

References the `PersonnelDepartment` entity that the person is assigned to. This allows organizing personnel based on
departmental structures.
See [personnel_departments](personnel-department) for details on departments.

### `person_status`

Indicates the current status of the person. This field uses the **Person_status** enum with the following values:

- **ACTIVE**: The person is actively working.
- **INACTIVE**: The person is not currently active.

### `initials`

Automatically generated initials for the person, derived from the first and last names. This can be used for easy
identification.

### `username`

Unique username associated with the person, ensuring identification within the system.

## Certifications

The `Person` entity can be associated with multiple certifications through a many-to-many relationship. This
relationship supports skill tracking and ensures that personnel meet the necessary qualifications for their roles.

See [personnel_certifications](personnel-certification) for details on certifications.
