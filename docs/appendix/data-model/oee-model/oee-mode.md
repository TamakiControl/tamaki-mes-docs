---
sidebar_position: 5
title: "oee_modes"
description: "Documentation for the oee_modes table, outlining its columns and structure."
---

# OEE Mode

## Overview

The `OeeMode` entity represents a mode of operation for an OEE Configuration. Modes in OEE are used primarily to 
calculate TEEP (Total Effective Equipment Performance). These modes tell the system if the time period that a 
machine is in a given mode should be considered scheduled/unscheduled time that the machine is supposed to be running. 
The entity contains properties including OEE calculation type, expected duration for the mode, and location the mode 
belongs to.

## Table Structure

The following table outlines the SQL columns for the `oee_modes` table, providing a brief description of each.

| Column                         | Type            | Description                                                                                                      | Example                             |
|--------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                           | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                      | `Boolean`       | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`                 | `DateTime`      | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`                   | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date`                | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`                  | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`                        | `String`        | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`                       | `String`        | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`                       | `String`        | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`                       | `String`        | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `location_id`                  | `String` (ULID) | References the location for the property. See [Location](../location-model/location).                            | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `code`                         | `Integer`       | Integer code used to differentiate Oee Modes at a location.                                                      | `1`                                 |
| `name`                         | `String`        | Name of the OEE Mode.                                                                                            | `Production`                        |
| `calculation_type`             | `String` (Enum) | Determines how this mode should be used to calculate OEE.                                                        | `SCHEDULED_DOWNTIME`                |
| `expected_duration_source`     | `String` (Enum) | Source to calculate the expected duration of a scheduled downtime event.                                         | `STATIC`                            |
| `expected_duration_expression` | `String`        | Expression to calculate the expected duration of the mode in seconds.                                            | `{[provider]tag/value}`             |
| `expected_duration`            | `Double`        | Expected duration of the mode in seconds.                                                                        | `900.0`                             |
| `color`                        | `String`        | Hex color code for the mode.                                                                                     | `#FFC800`                           |

## Field Details

### `location_id`

References the location for the OEE Mode.
See [Location](../location-model/location) for details.

### `code`

Integer code used to differentiate Oee Modes at a location. 

### `name`

Name of the OEE Mode.

### `calculation_type`

Determines how this mode should be used to calculate OEE. Calculation types include `SCHEDULED_PRODUCTION`, 
`SCHEDULED_DOWNTIME`, and `UNSCHEDULED_DOWNTIME`.

### `expected_duration_source`

Source to calculate the expected duration of a scheduled downtime event. Sources include `STATIC` in which a static 
value is used and `EXPRESSION` where the value is derived from an Ignition expression.

### `expected_duration_expression`

Ignition expression to calculate the expected duration of the mode in seconds.

### `expected_duration`

Expected duration of the mode in seconds.

### `color`

Hex color code for the mode. 