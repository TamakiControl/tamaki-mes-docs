---
sidebar_position: 1
title: "oee_alarms"
description: "Documentation for the oee_alarm table, outlining its columns and structure."
---

# OEE Alarm

## Overview

The `OeeAlarm` entity defines the configuration for OEE alarms at a specific location (See [Location](../location-model/location)).
The entity contains several parameters that control how alarms are processed including the Ignition tag that triggers
the alarms, the minimum alarm priority to include in events, and a filter label to determine what alarms to include.

## Table Structure

The following table outlines the SQL columns for the `oee_alarms` table, providing a brief description of each.

| Column                          | Type            | Description                                                                                                      | Example                         |
|---------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|---------------------------------|
| `id`                            | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`  |
| `enabled`                       | `Boolean`       | If the entity is enabled or not. Default is true.                                                                | `true`                          |
| `created_date`                  | `DateTime`      | Date the entity was created.                                                                                     | `2025-12-09T19:48:44Z`          |
| `created_by`                    | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                     |
| `modified_date`                 | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2025-12-09T19:48:44Z`          |
| `modified_by`                   | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                     |
| `notes`                         | `String`        | Notes about the entity.                                                                                          | `Alarm for line 1`              |
| `spare1`                        | `String`        | The first spare column that can be used for additional context on the entity.                                    | `extra context 1`               |
| `spare2`                        | `String`        | The second spare column that can be used for additional context on the entity.                                   | `extra context 2`               |
| `spare3`                        | `String`        | The third spare column that can be used for additional context on the entity.                                    | `extra context 3`               |
| `location_id`                   | `String` (ULID) | References the location for the alarm configuration. See [Location](../location-model/location).                 | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`  |
| `tag_path`                      | `String`        | Qualified path to monitor for alarms.                                                                            | `provider/path/to/tag`          |
| `min_priority`                  | `String` (Enum) | Minimum alarm priority to include in events.                                                                     | `Diagnostic`                    |
| `label_filter`                  | `String`        | Optional filter to apply to alarm labels. Only alarms with labels matching this filter will be included.         | `Filler Fault`                  |
| `downtime_reason_code_override` | `String`        | Name of the associated data property in Ignition alarms that contains the downtime reason code override value.   | `MesDowntimeReasonCodeOverride` |
| `state_code_override`           | `String`        | Name of the associated data property in Ignition alarms that contains the state code override value.             | `MesStateOverride`              |

## Field Details

### `location_id`

References the location that the alarm configuration corresponds to. 
See [Location](../location-model/location) for details.

### `tag_path`

The qualified tag path in Ignition to monitor for alarms. This should be in the format `provider/path/to/tag` or 
`tag/path/to/folder`.

### `min_priority`

Minimum alarm priority to include in events. Only alarms with this priority or higher will be published. 
Alarm priorities from lowest to highest are `Diagnostic`, `Low`, `Medium`, `High`, and `Critical`. 

### `label_filter`

Optional filter to apply to alarm labels. Only alarms with labels matching this filter will be included.

### `downtime_reason_code_override`

Name of the associated data property in Ignition alarms that contains the downtime reason code override value.
This field stores the property name (key), not the actual integer code value. At runtime, the actual downtime reason 
code override is retrieved from the alarm event's associated data using this property name.

### `state_code_override`

Optional state code override property name. Name of the associated data property in Ignition alarms that contains the 
state code override value. When set, alarms from this configuration will use the value from that associated data 
property instead of deriving the state code from the alarm data.


