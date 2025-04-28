---
sidebar_position: 18
title: "getAllConversions"
description: "Retrieves all unit of measure conversions."
---

# system.mes.unitOfMeasure.getAllConversions

## Description

Retrieves a list of all [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) records in the system.

## Syntax

```python
system.mes.unitOfMeasure.getAllConversions()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all unit of measure conversions.

## Code Examples

```python
# Retrieve all unit of measure conversions
all_uomcs = system.mes.unitOfMeasure.getAllConversions()

# Output the list of unit of measure conversions
print(all_uomcs)
```
