---
sidebar_position: 22
title: "reloadStateFromDB"
description: "Reloads the Shift state from the database (re-reads trigger expressions)."
---

# system.mes.shift.reloadStateFromDB

## Description

Reloads the Shift state from the database. Use this after making manual database updates to ensure in-memory
trigger expressions and related cached state are refreshed.

## Syntax

```python
system.mes.shift.reloadStateFromDB()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

No return value.

## Code Examples

```python
# Reload shift trigger expressions and state from DB
system.mes.shift.reloadStateFromDB()
```
