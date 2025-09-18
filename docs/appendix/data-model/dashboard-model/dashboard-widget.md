---
sidebar_position: 3
title: "dashboard_widgets"
description: "Documentation for the dashboard_widgets table, outlining its columns and structure."
---

# Dashboard Widget

## Overview

Represents a reusable widget template that can be added to dashboards. Defines the widget identity, the Ignition View to
render, and sizing constraints.

## Table Structure

The following table outlines the SQL columns for the `dashboard_widgets` table, providing a brief description of each,
along with sample data where applicable.

| Column           | Type            | Description                                                                                                  | Example                        |
|------------------|-----------------|--------------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`             | `String` (ULID) | Unique identifier for the entity.                                                                            | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`        | `Boolean`       | If the entity is enabled or not.                                                                             | `true`                         |
| `created_date`   | `DateTime`      | Date the entity was created.                                                                                 | `2025-01-01T10:00:00Z`         |
| `created_by`     | `String`        | Person who created the entity.                                                                               | `TamakiMES`                    |
| `modified_date`  | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon first edit.     | `2025-01-02T12:00:00Z`         |
| `modified_by`    | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon first edit. | `TamakiMES`                    |
| `notes`          | `String`        | Notes about the entity.                                                                                      | `Common widget for OEE views`  |
| `spare1`         | `String`        | The first spare column that can be used for additional context on the entity.                                | `extra context 1`              |
| `spare2`         | `String`        | The second spare column that can be used for additional context on the entity.                               | `extra context 2`              |
| `spare3`         | `String`        | The third spare column that can be used for additional context on the entity.                                | `extra context 3`              |
| `name`           | `String`        | User-friendly name of the widget.                                                                            | `Time Series Chart`            |
| `category`       | `String`        | Category of the widget.                                                                                      | `OEE`                          |
| `description`    | `String`        | Description of the widget functionality.                                                                     | `Displays KPI trend over time` |
| `view_path`      | `String`        | Path to the Ignition View that renders the widget.                                                           | `Mes/Widgets/TimeSeries`       |
| `icon_path`      | `String`        | Path to an icon for the widget.                                                                              | `material/trending_up`         |
| `default_width`  | `Integer`       | Default grid width of the widget.                                                                            | `2`                            |
| `default_height` | `Integer`       | Default grid height of the widget.                                                                           | `2`                            |
| `min_width`      | `Integer`       | Minimum grid width allowed.                                                                                  | `2`                            |
| `min_height`     | `Integer`       | Minimum grid height allowed.                                                                                 | `2`                            |

## Field Details

### `view_path`

Perspective View path that implements the widget’s UI.

### `default_width` and `default_height`

Default size (in grid columns/rows) to use when placing the widget on a dashboard.

### `min_width` and `min_height`

Minimum allowed size to preserve widget usability.

