---
sidebar_position: 8
title: "getAllUnitsOfMeasure"
description: "Retrieves all units of measure."
---

# system.mes.unitOfMeasure.getAllUnitsOfMeasure

## Description

Retrieves a list of all [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) records in the system.

## Syntax

```python
system.mes.unitOfMeasure.getAllUnitsOfMeasure()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all units of measure.

## Code Examples

```python
# Retrieve all units of measure
all_uoms = system.mes.unitOfMeasure.getAllUnitsOfMeasure()

# Output the list of units of measure
print(all_uoms)
```
