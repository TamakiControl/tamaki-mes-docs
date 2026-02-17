---
sidebar_position: 9
title: "oee_state_records"
description: "Documentation for the oee_state_records table, outlining its columns and structure."
---

# OEE State Record

## Overview

The `OeeStateRecord` entity represents a recording of an OEE state event. The entity contains several properties 
including the start and end date time for the record, status of the machine during the record, a list of OEE records 
associated with the state record, and if the record has been acknowledged and if so when and by whom. 

## Table Structure

The following table outlines the SQL columns for the `oee_state_records` table, providing a brief description of each.

| Column                       | Type             | Description                                                                                                                  | Example                             |
|------------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                         | `String` (ULID)  | Unique identifier for the entity.                                                                                            | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                    | `Boolean`        | If the entity is enabled or not.                                                                                             | `true`                              |
| `created_date`               | `DateTime`       | Date the entity was created.                                                                                                 | `2024-12-31T19:48:44Z`              |
| `created_by`                 | `String`         | Person who created the entity.                                                                                               | `TamakiMES`                         |
| `modified_date`              | `DateTime`       | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                 | `2024-12-31T19:48:44Z`              |
| `modified_by`                | `String`         | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.             | `TamakiMES`                         |
| `notes`                      | `String`         | Notes about the entity.                                                                                                      | `This entity has these extra notes` |
| `spare1`                     | `String`         | The first spare column that can be used for additional context on the entity.                                                | `some extra context 1`              |
| `spare2`                     | `String`         | The second spare column that can be used for additional context on the entity.                                               | `some extra context 2`              |
| `spare3`                     | `String`         | The third spare column that can be used for additional context on the entity.                                                | `some extra context 3`              |
| `location_id`                | `String` (ULID)  | References the location of the state record. See [Location](../location-model/location).                                     | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `code`                       | `Integer`        | Integer state number.                                                                                                        | `1`                                 |
| `name`                       | `Integer`        | Name of the OEE state.                                                                                                       | `Idle`                              |
| `calculation_type`           | `String` (Enum)  | Determines how the state is used to calculate OEE.                                                                           | `RUNNING`                           |
| `interruption_location_id`   | `String` (ULID)  | Represents the interruption location for the property. See [Location](../location-model/location).                           | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `color`                      | `String`         | JSON/CSS style document for the state.                                                                                       | `#a0c741`                           |
| `status`                     | `String` (Enum)  | Status of the OEE record.                                                                                                    | `IDLE`                              |
| `start_date`                 | `DateTime`       | Start date/time of the state record.                                                                                         | `2025-12-09T19:48:44Z`              |
| `end_date`                   | `DateTime`       | End date/time of the state record.                                                                                           | `2025-12-09T20:48:44Z`              |
| `duration`                   | `Double`         | Duration in seconds of the state record.                                                                                     | `37.056`                            |
| `downtime_reason_id`         | `String` (ULID)  | Represents the associated downtime reason for the state record. See [Oee Downtime Reason](../oee-model/oee-downtime-reason). | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `acknowledged`               | `Boolean`        | Boolean indicating whether the state record has been acknowledged.                                                           | `false`                             |
| `acknowledgedBy`             | `String`         | The user who acknowledged the state record.                                                                                  | `johnD@company.com`                 |
| `acknowledgedDate`           | `DateTime`       | The date when the state record was acknowledged.                                                                             | `2025-12-09T20:48:44Z`              |
| `mode_record_id`             | `String` (ULID)  | Represents the current mode of the machine for the state record. See [Oee Mode Record](../oee-model/oee-mode-record).        | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `root_cause_state_record_id` | `String` (ULID)  | Represents the root cause state record for blocked/starved states.                                                           | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `oee_records`                | `Set<OeeRecord>` | List of OEE Records associated with this state record. See [OEE Record](../oee-model/oee-record).                            | `[record1, record2, record3]`       |
| `primary_alarm_id`           | `String` (ULID)  | Primary alarm ID. Can be used to fetch the actual alarm record when needed.                                                  | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |

## Field Details

### `location_id`

References the location of the state record.
See [Location](../location-model/location) for details.

### `code`

Integer state number. Each code must be unique for a given configuration.

### `name`

Name of the OEE state.

### `calculation_type`

Determines how the state is used to calculate OEE. Calculation types include `IDLE`,
`RUNNING`, `DOWNTIME`, `STARVED`, and `BLOCKED`.

### `interruption_location_id`

Location that caused a blocked/starved state on the machine. This will differ from the configured state
location, because this will follow the line upstream/downstream to the actual location that caused the interruption.
See [Location](../location-model/location) for details.

### `color`

JSON/CSS style document for the state.

### `status`

Status of the OEE record. Status types include `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and 
`PAUSED`.

### `start_date`

Start date/time of the state record.

### `end_date`

End date/time of the state record.

### `duration`

Duration in seconds of the state record.

### `downtime-reason-id`

Represents the associated downtime reason for the state record.
See [Oee Downtime Reason](../oee-model/oee-downtime-reason) for details.

### `acknowledged`

Boolean indicating whether the state record has been acknowledged.

### `acknowledgedBy`

The user who acknowledged the state record. Will be null if the record hasn't been acknowledged.

### `acknowledgedDate`

The date when the state record was acknowledged. Will be null if the record hasn't been acknowledged.

### `mode_record_id`

Represents the current mode of the machine for the state record.
See [Oee Mode Record](../oee-model/oee-mode-record) for details.

### `root_cause_state_record_id`

Represents the root cause state record for blocked/starved states. Can also be the first half of a downtime state that 
was later split into multiple states.
References another `OeeStateRecord` entity.

### `oee_records`

List of OEE Records associated with this state record.
See [OEE Record](../oee-model/oee-record) for details.

### `primary_alarm_id`

Primary alarm ID (denormalized - stored as string, not FK). This avoids circular FK dependencies and deadlocks during 
concurrent state cutovers. Can be used to fetch the actual alarm record when needed.

