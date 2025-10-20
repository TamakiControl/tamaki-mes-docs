---
sidebar_position: 15
title: "saveWidgetAndParameters"
description: "Saves a widget and its parameters in one call, removing parameters not in the list."
---

# system.mes.dashboard.saveWidgetAndParameters

## Description

Saves or updates a Dashboard Widget and its associated parameters in a single call. Parameters provided are
saved/updated; parameters not included are removed from the widget.


## Permissions

This method requires the `DASHBOARD.WRITE.SAVE` permission.

## Syntax

```python
system.mes.dashboard.saveWidgetAndParameters(widget, parameters)
```

## Parameters

| Parameter    | Type                | Nullable | Description                                          |
|--------------|---------------------|----------|------------------------------------------------------|
| `widget`     | `JSON Object`       | False    | The widget to save (same structure as saveWidget).   |
| `parameters` | `List<JSON Object>` | False    | List of parameter DTOs to associate with the widget. |

## Returns

Returns a JSON representation of the saved widget.

## Code Examples

```python
widget = system.mes.dashboard.newWidget()
widget['name'] = 'Time Series'
widget['viewPath'] = 'Mes/Widgets/TimeSeries'

p1 = system.mes.dashboard.newWidgetParameter()
p1['name'] = 'Chart Title'
p1['parameterKey'] = 'title'

saved = system.mes.dashboard.saveWidgetAndParameters(widget, [p1])
print(saved)
```
