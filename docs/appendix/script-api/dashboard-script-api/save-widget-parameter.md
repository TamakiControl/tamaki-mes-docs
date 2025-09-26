---
sidebar_position: 24
title: "saveWidgetParameter"
description: "Creates or updates a dashboard widget parameter with specified parameters."
---

# system.mes.dashboard.saveWidgetParameter

## Description

Creates or updates a Dashboard Widget Parameter in the system based on the provided parameters.

## Syntax

```python
system.mes.dashboard.saveWidgetParameter(widgetParameter)
```

## Parameters

| Parameter         | Type          | Nullable | Description                                                       |
|-------------------|---------------|----------|-------------------------------------------------------------------|
| `widgetParameter` | `JSON Object` | False    | The widget parameter to save. Accepts any serializable parameter. |

## Returns

Returns a JSON representation of the saved widget parameter.

## Code Examples

```python
p = system.mes.dashboard.newWidgetParameter()
p['widgetId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
p['name'] = 'Chart Title'
p['parameterKey'] = 'title'
saved = system.mes.dashboard.saveWidgetParameter(p)
print(saved)
```
