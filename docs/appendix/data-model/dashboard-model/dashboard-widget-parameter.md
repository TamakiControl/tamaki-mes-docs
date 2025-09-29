---
sidebar_position: 4
title: "dashboard_widget_parameters"
description: "Documentation for the dashboard_widget_parameters table, outlining its columns and structure."
---

# Dashboard Widget Parameter

## Overview

Represents a single configurable parameter for a widget template, including its label, key used by the Ignition View,
default value JSON, and editor configuration JSON.

## Table Structure

The following table outlines the SQL columns for the `dashboard_widget_parameters` table, providing a brief description
of each, along with sample data where applicable.

| Column               | Type            | Description                                                                                                  | Example                        |
|----------------------|-----------------|--------------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`                 | `String` (ULID) | Unique identifier for the entity.                                                                            | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`            | `Boolean`       | If the entity is enabled or not.                                                                             | `true`                         |
| `created_date`       | `DateTime`      | Date the entity was created.                                                                                 | `2025-01-01T10:00:00Z`         |
| `created_by`         | `String`        | Person who created the entity.                                                                               | `TamakiMES`                    |
| `modified_date`      | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon first edit.     | `2025-01-02T12:00:00Z`         |
| `modified_by`        | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon first edit. | `TamakiMES`                    |
| `notes`              | `String`        | Notes about the entity.                                                                                      | `Default is empty`             |
| `spare1`             | `String`        | The first spare column that can be used for additional context on the entity.                                | `extra context 1`              |
| `spare2`             | `String`        | The second spare column that can be used for additional context on the entity.                               | `extra context 2`              |
| `spare3`             | `String`        | The third spare column that can be used for additional context on the entity.                                | `extra context 3`              |
| `widget_id`          | `String` (ULID) | Reference to the dashboard widget this parameter belongs to.                                                 | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `parameter_type_id`  | `String` (ULID) | Reference to the parameter type that controls how this parameter is edited.                                  | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `name`               | `String`        | Display label for this parameter in the configuration UI.                                                    | `Chart Title`                  |
| `description`        | `String`        | Description of what the parameter controls.                                                                  | `Title shown at top of chart`  |
| `parameter_key`      | `String`        | The key used in the widget's view params object (actual parameter name in the view).                         | `title`                        |
| `default_value_json` | `String`        | JSON representing the default value for this parameter.                                                      | `"\"My Chart\""`               |
| `editor_config_json` | `String`        | JSON configuring the parameter editor (e.g., dropdown options, ranges).                                      | `{ "min": 0, "max": 100 }`     |
| `sort_order`         | `Integer`       | Display sort order of the parameter within the widget configuration UI.                                      | `0`                            |

## Field Details

### `parameter_key`

Actual parameter name expected by the widget view.

### `default_value_json` and `editor_config_json`

JSON strings used to provide initial value and editor configuration.

