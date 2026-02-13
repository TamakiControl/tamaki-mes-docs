---
sidebar_position: 2
title: "oee_alarm_records"
description: "Documentation for the oee_alarm_record table, outlining its columns and structure."
---

# OEE Alarm Record

## Overview

The `OeeAlarmRecord` entity represents a historical record of an alarm event within the OEE system. Each object captures
the state and metadata of Ignition alarms for OEE analysis and reporting. The entity contains several parameters
such as the [Location](../location-model/location) and [Oee State Record](../oee-model/oee-state-record.md) 
corresponding to the alarm record, the Ignition source that produced the alarm, and the time the alarm was active.

## Table Structure

The following table outlines the SQL columns for the `oee_alarm_records` table, providing a brief description of each.

| Column                          | Type            | Description                                                                                                      | Example                             |
|---------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                            | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                       | `Boolean`       | If the entity is enabled or not. Default is true.                                                                | `true`                              |
| `created_date`                  | `DateTime`      | Date the entity was created.                                                                                     | `2025-12-09T19:48:44Z`              |
| `created_by`                    | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date`                 | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2025-12-09T19:48:44Z`              |
| `modified_by`                   | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`                         | `String`        | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`                        | `String`        | The first spare column that can be used for additional context on the entity.                                    | `extra context 1`                   |
| `spare2`                        | `String`        | The second spare column that can be used for additional context on the entity.                                   | `extra context 2`                   |
| `spare3`                        | `String`        | The third spare column that can be used for additional context on the entity.                                    | `extra context 3`                   |
| `location_id`                   | `String` (ULID) | References the location where the alarm record was recorded. See [Location](../location-model/location).         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `oee_state_record_id`           | `String` (ULID) | References the OEE state record for the property. See [Oee State Record](../oee-model/oee-state-record.md).      | `02K4M9QX7A-LR8ZV2WD-PF6C1H9B`      |
| `name`                          | `String`        | The alarm name as configured in Ignition.                                                                        | `Alarm`                             |
| `ignition_alarm_id`             | `String` (ULID) | References the ignition alarm corresponding to the record.                                                       | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `source`                        | `String`        | The tag path or source that generated this alarm.                                                                | `provider/tag/alarm`                |
| `priority`                      | `String` (Enum) | The configured priority level of the alarm.                                                                      | `Low`                               |
| `display_path`                  | `String`        | The hierarchical display path of the alarm in the tag structure.                                                 | `Filler On Hold: Over Torque`       |
| `label`                         | `String`        | The human-readable display name for the alarm.                                                                   | `Alarm`                             |
| `active_date`                   | `DateTime`      | Indicates when the alarm condition became active.                                                                | `2025-12-09T19:48:44Z`              |
| `cleared_date`                  | `DateTime`      | Indicates when the alarm condition cleared.                                                                      | `2025-12-09T20:48:44Z`              |
| `acknowledged_date`             | `DateTime`      | Indicates when the alarm was acknowledged by an operator.                                                        | `2025-12-09T20:50:44Z`              |
| `shelved_date`                  | `DateTime`      | Indicates when the alarm was temporarily suppressed.                                                             | `2025-12-09T20:50:44Z`              |
| `state`                         | `String` (Enum) | The current state of the alarm in Ignition's state machine.                                                      | `ClearAcked`                        |
| `lastEventState`                | `String` (Enum) | The most recent state transition that occurred for this alarm.                                                   | `Clear`                             |
| `downtime_reason_code_override` | `Integer`       | Optional downtime reason code override value.                                                                    | `1003`                              |
| `state_code_override`           | `Integer`       | Optional state code override value.                                                                              | `1`                                 |

## Field Details

### `location_id`

References the location where the alarm record was recorded.
See [Location](../location-model/location) for details.

### `oee_state_record_id`

References the OEE state record active at the location at the time the alarm record was recorded.
See [Oee State Record](../oee-model/oee-state-record.md) for details.

### `name`

The alarm name as configured in Ignition. The name must be less than 255 characters.

### `ignition_alarm_id`

References the ignition alarm corresponding to the record.

### `source`

The tag path or source that generated this alarm. Should be in the form `provider/tag/alarm`.

### `priority`

The configured priority level of the alarm. Alarm priorities from lowest to highest are `Diagnostic`, `Low`, `Medium`, 
`High`, and `Critical`.

### `display_path`

The hierarchical display path of the alarm in the tag structure.

### `label`

The human-readable display name for the alarm.

### `active_date`

Indicates the date and time when the alarm condition became active.

### `cleared_date`

Indicates the date and time when the alarm condition cleared.

### `acknowledged_date`

Indicates the date and time the alarm was acknowledged by an operator, if it has been.

### `shelved_date`

Indicates the date and time the alarm was temporarily suspended, if it has been.

### `state`

The current state of the alarm in Ignition's state machine.

### `lastEventState`

The most recent state transition that occurred for this alarm.

### `downtime_reason_code_override`

The optional downtime reason code override value.

### `state_code_override`

The optional state code override value. When set, alarms from this configuration will use the value from that associated data
property instead of deriving the state code from the alarm data.