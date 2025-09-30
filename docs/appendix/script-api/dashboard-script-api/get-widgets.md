---
sidebar_position: 12
title: "getWidgets"
description: "Retrieves all dashboard widgets."
---

# system.mes.dashboard.getWidgets

## Description

Retrieves a list of all Dashboard Widgets.

## Syntax

```python
system.mes.dashboard.getWidgets()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing widgets.

## Code Examples

```python
widgets = system.mes.dashboard.getWidgets()
print(widgets)
```
