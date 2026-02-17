---
sidebar_position: 8
title: "oee_states"
description: "Documentation for the oee_states table, outlining its columns and structure."
---

# OEE State

## Overview

The `OeeState` entity represents a configuration for a machine state for use in OEE calculations. Each OEE State has a 
calculation type corresponding to a machine state (e.g RUNNING, STARVED, BLOCKED, etc) which affects how the state is 
incorporated in OEE calculations. The entity also contains properties such as configuration parent location, a unique 
integer code, and an auto acknowledge flag.

## Table Structure

The following table outlines the SQL columns for the `oee_states` table, providing a brief description of each.

| Column                         | Type            | Description                                                                                                                 | Example                             |
|--------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                           | `String` (ULID) | Unique identifier for the entity.                                                                                           | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                      | `Boolean`       | If the entity is enabled or not.                                                                                            | `true`                              |
| `created_date`                 | `DateTime`      | Date the entity was created.                                                                                                | `2024-12-31T19:48:44Z`              |
| `created_by`                   | `String`        | Person who created the entity.                                                                                              | `TamakiMES`                         |
| `modified_date`                | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                | `2024-12-31T19:48:44Z`              |
| `modified_by`                  | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.            | `TamakiMES`                         |
| `notes`                        | `String`        | Notes about the entity.                                                                                                     | `This entity has these extra notes` |
| `spare1`                       | `String`        | The first spare column that can be used for additional context on the entity.                                               | `some extra context 1`              |
| `spare2`                       | `String`        | The second spare column that can be used for additional context on the entity.                                              | `some extra context 2`              |
| `spare3`                       | `String`        | The third spare column that can be used for additional context on the entity.                                               | `some extra context 3`              |
| `location_id`                  | `String` (ULID) | References the configuration parent location. See [Location](../location-model/location).                                   | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `code`                         | `Integer`       | Integer code for the Oee State.                                                                                             | `1`                                 |
| `name`                         | `String`        | Name of the OEE state.                                                                                                      | `Idle`                              |
| `calculation_type`             | `String` (Enum) | Determines how the state is used to calculate OEE.                                                                          | `RUNNING`                           |
| `color`                        | `String`        | JSON/CSS style document for the state.                                                                                      | `#a0c741`                           |
| `auto_acknowledge`             | `Boolean`       | Whether to automatically acknowledge the state record when it is created.                                                   | `true`                              |
| `interruption_location_id`     | `String` (ULID) | Represents the interruption location for the property. See [Location](../location-model/location).                          | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `max_root_cause_delay_seconds` | `Integer`       | Maximum delay in seconds for looking back at historical state records when resolving root cause for BLOCKED/STARVED states. | `5`                                 |

## Field Details

### `location_id`

References the configuration for the parent location.
See [Location](../location-model/location) for details.

### `code`

Integer code for the Oee State. Each code must be unique for a given configuration.

### `name`

Name of the OEE state.

### `calculation_type`

Determines how the state is used to calculate OEE. Calculation types include `IDLE`,
`RUNNING`, `DOWNTIME`, `STARVED`, and `BLOCKED`.

### `color`

JSON/CSS style document for the state.

### `auto_acknowledge`

Whether to automatically acknowledge the state record when it is created.

### `interruption_location_id`

Immediate interruption location that caused a blocked/starved state. This will differ from the configured state 
location, because this will follow the line upstream/downstream to the actual location that caused the interruption.
See [Location](../location-model/location) for details.

### `max_root_cause_delay_seconds`

Maximum delay in seconds for looking back at historical state records when resolving root cause for BLOCKED/STARVED 
states. Only applicable when `calculation_type` is `STARVED` or `BLOCKED`.
