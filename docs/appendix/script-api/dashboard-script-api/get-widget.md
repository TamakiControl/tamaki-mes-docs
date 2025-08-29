---
sidebar_position: 10
title: "getWidget"
description: "Retrieves a dashboard widget by ID."
---

# system.mes.dashboard.getWidget

## Description

Retrieves a Dashboard Widget by its ID.

## Syntax

```python
system.mes.dashboard.getWidget(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                       |
|-----------|-----------------|----------|-----------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the widget to retrieve. |

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
w = system.mes.dashboard.getWidget('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(w)
```
