---
sidebar_position: 1
title: "material_classes"
description: "Documentation for the material_classes table, outlining its columns and structure."
---

# Material Class

## Overview

The `MaterialClass` entity represents categories or classifications of materials, allowing hierarchical grouping and
organization. This structure is useful for grouping similar materials under a common class, such as "Raw Material" or "
Packaging," and it enables properties or attributes to be shared across materials within the same class.

## Table Structure

The following table outlines the SQL columns for the `material_classes` table, providing a brief description of each,
along with sample data where applicable.

| Column          | Type                | Description                                                                                                             | Example                         |
|-----------------|---------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| `id`            | `String` (ULID)     | Unique identifier for the entity.                                                                                       | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`  |
| `enabled`       | `Boolean`           | If the entity is enabled or not.                                                                                        | `true`                          |
| `created_date`  | `DateTime`          | Date the entity was created.                                                                                            | `2024-12-31T19:48:44Z`          |
| `created_by`    | `String`            | Person who created the entity.                                                                                          | `TamakiMES`                     |
| `modified_date` | `DateTime`          | Date the entity was created.                                                                                            | `2024-12-31T19:48:44Z`          |
| `modified_by`   | `String`            | Last person to modify the entity.                                                                                       | `TamakiMES`                     |
| `notes`         | `Blob`              | Notes about the entity.                                                                                                 | `This entity has these extra notes`  |
| `spare1`        | `String`            | The first spare column that can be used for additional context on the entity.                                           | `some extra context 1`          |
| `spare2`        | `String`            | The second spare column that can be used for additional context on the entity.                                          | `some extra context 2`          |
| `spare3`        | `String`            | The third spare column that can be used for additional context on the entity.                                           | `some extra context 3`          |
| `parent_id`     | `String` (ULID)     | References the parent material class, creating a hierarchical structure. See [material_classes](./material-class).      | `01JAP8R5RT-3FPXQABY-7KQZT6VF`  |
| `name`          | `String`            | Name of the material class. Required for each class and unique within the parent class.                                 | `Raw Material`                  |
| `description`   | `String` (max 2048) | Optional description providing more details about the material class.                                                   | `Base materials for production` |
| `path`          | `String` (unique)   | Unique path for the material class, automatically generated based on the hierarchy.                                     | `/Materials/Raw Materials`      |

## Field Details

### `parent_id`

References the `MaterialClass` entity that serves as this class's parent, allowing for hierarchical grouping of classes.
See [material_classes](./material-class) for details on the parent `MaterialClass`.

### `name`

The `name` field provides a descriptive identifier for the material class, such as "Raw Material" or "Packaging." This
name must be unique within its parent class.

### `description`

An optional field that allows for a longer description of the material class, with a character limit of 2048. This can
include additional context or details about the types of materials grouped under this class.

### `path`

The `path` is a unique identifier that represents the hierarchical location of the material class within the overall
classification structure. This path is automatically computed based on the name and parent hierarchy, providing easy
navigation and traceability.