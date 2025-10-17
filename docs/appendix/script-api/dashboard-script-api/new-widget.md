---
sidebar_position: 9
title: 'newWidget'
description: 'Generates an empty Dashboard Widget object to use with saveWidget.'
---

# system.mes.dashboard.newWidget

## Description

Generates an empty non-persisted widget object to provide the structure required by the API to save a new record into
the database. Use with [saveWidget](./save-widget).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.dashboard.newWidget()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created widget object. Keys and default values:

| Key             | Default Value |
| --------------- | ------------- |
| `name`          | `null`        |
| `description`   | `null`        |
| `viewPath`      | `null`        |
| `iconPath`      | `null`        |
| `category`      | `null`        |
| `defaultWidth`  | `2`           |
| `defaultHeight` | `2`           |
| `minWidth`      | `2`           |
| `minHeight`     | `2`           |
| `id`            | `null`        |
| `notes`         | `null`        |
| `enabled`       | `true`        |
| `spare1`        | `null`        |
| `spare2`        | `null`        |
| `spare3`        | `null`        |

## Code Examples

```python
w = system.mes.dashboard.newWidget()
w['name'] = 'Time Series'
w['viewPath'] = 'Mes/Widgets/TimeSeries'
saved = system.mes.dashboard.saveWidget(w)
print(saved)
```
