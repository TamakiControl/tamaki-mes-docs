---
sidebar_position: 4
title: "personnel_departments"
description: "Documentation for the personnel_departments table, outlining its columns and structure."
---

# Personnel Department

## Overview

The `PersonnelDepartment` entity represents departments within an organization, providing a hierarchical structure for
organizing personnel. Each department can have a parent department, creating a flexible structure to accommodate
different organizational levels and reporting structures.

## Table Structure

The following table outlines the SQL columns for the `personnel_departments` table, providing a brief description of
each, along with sample data where applicable.

| Column          | Type              | Description                                                                    | Example                             |
|-----------------|-------------------|--------------------------------------------------------------------------------|-------------------------------------|
| `id`            | `String` (ULID)   | Unique identifier for the department.                                          | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`       | `Boolean`         | If the entity is enabled or not.                                               | `true`                              |
| `created_date`  | `DateTime`        | Date the entity was created.                                                   | `2024-12-31T19:48:44Z`              |
| `created_by`    | `String`          | Person who created the entity.                                                 | `TamakiMES`                         |
| `modified_date` | `DateTime`        | Date the entity was created.                                                   | `2024-12-31T19:48:44Z`              |
| `modified_by`   | `String`          | Last person to modify the entity.                                              | `TamakiMES`                         |
| `notes`         | `Blob`            | Notes about the entity.                                                        | `This entity has these extra notes` |
| `spare1`        | `String`          | The first spare column that can be used for additional context on the entity.  | `some extra context 1`              |
| `spare2`        | `String`          | The second spare column that can be used for additional context on the entity. | `some extra context 2`              |
| `spare3`        | `String`          | The third spare column that can be used for additional context on the entity.  | `some extra context 3`              |
| `parent_id`     | `String` (ULID)   | References the parent department, establishing a hierarchy.                    | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `name`          | `String`          | Name of the department. Required and unique within its parent department.      | `Engineering`                       |
| `description`   | `String`          | Detailed description of the department's role and responsibilities.            | `Handles engineering tasks`         |
| `path`          | `String` (unique) | Unique path for the department, generated based on the hierarchy.              | `/Corporate/Engineering`            |

## Field Details

### `parent_id`

References the parent `PersonnelDepartment`, allowing departments to be organized in a hierarchical structure.
This structure enables modeling departments from high-level divisions down to specialized units.

### `name`

The `name` field provides a descriptive identifier for the department, such as "Engineering" or "Finance." This field
must be unique within the scope of its parent department.

### `description`

An optional field that provides additional context for the department's function or scope. This can support clarity
around the department's responsibilities within the organization.

### `path`

The `path` is a unique identifier for the department, generated automatically based on the hierarchical structure. It
reflects the department's place within the organization, enabling easier navigation and reporting.

## Hierarchical Structure

The `PersonnelDepartment` supports a hierarchical structure, allowing for nested departments. The `computePath` method
generates a unique path for each department based on its name and hierarchy, providing an easy-to-read representation of
the department’s location within the organization.

For example, a path like `/Corporate/Engineering` indicates that "Engineering" is a sub-department under "Corporate."
