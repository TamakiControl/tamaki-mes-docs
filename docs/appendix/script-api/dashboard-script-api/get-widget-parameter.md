---
sidebar_position: 21
title: "getWidgetParameter"
description: "Retrieves a dashboard widget parameter by ID."
---

# system.mes.dashboard.getWidgetParameter

## Description

Retrieves a Dashboard Widget Parameter by its ID.


## Permissions

This method requires the `DASHBOARD.READ.GET` permission.

## Syntax

```python
system.mes.dashboard.getWidgetParameter(parameterId)
```

## Parameters

| Parameter     | Type            | Nullable | Description                                 |
|---------------|-----------------|----------|---------------------------------------------|
| `parameterId` | `String` (ULID) | False    | The ID of the widget parameter to retrieve. |

## Returns

Returns a JSON representation of the widget parameter, or nothing if not found.

| Name              | Type            | Description                                              |
|-------------------|-----------------|----------------------------------------------------------|
| `widgetId`        | `String` (ULID) | The ULID of the widget this parameter belongs to.        |
| `parameterTypeId` | `String` (ULID) | The ULID of the parameter type used by this parameter.   |
| `name`            | `String`        | The display label for the parameter.                     |
| `description`     | `String`        | Description of what the parameter controls.              |
| `parameterKey`    | `String`        | The key used in the widget's view parameters.            |
| `defaultValue`    | `String`        | JSON string of the default value.                        |
| `configuration`   | `String`        | JSON string configuring the parameter editor.            |
| `sortOrder`       | `Integer`       | Determines display order in the widget configuration UI. |
| `id`              | `String` (ULID) | The ULID of the widget parameter.                        |
| `notes`           | `String`        | Notes related to the widget parameter.                   |
| `enabled`         | `Boolean`       | Indicates if the widget parameter is active and enabled. |
| `spare1`          | `String`        | Additional field for user-defined context.               |
| `spare2`          | `String`        | Additional field for user-defined context.               |
| `spare3`          | `String`        | Additional field for user-defined context.               |

## Code Examples

```python
param = system.mes.dashboard.getWidgetParameter('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(param)
```
