---
sidebar_position: 4
title: "personnel_shifts"
description: "Documentation for the personnel_shifts table, outlining its columns and structure."
---

# Personnel Shift

## Overview

The `PersonnelShift` entity represents specific work shifts assigned to personnel within the organization. Each shift
has a name, description, associated schedule, and a location where the shift is primarily based. This allows for
organizing personnel activities by time and place.

## Table Structure

The following table outlines the SQL columns for the `personnel_shifts` table, providing a brief description of each,
along with sample data where applicable.

| Column             | Type            | Description                                                                                           | Example                        |
|--------------------|-----------------|-------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`               | `String` (ULID) | Unique identifier for the shift.                                                                      | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `name`             | `String`        | Name of the shift. Must be unique.                                                                    | `Night Shift`                  |
| `description`      | `String`        | Optional description of the shift.                                                                    | `Shift covering night hours.`  |
| `ignitionSchedule` | `String`        | Name of the schedule in Ignition's scheduling system.                                                 | `Night_Schedule`               |
| `location_id`      | `String` (ULID) | References the location where the shift takes place. See [locations](../location-model/locations.md). | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |

## Field Details

### `name`

The `name` field provides a unique identifier for the shift, such as "Night Shift" or "Weekend Shift." This name must be
unique within the table, allowing each shift to be easily identified.

### `description`

An optional field to add additional details about the shift, including hours, special requirements, or coverage areas.

### `ignitionSchedule`

Specifies the name of the corresponding schedule in Ignition's scheduling system, allowing for integration with
automated systems or tagging within Ignition.

### `location_id`

References the `Location` entity where the shift is based, supporting geographical organization of shifts within the
facility.
See [locations](../location-model/locations.md) for details on `Location`.