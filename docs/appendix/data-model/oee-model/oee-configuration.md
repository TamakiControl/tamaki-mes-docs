---
sidebar_position: 3
title: "oee_configurations"
description: "Documentation for the oee_configuration table, outlining its columns and structure."
---

# OEE Configuration

## Overview

The `OeeAlarmRecord` entity represents a historical record of an alarm event within the OEE system. Each object captures
the state and metadata of Ignition alarms for OEE analysis and reporting. The entity contains several parameters
such as the [Location](../location-model/location) and [Oee State Record](../oee-model/oee-state-record.md)
corresponding to the alarm record, the Ignition source that produced the alarm, and the time the alarm was active.

## Table Structure

The following table outlines the SQL columns for the `oee_configurations` table, providing a brief description of each.

| Column                              | Type            | Description                                                                                                                                           | Example                             |
|-------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                                | `String` (ULID) | Unique identifier for the entity.                                                                                                                     | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                           | `Boolean`       | If the entity is enabled or not. Default is true.                                                                                                     | `true`                              |
| `created_date`                      | `DateTime`      | Date the entity was created.                                                                                                                          | `2025-12-09T19:48:44Z`              |
| `created_by`                        | `String`        | Person who created the entity.                                                                                                                        | `TamakiMES`                         |
| `modified_date`                     | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                          | `2025-12-09T19:48:44Z`              |
| `modified_by`                       | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                      | `TamakiMES`                         |
| `notes`                             | `String`        | Notes about the entity.                                                                                                                               | `This entity has these extra notes` |
| `spare1`                            | `String`        | The first spare column that can be used for additional context on the entity.                                                                         | `extra context 1`                   |
| `spare2`                            | `String`        | The second spare column that can be used for additional context on the entity.                                                                        | `extra context 2`                   |
| `spare3`                            | `String`        | The third spare column that can be used for additional context on the entity.                                                                         | `extra context 3`                   |
| `location_id`                       | `String` (ULID) | References the location for the OEE configuration. See [Location](../location-model/location).                                                        | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `max_record_duration`               | `Integer`       | Maximum record duration in seconds. How often should records be taken.                                                                                | `300`                               |
| `max_time_between_executions`       | `Integer`       | Maximum number of seconds between executions.                                                                                                         | `5`                                 |
| `max_flush_interval`                | `Integer`       | Seconds between flush operations to the database. Null means no maximum.                                                                              | `30`                                |
| `prune_days`                        | `Integer`       | Number of days to keep records. If null, records will be kept indefinitely.                                                                           | `10`                                |
| `mode_expression`                   | `String`        | OEE Mode Expression. The result of this expression should be an integer that corresponds to the mode number.                                          | `{[provider]/tag/value}`            |
| `enable_availability`               | `Boolean`       | Enable OEE Availability Calculations for the configuration location.                                                                                  | `true`                              |
| `state_expression`                  | `String`        | Igntion expression for Machine Status integer.                                                                                                        | `{[provider]/tag/value}`            |
| `downtime_reason_source`            | `String` (Enum) | Determines how the system resolves what downtime reason code to use.                                                                                  | `EARLIEST`                          |
| `downtime_reason_expression`        | `String`        | Ignition expression that returns an integer "code" that corresponds to a downtime reason.                                                             | `{[provider]/tag/value}`            |
| `hold_first_non_running_state`      | `Boolean`       | When true, the system will not allow cutover between two non-running states. When false, the system will allow cutover between any state changes.     | `true`                              |
| `primary_alarm_resolution_strategy` | `String` (Enum) | Primary Alarm Resolution Strategy for this OEE Configuration.                                                                                         | `EARLIEST`                          |
| `primary_alarm_maximum_delay`       | `Integer`       | Maximum delay in seconds for primary alarm resolution.                                                                                                | `5`                                 |
| `enable_performance`                | `Boolean`       | Enables Performance Calculations for Unit.                                                                                                            | `true`                              |
| `unit_of_measure_id`                | `String` (ULID) | References the unit of measure for machine production/quality counts. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure). | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `production_count_expression`       | `String`        | Expression for Machine Production Count.                                                                                                              | `{[provider]/tag/value}`            |
| `production_count_calc_type`        | `String` (Enum) | Calculation type for Production Count.                                                                                                                | `DELTA`                             |
| `production_count_overflow_value`   | `Double`        | Overflow value for Production Count. Only used in DELTA count calculation type.                                                                       | `0.0`                               |
| `standard_rate_source`              | `String` (Enum) | Source for Standard Rate.                                                                                                                             | `STATIC`                            |
| `standard_rate`                     | `Double`        | Standard Rate for this Unit.                                                                                                                          | `100.0`                             |
| `standard_rate_expression`          | `String`        | Expression to provide the standard rate for this machine.                                                                                             | `{[provider]/tag/value}`            |

## Field Details

### `location_id`

References the location for the OEE configuration.
See [Location](../location-model/location) for details.

### `max_record_duration`

Maximum record duration in seconds. Controls how often records should be taken. 
The max record duration must be more than greater than or equal to 30 seconds.

### `max_time_between_executions`

Maximum number of seconds between executions. Max time between executions must be greater than or equal to 1 second.

### `max_flush_interval`

Seconds between flush operations to the database. Null means no maximum.
Max flush interval must be greater than or equal to 10 seconds.

### `prune_days`

Number of days to keep records. If null, records will be kept indefinitely.
Prune days must be greater than 0.

### `mode_expression`

OEE Mode Expression. The result of this expression should be an integer that corresponds to the mode number.
See [OEE Mode](../oee-model/oee-mode.md) for details.

### `enable_availability`

Enable OEE Availability Calculations for the configuration location.

### `state_expression`

Ignition expression for Machine Status integer. Generally, 0=Off, 1=Run, 10=Paused etc.

### `downtime_reason_source`

Determines how the system resolves what downtime reason code to use. Sources include `MANUAL` where the user manually 
selects the downtime reason and `EXPRESSION` where the downtime reason is determined through an Ignition expression.
See [OEE Downtime Reason](../oee-model/oee-downtime-reason.md) for details.

### `downtime_reason_expression`

Ignition expression that returns an integer "code" that corresponds to a downtime reason.
See [OEE Downtime Reason](../oee-model/oee-downtime-reason.md) for details.

### `hold_first_non_running_state`

When true, the system will not allow cutover between two non-running states. When false, the system will allow cutover 
between any state changes, including non-running to non-running. Default is true to maintain backward compatibility.

### `primary_alarm_resolution_strategy`

Primary Alarm Resolution Strategy for this OEE Configuration.

### `primary_alarm_maximum_delay`

Maximum delay in seconds for primary alarm resolution. When set, only alarms that occur within this many seconds of the 
state change will be considered for primary alarm selection. A value of 0 means only alarms active at or before the 
state change are considered. Values > 0 allow alarms that become active up to that many seconds after the state change 
(useful for handling race conditions).

### `enable_performance`

Enables Performance Calculations for Unit.

### `unit_of_measure_id`

References the unit of measure for machine production/quality counts.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure).

### `production_count_expression`

Ignition expression for Machine Production Count.

### `production_count_calc_type`

Calculation type for Production Count. Types include `DIRECT` and `DELTA`.

### `production_count_overflow_value`

Overflow value for Production Count. Only used in DELTA count calculation type. When the count overflows, this value 
will be added to the count. For example, if the machine will constantly reset the count at 1000 units, and we see 999 
one scan, and 4 on the next scan, we'll assume 5 additional units.

### `standard_rate_source`

Source for Standard Rate. Sources include `STATIC` in which a static value set in configuration is used and `EXPRESSION`
in which an expression that will return the quantity expected per second is used.

### `standard_rate`

Standard Rate for this Unit.

### `standard_rate_expression`

Expression to provide the standard rate for this machine.