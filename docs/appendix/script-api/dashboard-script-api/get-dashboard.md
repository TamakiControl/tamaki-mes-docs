---
sidebar_position: 26
title: "getDashboard"
description: "Retrieves a dashboard by ID."
---

# system.mes.dashboard.getDashboard

## Description

Retrieves a Dashboard by its ID.


## Permissions

This method requires the `DASHBOARD.READ.GET` permission.

## Syntax

```python
system.mes.dashboard.getDashboard(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                          |
|-----------|-----------------|----------|--------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the dashboard to retrieve. |

## Returns

Returns a JSON representation of the dashboard.

| Name               | Type            | Description                                                 |
|--------------------|-----------------|-------------------------------------------------------------|
| `name`             | `String`        | The user-given name for the dashboard.                      |
| `url`              | `String`        | URL-friendly version used for page routing.                 |
| `isPublic`         | `Boolean`       | True if the dashboard is public.                            |
| `username`         | `String`        | Owner’s Ignition username (null if public).                 |
| `iconPath`         | `String`        | Path to an icon for the dashboard.                          |
| `pack`             | `Boolean`       | Enables auto-size to fit content.                           |
| `grid`             | `String`        | Grid layout mode (e.g., STRETCH).                           |
| `rowCount`         | `Integer`       | Number of grid rows (fixed layout).                         |
| `columnCount`      | `Integer`       | Number of grid columns (fixed layout).                      |
| `rowGutterSize`    | `Integer`       | Vertical spacing between rows (fixed layout).               |
| `columnGutterSize` | `Integer`       | Horizontal spacing between columns (fixed layout).          |
| `instancesJson`    | `String`        | JSON for Perspective dashboard component `props.instances`. |
| `id`               | `String` (ULID) | The ULID of the dashboard.                                  |
| `notes`            | `String`        | Notes related to the dashboard.                             |
| `enabled`          | `Boolean`       | Indicates if the dashboard is active and enabled.           |
| `spare1`           | `String`        | Additional field for user-defined context.                  |
| `spare2`           | `String`        | Additional field for user-defined context.                  |
| `spare3`           | `String`        | Additional field for user-defined context.                  |

## Code Examples

```python
db = system.mes.dashboard.getDashboard('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(db)
```
