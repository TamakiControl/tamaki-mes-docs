---
sidebar_position: 29
title: "saveDashboard"
description: "Creates or updates a dashboard with specified parameters."
---

# system.mes.dashboard.saveDashboard

## Description

Creates or updates a Dashboard in the system based on the provided parameters.

## Syntax

```python
system.mes.dashboard.saveDashboard(**dashboard)
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
| `id`               | `String` (ULID) | True     | The ULID of the dashboard (optional, for updates).                   |
| `notes`            | `String`        | True     | Notes related to the dashboard.                                      |
| `enabled`          | `Boolean`       | True     | Indicates if the dashboard is active and enabled.                    |
| `spare1`           | `String`        | True     | Additional field for user-defined context.                           |
| `spare2`           | `String`        | True     | Additional field for user-defined context.                           |
| `spare3`           | `String`        | True     | Additional field for user-defined context.                           |

## Returns

Returns a JSON representation of the saved dashboard.

## Code Examples

```python
db = system.mes.dashboard.newDashboard()
db['name'] = 'Production Overview'
db['url'] = 'production-overview'
db['instancesJson'] = '[]'
saved = system.mes.dashboard.saveDashboard(**db)
print(saved)
```
