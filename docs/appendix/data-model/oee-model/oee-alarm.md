---
sidebar_position: 7
title: "oee_alarm"
description: "Documentation for the oee_alarm table, outlining its columns and structure."
---

# OEE Alarm

## Overview

Represents the configuration for OEE alarms at a specific location, including tag path and minimum priority.

## Table Structure

| Column         | Type                | Description                                                                 | Example                       |
|----------------|---------------------|-----------------------------------------------------------------------------|-------------------------------|
| `id`           | `String` (ULID)     | Unique identifier for the entity.                                           | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`|
| `enabled`      | `Boolean`           | If the entity is enabled or not. Default is true.                           | `true`                        |
| `created_date` | `DateTime`          | Date the entity was created.                                                | `2025-12-09T19:48:44Z`        |
| `created_by`   | `String`            | Person who created the entity.                                              | `TamakiMES`                   |
| `modified_date`| `DateTime`          | Date the entity was last modified.                                          | `2025-12-09T19:48:44Z`        |
| `modified_by`  | `String`            | Last person to modify the entity.                                           | `TamakiMES`                   |
| `notes`        | `Blob`              | Notes about the entity.                                                     | `Alarm for line 1`            |
| `spare1`       | `String`            | The first spare column for additional context.                              | `extra context 1`             |
| `spare2`       | `String`            | The second spare column for additional context.                             | `extra context 2`             |
| `spare3`       | `String`            | The third spare column for additional context.                              | `extra context 3`             |
| `location_id`  | `String` (ULID)     | Foreign key to the location entity.                                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`|
| `tag_path`     | `String`            | Qualified path to monitor for alarms.                                       | `provider/path/to/tag`        |
| `min_priority` | `String` (Enum)     | Minimum alarm priority to include in events.                                | `Diagnostic`                  |

## Field Details

- **id**: Unique identifier for the alarm record (ULID format).
- **enabled**: Indicates if the alarm configuration is active.
- **created_date**: Timestamp when the record was created.
- **created_by**: User or system that created the record.
- **modified_date**: Timestamp of the last modification.
- **modified_by**: User or system that last modified the record.
- **notes**: Free-form notes about the alarm configuration.
- **spare1/2/3**: Optional fields for custom extensions or metadata.
- **location_id**: Reference to the location for this alarm configuration.
- **tag_path**: Path to the tag or folder to monitor for alarms.
- **min_priority**: Minimum alarm priority (e.g., Diagnostic, Low, Medium, High, Critical).

