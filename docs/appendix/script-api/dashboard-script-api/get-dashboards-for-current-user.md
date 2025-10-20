---
sidebar_position: 28
title: "getDashboardsForCurrentUser"
description: "Retrieves dashboards for the current user and all public dashboards."
---

# system.mes.dashboard.getDashboardsForCurrentUser

## Description

Retrieves all dashboards owned by the current authenticated user, plus all public dashboards.


## Permissions

This method requires the `DASHBOARD.READ.GET` permission.

## Syntax

```python
system.mes.dashboard.getDashboardsForCurrentUser()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing dashboards. See [getDashboard](./get-dashboard) for fields.

## Code Examples

```python
items = system.mes.dashboard.getDashboardsForCurrentUser()
print(items)
```
