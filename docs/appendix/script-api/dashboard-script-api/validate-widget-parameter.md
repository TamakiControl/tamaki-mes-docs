---
sidebar_position: 22
title: "validateWidgetParameter"
description: "Validates a dashboard widget parameter and returns any validation errors."
---

# system.mes.dashboard.validateWidgetParameter

## Description

Validates the specified parameters for a Dashboard Widget Parameter and returns any validation errors. This does not
save the object.


## Permissions

This method requires the `DASHBOARD.READ.VALIDATE` permission.

## Syntax

```python
system.mes.dashboard.validateWidgetParameter(widgetParameter)
```

## Parameters

| Parameter         | Type          | Nullable | Description                       |
|-------------------|---------------|----------|-----------------------------------|
| `widgetParameter` | `JSON Object` | False    | The widget parameter to validate. |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
p = system.mes.dashboard.newWidgetParameter()
p['name'] = ''  # invalid
violations = system.mes.dashboard.validateWidgetParameter(p)
print(violations)
```
