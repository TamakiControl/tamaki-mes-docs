---
sidebar_position: 1
title: "equipment_classes"
description: "Documentation for the equipment_classes table, outlining its columns and structure."
---

# Equipment Class

## Overview

The `EquipmentClass` entity represents a category of equipment, such as a "Forklift" or "Saw." This entity groups
equipment items for scheduling and reporting purposes. For example, a packaging line may require a forklift, and a
factory might own multiple forklifts.

## Table Structure

The following table outlines the SQL columns for the `equipment_classes` table, providing a brief description of each,
along with sample data where applicable.

| Column          | Type                | Description                                                                     | Example                              |
|-----------------|---------------------|---------------------------------------------------------------------------------|--------------------------------------|
| `id`            | `String` (ULID)     | Unique identifier for the entity.                                               | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `enabled`       | `Boolean`           | If the entity is enabled or not.                                                | `true`                               |
| `created_date`  | `DateTime`          | Date the entity was created.                                                    | `2024-12-31T19:48:44Z`               |
| `created_by`    | `String`            | Person who created the entity.                                                  | `TamakiMES`                          |
| `modified_date` | `DateTime`          | Date the entity was created.                                                    | `2024-12-31T19:48:44Z`               |
| `modified_by`   | `String`            | Last person to modify the entity.                                               | `TamakiMES`                          |
| `notes`         | `Blob`              | Notes about the entity.                                                         | `This entity has these extra notes`  |
| `spare1`        | `String`            | The first spare column that can be used for additional context on the entity.   | `some extra context 1`               |
| `spare2`        | `String`            | The second spare column that can be used for additional context on the entity.  | `some extra context 2`               |
| `spare3`        | `String`            | The third spare column that can be used for additional context on the entity.   | `some extra context 3`               |
| `parent_id`     | `String` (ULID)     | References the parent equipment class, allowing hierarchy.                      | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |
| `name`          | `String`            | Name of the equipment class, required and unique within the parent.             | `Forklift`                           |
| `description`   | `String` (max 2048) | Detailed description of the equipment class.                                    | `A heavy-duty lifting vehicle`       |
| `path`          | `String` (unique)   | Unique path generated based on the name and parent hierarchy.                   | `/Warehouse/Forklift`                |

## Field Details

### `parent_id`

References the parent `EquipmentClass` by ID, allowing a hierarchical structure among equipment classes. This hierarchy
enables grouping related classes under broader categories.

### `name`

The `name` field is mandatory and provides the primary identifier for the equipment class. Each name must be unique
within the context of its parent class to ensure clear identification.

### `description`

An optional field that allows a longer description of the equipment class, with a character limit of 2048. This field
can be used to provide additional context about the type of equipment represented by the class.

### `path`

The unique `path` of the equipment class is automatically generated from the name and parent hierarchy. This field is
updated whenever the entity is created or modified, ensuring a consistent representation of the hierarchy across all
records.