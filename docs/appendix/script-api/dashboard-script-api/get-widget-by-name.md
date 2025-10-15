---
sidebar_position: 11
title: "getWidgetByName"
description: "Retrieves a dashboard widget by name."
---

# system.mes.dashboard.getWidgetByName

## Description

Retrieves a Dashboard Widget by its unique name.


## Permissions

This method requires the `DASHBOARD.READ.GET` permission.

## Syntax

```python
system.mes.dashboard.getWidgetByName(name)
```

## Parameters

| Parameter | Type     | Nullable | Description                    |
|-----------|----------|----------|--------------------------------|
| `name`    | `String` | False    | The name of the widget to get. |

## Returns

Returns a JSON representation of the widget.

| Name            | Type            | Description                                        |
|-----------------|-----------------|----------------------------------------------------|
| `name`          | `String`        | The user-friendly name of the widget.              |
| `description`   | `String`        | Description of the widget functionality.           |
| `viewPath`      | `String`        | Path to the Ignition View that renders the widget. |
| `iconPath`      | `String`        | Path to an icon for the widget.                    |
| `category`      | `String`        | Category of the widget.                            |
| `defaultWidth`  | `Integer`       | Default grid width of the widget.                  |
| `defaultHeight` | `Integer`       | Default grid height of the widget.                 |
| `minWidth`      | `Integer`       | Minimum grid width allowed.                        |
| `minHeight`     | `Integer`       | Minimum grid height allowed.                       |
| `id`            | `String` (ULID) | The ULID of the widget.                            |
| `notes`         | `String`        | Notes related to the widget.                       |
| `enabled`       | `Boolean`       | Indicates if the widget is active and enabled.     |
| `spare1`        | `String`        | Additional field for user-defined context.         |
| `spare2`        | `String`        | Additional field for user-defined context.         |
| `spare3`        | `String`        | Additional field for user-defined context.         |

## Code Examples

```python
w = system.mes.dashboard.getWidgetByName('Time Series')
print(w)
```
