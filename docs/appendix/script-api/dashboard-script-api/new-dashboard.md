---
sidebar_position: 25
title: "newDashboard"
description: "Generates an empty Dashboard object to use with saveDashboard."
---

# system.mes.dashboard.newDashboard

## Description

Generates an empty non-persisted Dashboard object to provide the structure required by the API to save a new record into
the database. Use with [saveDashboard](./save-dashboard).

## Syntax

```python
system.mes.dashboard.newDashboard()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created dashboard object. Keys and default values:

| Key                | Default Value          |
|--------------------|------------------------|
| `name`             | `null`                 |
| `url`              | `null`                 |
| `isPublic`         | `false`                |
| `username`         | `null`                 |
| `iconPath`         | `"material/dashboard"` |
| `pack`             | `true`                 |
| `grid`             | `STRETCH`              |
| `rowCount`         | `10`                   |
| `columnCount`      | `10`                   |
| `rowGutterSize`    | `8`                    |
| `columnGutterSize` | `8`                    |
| `instancesJson`    | `null`                 |
| `id`               | `null`                 |
| `notes`            | `null`                 |
| `enabled`          | `true`                 |
| `spare1`           | `null`                 |
| `spare2`           | `null`                 |
| `spare3`           | `null`                 |

## Code Examples

```python
db = system.mes.dashboard.newDashboard()
db['name'] = 'Production Overview'
db['url'] = 'production-overview'
db['instancesJson'] = '[]'
print(db)
```
