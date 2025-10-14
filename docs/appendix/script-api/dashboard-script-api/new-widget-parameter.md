---
sidebar_position: 20
title: "newWidgetParameter"
description: "Generates an empty Dashboard Widget Parameter object to use with saveWidgetParameter."
---

# system.mes.dashboard.newWidgetParameter

## Description

Generates an empty non-persisted widget parameter object to provide the structure required by the API to save a new
record into the database. Use with [saveWidgetParameter](./save-widget-parameter).

## Syntax

```python
system.mes.dashboard.newWidgetParameter()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created widget parameter object. Keys and default values:

| Key               | Default Value |
|-------------------|---------------|
| `widgetId`        | `null`        |
| `parameterTypeId` | `null`        |
| `name`            | `null`        |
| `description`     | `null`        |
| `parameterKey`    | `null`        |
| `defaultValue`    | `null`        |
| `configuration`   | `null`        |
| `sortOrder`       | `0`           |
| `id`              | `null`        |
| `notes`           | `null`        |
| `enabled`         | `true`        |
| `spare1`          | `null`        |
| `spare2`          | `null`        |
| `spare3`          | `null`        |

## Code Examples

```python
p = system.mes.dashboard.newWidgetParameter()
p['name'] = 'Chart Title'
p['parameterKey'] = 'title'
print(p)
```
