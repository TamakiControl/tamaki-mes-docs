---
sidebar_position: 19
title: "getWidgetParameters"
description: "Retrieves all parameters for a specific dashboard widget."
---

# system.mes.dashboard.getWidgetParameters

## Description

Retrieves all parameters for the specified Dashboard Widget.

## Syntax

```python
system.mes.dashboard.getWidgetParameters(widgetId)
```

## Parameters

| Parameter  | Type            | Nullable | Description                              |
|------------|-----------------|----------|------------------------------------------|
| `widgetId` | `String` (ULID) | False    | The ID of the widget to retrieve params. |

## Returns

Returns a list of JSON objects representing widget parameters.

## Code Examples

```python
params = system.mes.dashboard.getWidgetParameters('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(params)
```
