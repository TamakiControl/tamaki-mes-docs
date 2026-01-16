---
sidebar_position: 8
title: "getAllMaterialClasses"
description: "Retrieves all material classes."
---

# system.mes.material.getAllMaterialClasses

## Description

Retrieves a list of all [Material Classes](../../data-model/material-model/material-class) records in the system.

## Syntax

```python
system.mes.material.getAllMaterialClasses()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all material classes.

## Code Examples

```python
# Retrieve all material classes
allMaterialClasses = system.mes.material.getAllMaterialClasses()

# Output the list of material classes
print(allMaterialClasses)
```
