---
sidebar_position: 6
title: "saveParameterType"
description: "Creates or updates a dashboard widget parameter type."
---

# system.mes.dashboard.saveParameterType

## Description

Creates or updates a Dashboard Widget Parameter Type in the system based on the provided parameters.

## Syntax

```python
system.mes.dashboard.saveParameterType(**parameter_type)
```

## Parameters

| Parameter  | Type            | Nullable | Description                                             |
|------------|-----------------|----------|---------------------------------------------------------|
| `name`     | `String`        | False    | The unique name of the parameter type.                  |
| `viewPath` | `String`        | False    | Perspective view path used to edit this parameter type. |
| `id`       | `String` (ULID) | True     | The ULID of the parameter type (for updates).           |
| `notes`    | `String`        | True     | Notes related to the parameter type.                    |
| `enabled`  | `Boolean`       | True     | Indicates if the parameter type is active and enabled.  |
| `spare1`   | `String`        | True     | Additional field for user-defined context.              |
| `spare2`   | `String`        | True     | Additional field for user-defined context.              |
| `spare3`   | `String`        | True     | Additional field for user-defined context.              |

## Returns

Returns a JSON representation of the saved parameter type.

## Code Examples

```python
pt = system.mes.dashboard.newParameterType()
pt['name'] = 'Integer'
pt['viewPath'] = 'Mes/Editors/Integer'
saved = system.mes.dashboard.saveParameterType(pt)
print(saved)
```
