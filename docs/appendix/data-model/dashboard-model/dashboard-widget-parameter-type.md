---
sidebar_position: 5
title: "dashboard_widget_parameter_types"
description: "Documentation for the dashboard_widget_parameter_types table, outlining its columns and structure."
---

# Dashboard Widget Parameter Type

## Overview

Represents a type of parameter a widget can accept. Each type points to a Perspective view used to edit its value.

## Table Structure

The following table outlines the SQL columns for the `dashboard_widget_parameter_types` table, providing a brief
description of each, along with sample data where applicable.

| Column          | Type            | Description                                                                       | Example                        |
|-----------------|-----------------|-----------------------------------------------------------------------------------|--------------------------------|
| `id`            | `String` (ULID) | Unique identifier for the entity.                                                 | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`       | `Boolean`       | If the entity is enabled or not.                                                  | `true`                         |
| `created_date`  | `DateTime`      | Date the entity was created.                                                      | `2025-01-01T10:00:00Z`         |
| `created_by`    | `String`        | Person who created the entity.                                                    | `TamakiMES`                    |
| `modified_date` | `DateTime`      | Date the entity was modified. Value is null upon creation, and on first edit.     | `2025-01-02T12:00:00Z`         |
| `modified_by`   | `String`        | Last person to modify the entity. Value is null upon creation, and on first edit. | `TamakiMES`                    |
| `notes`         | `String`        | Notes about the entity.                                                           | `Used by dropdown editors`     |
| `spare1`        | `String`        | The first spare column for additional context.                                    | `extra context 1`              |
| `spare2`        | `String`        | The second spare column for additional context.                                   | `extra context 2`              |
| `spare3`        | `String`        | The third spare column for additional context.                                    | `extra context 3`              |
| `name`          | `String`        | Unique name of the parameter type.                                                | `Integer`                      |
| `view_path`     | `String`        | Perspective view path used to edit this type of parameter.                        | `Mes/Editors/Integer`          |

## Field Details

### `view_path`

Perspective View path used by the UI to edit parameter values of this type.

