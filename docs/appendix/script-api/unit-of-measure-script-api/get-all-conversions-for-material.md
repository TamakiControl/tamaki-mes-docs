---
sidebar_position: 19
title: "getAllConversionsForMaterial"
description: "Retrieves all unit of measure conversions for a material."
---

# system.mes.unitOfMeasure.getAllConversionsForMaterial

## Description

Retrieves a list of all [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) records in the system for a material.

## Syntax

```python
system.mes.unitOfMeasure.getAllConversionsForMaterial(id)
```

## Parameters

| Parameter | Type            | Description                                                         |
| --------- | --------------- | ------------------------------------------------------------------- |
| `id`      | `String` (ULID) | The material ID to find all associated unit of measure conversions. |

## Returns

Returns a list of JSON objects representing all unit of measure conversions for a material.

## Code Examples

```python
# Retrieve all unit of measure for a material
all_uomcs = system.mes.unitOfMeasure.getAllConversionsForMaterial('01JCH3W58Y-5HJ7PDE9-V5MG3987')

# Output the list of unit of measure conversions
print(all_uomcs)
```
