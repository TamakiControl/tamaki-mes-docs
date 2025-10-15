---
sidebar_position: 7
title: "validateParameterType"
description: "Validates a dashboard widget parameter type and returns any validation errors."
---

# system.mes.dashboard.validateParameterType

## Description

Validates the specified parameters for a Dashboard Widget Parameter Type and returns any validation errors. This does
not save the object.


## Permissions

This method requires the `DASHBOARD.READ.VALIDATE` permission.

## Syntax

```python
system.mes.dashboard.validateParameterType(**parameter_type)
```

## Parameters

| Parameter  | Type            | Nullable | Description                                             |
|------------|-----------------|----------|---------------------------------------------------------|
| `name`     | `String`        | False    | The unique name of the parameter type.                  |
| `viewPath` | `String`        | False    | Perspective view path used to edit this parameter type. |
| `id`       | `String` (ULID) | True     | The ULID of the parameter type.                         |
| `notes`    | `String`        | True     | Notes related to the parameter type.                    |
| `enabled`  | `Boolean`       | True     | Indicates if the parameter type is active and enabled.  |
| `spare1`   | `String`        | True     | Additional field for user-defined context.              |
| `spare2`   | `String`        | True     | Additional field for user-defined context.              |
| `spare3`   | `String`        | True     | Additional field for user-defined context.              |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
pt = system.mes.dashboard.newParameterType()
pt['name'] = ''  # invalid
violations = system.mes.dashboard.validateParameterType(pt)
print(violations)
```
