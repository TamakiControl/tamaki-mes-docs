---
sidebar_position: 9
title: "getUnitOfMeasureReferences"
description: "Retrieves a list of references to a unit of measure with the given ID."
---

# system.mes.unitOfMeasure.getUnitOfMeasureReferences

## Description

Retrieves a list of references to a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record by its ID.

## Syntax

```python
system.mes.unitOfMeasure.getUnitOfMeasureReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                |
|-----------|-----------------|----------|--------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the unit of measure to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                              |
|--------------|---------------------|--------------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                          |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the unit of measure. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                     |
|-------------|-----------------|-----------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                             |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the unit of measure. |

## Code Examples

```python
# Retrieve the references for the unit of measure specified
uom_references = system.mes.unitOfMeasure.getUnitOfMeasureReferences('01JS27F59C-BRW0RCQ0-VBC38S4K')

# Output the unit of measure references
print(uom_references)
```
