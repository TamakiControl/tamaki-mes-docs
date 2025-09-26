---
sidebar_position: 3
title: "getParameterType"
description: "Retrieves a dashboard widget parameter type by ID."
---

# system.mes.dashboard.getParameterType

## Description

Retrieves a Dashboard Widget Parameter Type by its ID.

## Syntax

```python
system.mes.dashboard.getParameterType(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                               |
|-----------|-----------------|----------|-------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the parameter type to retrieve. |

## Returns

Returns a JSON representation of the parameter type.

| Name       | Type            | Description                                             |
|------------|-----------------|---------------------------------------------------------|
| `name`     | `String`        | The unique name of the parameter type.                  |
| `viewPath` | `String`        | Perspective view path used to edit this parameter type. |
| `id`       | `String` (ULID) | The ULID of the parameter type.                         |
| `notes`    | `String`        | Notes related to the parameter type.                    |
| `enabled`  | `Boolean`       | Indicates if the parameter type is active and enabled.  |
| `spare1`   | `String`        | Additional field for user-defined context.              |
| `spare2`   | `String`        | Additional field for user-defined context.              |
| `spare3`   | `String`        | Additional field for user-defined context.              |

## Code Examples

```python
pt = system.mes.dashboard.getParameterType('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(pt)
```
