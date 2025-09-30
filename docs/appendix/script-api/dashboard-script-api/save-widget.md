---
sidebar_position: 14
title: "saveWidget"
description: "Creates or updates a dashboard widget with specified parameters."
---

# system.mes.dashboard.saveWidget

## Description

Creates or updates a Dashboard Widget in the system based on the provided parameters.

## Syntax

```python
system.mes.dashboard.saveWidget(**widget)
```

## Parameters

| Parameter       | Type            | Nullable | Description                                        |
|-----------------|-----------------|----------|----------------------------------------------------|
| `name`          | `String`        | False    | The user-friendly name of the widget.              |
| `description`   | `String`        | True     | Description of the widget functionality.           |
| `viewPath`      | `String`        | False    | Path to the Ignition View that renders the widget. |
| `iconPath`      | `String`        | True     | Path to an icon for the widget.                    |
| `category`      | `String`        | True     | Category of the widget.                            |
| `defaultWidth`  | `Integer`       | False    | Default grid width of the widget.                  |
| `defaultHeight` | `Integer`       | False    | Default grid height of the widget.                 |
| `minWidth`      | `Integer`       | False    | Minimum grid width allowed.                        |
| `minHeight`     | `Integer`       | False    | Minimum grid height allowed.                       |
| `id`            | `String` (ULID) | True     | The ULID of the widget (optional, for updates).    |
| `notes`         | `String`        | True     | Notes related to the widget.                       |
| `enabled`       | `Boolean`       | True     | Indicates if the widget is active and enabled.     |
| `spare1`        | `String`        | True     | Additional field for user-defined context.         |
| `spare2`        | `String`        | True     | Additional field for user-defined context.         |
| `spare3`        | `String`        | True     | Additional field for user-defined context.         |

## Returns

Returns a JSON representation of the saved widget.

## Code Examples

```python
w = system.mes.dashboard.newWidget()
w['name'] = 'Time Series'
w['viewPath'] = 'Mes/Widgets/TimeSeries'
saved = system.mes.dashboard.saveWidget(w)
print(saved)
```
