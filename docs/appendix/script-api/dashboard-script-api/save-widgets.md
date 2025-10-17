---
sidebar_position: 18
title: "saveWidgets"
description: "Saves a list of dashboard widgets in bulk."
---

# system.mes.dashboard.saveWidgets

## Description

Saves a list of Dashboard Widgets in bulk. Recommended for registering all widgets at gateway startup.


## Permissions

This method requires the `DASHBOARD.WRITE.SAVE` permission.

## Syntax

```python
system.mes.dashboard.saveWidgets(widgets)
```

## Parameters

| Parameter | Type                | Nullable | Description                          |
|-----------|---------------------|----------|--------------------------------------|
| `widgets` | `List<JSON Object>` | False    | List of widget dictionaries to save. |

## Returns

Returns a list of JSON objects representing the saved widgets.

## Code Examples

```python
w1 = system.mes.dashboard.newWidget(); w1['name'] = 'Time Series'; w1['viewPath'] = 'Mes/Widgets/TimeSeries'
w2 = system.mes.dashboard.newWidget(); w2['name'] = 'Summary';     w2['viewPath'] = 'Mes/Widgets/Summary'
saved = system.mes.dashboard.saveWidgets([w1, w2])
print(saved)
```
