---
sidebar_position: 3
title: "location_groups"
description: "Documentation for the location_groups table, outlining its columns and structure."
---

# Location Group

## Overview

The `LocationGroup` entity represents a grouping of locations within the manufacturing environment, allowing for
organization and categorization of locations based on shared characteristics or purposes. For example, a location group
could represent a collection of storage areas or production cells.

## Table Structure

The following table outlines the SQL columns for the `location_groups` table, providing a brief description of each,
along with sample data where applicable.

| Column          | Type            | Description                                                                                          | Example                           |
|-----------------|-----------------|------------------------------------------------------------------------------------------------------|-----------------------------------|
| `id`            | `String` (ULID) | Unique identifier for the entity.                                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`    |
| `enabled`       | `Boolean`       | If the entity is enabled or not.                                                                     | `true`                            |
| `created-date`  | `DateTime`      | Date the entity was created.                                                                         | `2024-12-31T19:48:44Z`            |
| `created-by`    | `String`        | Person who created the entity.                                                                       | `TamakiMES`                       |
| `modified-date` | `DateTime`      | Date the entity was created.                                                                         | `2024-12-31T19:48:44Z`            |
| `modified-by`   | `String`        | Last person to modify the entity.                                                                    | `TamakiMES`                       |
| `notes`         | `LongText`      | Notes about the entity.                                                                              | `This entity has these extra notes`  |
| `spare1`        | `String`        | The first spare column that can be used for additional context on the entity.                        | `some extra context 1`            |
| `spare2`        | `String`        | The second spare column that can be used for additional context on the entity.                       | `some extra context 2`            |
| `spare3`        | `String`        | The third spare column that can be used for additional context on the entity.                        | `some extra context 3`            |
| `name`          | `String`        | Name of the location group.                                                                          | `Storage Areas`                   |
| `description`   | `String`        | Optional description providing details about the location group.                                     | `Group of all storage locations.` |

## Field Details

### `name`

The `name` field provides a unique identifier for the location group, used to distinguish it from other groups.

### `description`

An optional field for a more detailed description of the location group, which can provide additional context on its
purpose or the types of locations it includes.

### Locations

The `LocationGroup` entity is linked to multiple `Location` entities through a many-to-many relationship. This
association is managed through a join table, `location_location_groups`, which contains the following columns:

| Column              | Type            | Description                                                                     |
|---------------------|-----------------|---------------------------------------------------------------------------------|
| `location_group_id` | `String` (ULID) | References the `LocationGroup` this entry belongs to.                           |
| `location_id`       | `String` (ULID) | References the specific `Location` in the group. See [locations](location). |

The many-to-many relationship allows each `LocationGroup` to contain multiple `Location` entities, and each `Location`
can belong to multiple `LocationGroups`. This structure supports flexible grouping and categorization within the system.