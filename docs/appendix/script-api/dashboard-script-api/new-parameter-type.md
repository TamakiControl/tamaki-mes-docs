---
sidebar_position: 2
title: 'newParameterType'
description: 'Generates an empty Dashboard Widget Parameter Type object to use with saveParameterType.'
---

# system.mes.dashboard.newParameterType

## Description

Generates an empty non-persisted parameter type object to provide the structure required by the API to save a new record
into the database. Use with [saveParameterType](./save-parameter-type).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.dashboard.newParameterType()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created parameter type object. Keys and default values:

| Key        | Default Value |
| ---------- | ------------- |
| `name`     | `null`        |
| `viewPath` | `null`        |
| `id`       | `null`        |
| `notes`    | `null`        |
| `enabled`  | `true`        |
| `spare1`   | `null`        |
| `spare2`   | `null`        |
| `spare3`   | `null`        |

## Code Examples

```python
pt = system.mes.dashboard.newParameterType()
pt['name'] = 'Integer'
pt['viewPath'] = 'Mes/Editors/Integer'
saved = system.mes.dashboard.saveParameterType(pt)
print(saved)
```
