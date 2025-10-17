---
sidebar_position: 13
title: "getAllWidgetNames"
description: "Retrieves the names of all dashboard widgets."
---

# system.mes.dashboard.getAllWidgetNames

## Description

Retrieves the names of all registered Dashboard Widgets.


## Permissions

This method requires the `DASHBOARD.READ.GET` permission.

## Syntax

```python
system.mes.dashboard.getAllWidgetNames()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of `String` names.

## Code Examples

```python
names = system.mes.dashboard.getAllWidgetNames()
print(names)
```
