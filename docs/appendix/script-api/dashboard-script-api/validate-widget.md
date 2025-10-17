---
sidebar_position: 16
title: "validateWidget"
description: "Validates a dashboard widget and returns any validation errors."
---

# system.mes.dashboard.validateWidget

## Description

Validates the specified parameters for a Dashboard Widget and returns any validation errors. This does not save the
object.


## Permissions

This method requires the `DASHBOARD.READ.VALIDATE` permission.

## Syntax

```python
system.mes.dashboard.validateWidget(**widget)
```

## Parameters

| Parameter       | Type      | Nullable | Description                                        |
|-----------------|-----------|----------|----------------------------------------------------|
| `name`          | `String`  | False    | The user-friendly name of the widget.              |
| `description`   | `String`  | True     | Description of the widget functionality.           |
| `viewPath`      | `String`  | False    | Path to the Ignition View that renders the widget. |
| `iconPath`      | `String`  | True     | Path to an icon for the widget.                    |
| `category`      | `String`  | True     | Category of the widget.                            |
| `defaultWidth`  | `Integer` | False    | Default grid width of the widget.                  |
| `defaultHeight` | `Integer` | False    | Default grid height of the widget.                 |
| `minWidth`      | `Integer` | False    | Minimum grid width allowed.                        |
| `minHeight`     | `Integer` | False    | Minimum grid height allowed.                       |
| `id`            | `String`  | True     | The ULID of the widget.                            |
| `notes`         | `String`  | True     | Notes related to the widget.                       |
| `enabled`       | `Boolean` | True     | Indicates if the widget is active and enabled.     |
| `spare1`        | `String`  | True     | Additional field for user-defined context.         |
| `spare2`        | `String`  | True     | Additional field for user-defined context.         |
| `spare3`        | `String`  | True     | Additional field for user-defined context.         |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
w = system.mes.dashboard.newWidget()
w['name'] = ''  # invalid
violations = system.mes.dashboard.validateWidget(w)
print(violations)
```
