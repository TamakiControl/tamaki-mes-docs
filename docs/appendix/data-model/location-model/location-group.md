---
sidebar_position: 2
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

| Column          | Type            | Description                                                                                                      | Example                             |
|-----------------|-----------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`            | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`       | `Boolean`       | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`  | `DateTime`      | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`    | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date` | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`   | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`         | `String`        | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`        | `String`        | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`        | `String`        | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`        | `String`        | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `name`          | `String`        | Name of the location group.                                                                                      | `Storage Areas`                     |
| `description`   | `String`        | Optional description providing details about the location group.                                                 | `Group of all storage locations.`   |

## Field Details

### `description`

An optional field for a more detailed description of the location group, which can provide additional context on its
purpose or the types of locations it includes.
