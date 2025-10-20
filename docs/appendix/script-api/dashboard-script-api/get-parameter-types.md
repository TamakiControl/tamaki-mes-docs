---
sidebar_position: 5
title: "getParameterTypes"
description: "Retrieves all dashboard widget parameter types."
---

# system.mes.dashboard.getParameterTypes

## Description

Retrieves a list of all Dashboard Widget Parameter Types.


## Permissions

This method requires the `DASHBOARD.READ.GET` permission.

## Syntax

```python
system.mes.dashboard.getParameterTypes()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing parameter types.

## Code Examples

```python
allTypes = system.mes.dashboard.getParameterTypes()
print(allTypes)
```
