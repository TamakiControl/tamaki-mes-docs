---
sidebar_position: 30
title: "validateDashboard"
description: "Validates a dashboard and returns any validation errors."
---

# system.mes.dashboard.validateDashboard

## Description

Validates the specified parameters for a Dashboard and returns any validation errors. This does not save the object.

## Syntax

```python
system.mes.dashboard.validateDashboard(**dashboard)
```

## Parameters

| Parameter          | Type            | Nullable | Description                                                          |
|--------------------|-----------------|----------|----------------------------------------------------------------------|
| `name`             | `String`        | False    | The user-given name for the dashboard.                               |
| `url`              | `String`        | False    | URL-friendly version used for page routing.                          |
| `isPublic`         | `Boolean`       | False    | True if the dashboard is public.                                     |
| `username`         | `String`        | True     | Owner’s Ignition username (null if public).                          |
| `iconPath`         | `String`        | True     | Path to an icon for the dashboard.                                   |
| `pack`             | `Boolean`       | False    | When true, sizes to fit content; otherwise uses fixed grid settings. |
| `grid`             | `String`        | False    | Grid layout mode (e.g., STRETCH).                                    |
| `rowCount`         | `Integer`       | False    | Number of grid rows (fixed layout).                                  |
| `columnCount`      | `Integer`       | False    | Number of grid columns (fixed layout).                               |
| `rowGutterSize`    | `Integer`       | False    | Vertical spacing between rows (fixed layout).                        |
| `columnGutterSize` | `Integer`       | False    | Horizontal spacing between columns (fixed layout).                   |
| `instancesJson`    | `String`        | False    | JSON for Perspective dashboard component `props.instances`.          |
| `id`               | `String` (ULID) | True     | The ULID of the dashboard.                                           |
| `notes`            | `String`        | True     | Notes related to the dashboard.                                      |
| `enabled`          | `Boolean`       | True     | Indicates if the dashboard is active and enabled.                    |
| `spare1`           | `String`        | True     | Additional field for user-defined context.                           |
| `spare2`           | `String`        | True     | Additional field for user-defined context.                           |
| `spare3`           | `String`        | True     | Additional field for user-defined context.                           |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
db = system.mes.dashboard.newDashboard()
db['name'] = ''  # invalid
violations = system.mes.dashboard.validateDashboard(**db)
print(violations)
```
