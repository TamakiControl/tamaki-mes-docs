---
sidebar_position: 72
title: 'resetOeeDataStateFromDB'
description: 'Resets the OEE data state from the database.'
---

# system.mes.oee.resetOeeDataStateFromDB

## Description

Resets the OEE data state from the database. This is useful for reloading OEE data after making changes directly to the database or when recovering from data inconsistencies.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.resetOeeDataStateFromDB()
```

## Parameters

This method does not take any parameters.

## Returns

This method does not return any value.

## Code Examples

```python
# Reset the OEE data state from the database
system.mes.oee.resetOeeDataStateFromDB()
```
