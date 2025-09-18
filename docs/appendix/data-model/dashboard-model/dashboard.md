---
sidebar_position: 2
title: "dashboards"
description: "Documentation for the dashboards table, outlining its columns and structure."
---

# Dashboard

## Overview

Represents a saved dashboard configuration, including layout mode, grid settings, and the serialized instances
definition used by the UI.

## Table Structure

The following table outlines the SQL columns for the `dashboards` table, providing a brief description of each, along
with sample data where applicable.

| Column               | Type            | Description                                                                                                  | Example                        |
|----------------------|-----------------|--------------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`                 | `String` (ULID) | Unique identifier for the entity.                                                                            | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`            | `Boolean`       | If the entity is enabled or not.                                                                             | `true`                         |
| `created_date`       | `DateTime`      | Date the entity was created.                                                                                 | `2025-01-01T10:00:00Z`         |
| `created_by`         | `String`        | Person who created the entity.                                                                               | `TamakiMES`                    |
| `modified_date`      | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon first edit.     | `2025-01-02T12:00:00Z`         |
| `modified_by`        | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon first edit. | `TamakiMES`                    |
| `notes`              | `String`        | Notes about the entity.                                                                                      | `Pinned to production team`    |
| `spare1`             | `String`        | The first spare column that can be used for additional context on the entity.                                | `extra context 1`              |
| `spare2`             | `String`        | The second spare column that can be used for additional context on the entity.                               | `extra context 2`              |
| `spare3`             | `String`        | The third spare column that can be used for additional context on the entity.                                | `extra context 3`              |
| `name`               | `String`        | User-friendly name for the dashboard.                                                                        | `Production Overview`          |
| `url`                | `String`        | URL-friendly version of the name used for routing.                                                           | `production-overview`          |
| `is_public`          | `Boolean`       | True if the dashboard is public (no username).                                                               | `false`                        |
| `username`           | `String`        | Ignition username of the dashboard owner; null if public.                                                    | `operator01`                   |
| `icon_path`          | `String`        | Path to a UI icon for the dashboard.                                                                         | `material/dashboard`           |
| `pack`               | `Boolean`       | When true, auto-sizes to fit content (vs fixed grid).                                                        | `true`                         |
| `grid`               | `String` (Enum) | Grid layout mode for the dashboard.                                                                          | `STRETCH`                      |
| `row_count`          | `Integer`       | Number of rows in the dashboard grid (fixed layout).                                                         | `10`                           |
| `column_count`       | `Integer`       | Number of columns in the dashboard grid (fixed layout).                                                      | `10`                           |
| `row_gutter_size`    | `Integer`       | Vertical spacing (pixels) between rows (fixed layout).                                                       | `6`                            |
| `column_gutter_size` | `Integer`       | Horizontal spacing (pixels) between columns (fixed layout).                                                  | `6`                            |
| `instances_json`     | `String`        | JSON for the Perspective dashboard component `props.instances`.                                              | `[{...}]`                      |

## Field Details

### `grid`

Determines how embedded views/components are laid out. Example: `STRETCH`.

### `pack`

When true, the dashboard adapts to its content rather than using a fixed grid.

### `instances_json`

Serialized JSON of the dashboard instances array used by the Perspective component.

