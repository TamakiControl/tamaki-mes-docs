---
sidebar_position: 27
title: "getDashboardByUrl"
description: "Retrieves a dashboard by URL for the current authenticated user (or public dashboards)."
---

# system.mes.dashboard.getDashboardByUrl

## Description

Retrieves a Dashboard by its URL for the current authenticated user. Public dashboards (no owner) are also considered.
If the user isn’t authenticated or the dashboard isn’t found for that user, this call throws an error.

## Syntax

```python
system.mes.dashboard.getDashboardByUrl(url)
```

## Parameters

| Parameter | Type     | Nullable | Description                                |
|-----------|----------|----------|--------------------------------------------|
| `url`     | `String` | False    | The URL slug of the dashboard to retrieve. |

## Returns

Returns a JSON representation of the dashboard. See [getDashboard](./get-dashboard) for the field list.

## Code Examples

```python
db = system.mes.dashboard.getDashboardByUrl('production-overview')
print(db)
```
