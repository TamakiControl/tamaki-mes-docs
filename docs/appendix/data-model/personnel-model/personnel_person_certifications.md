---
sidebar_position: 5
title: "personnel_person_certifications"
description: "Documentation for the personnel_person_certifications table, outlining its columns and structure."
---

# Personnel Certifications

## Overview

The `PersonnelCertification` entity represents certifications held by personnel, ensuring that employees meet certain
qualifications or standards for their roles. This table is linked to individual personnel records, associating specific
certifications with individuals.

## Table Structure

The following table outlines the SQL columns for the `personnel_certifications` table, providing a brief description of
each, along with sample data where applicable.

| Column        | Type                | Description                                     | Example                                       |
|---------------|---------------------|-------------------------------------------------|-----------------------------------------------|
| `id`          | `String` (ULID)     | Unique identifier for the certification record. | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`                |
| `name`        | `String`            | Name of the certification. Must be unique.      | `First Aid Training`                          |
| `description` | `String` (max 2048) | Optional description of the certification.      | `Basic first aid certification covering CPR.` |

## Field Details

### `name`

The `name` field is required and unique for each certification. Examples include "Safety Training" or "Forklift
Operation." This allows certifications to be consistently referenced across personnel records.

### `description`

An optional field for providing additional details about the certification, such as the scope, level, or expiration
requirements.