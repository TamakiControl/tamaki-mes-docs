---
sidebar_position: 20
title: 'getUnitOfMeasureConversionReferences'
description: 'Retrieves a list of references to a unit of measure conversion with the given ID.'
---

# system.mes.unitOfMeasure.getUnitOfMeasureConversionReferences

## Description

Retrieves a list of references to a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by its ID.

## Permissions

This method requires the `UNIT_OF_MEASURE.READ.GET` permission.

## Syntax

```python
system.mes.unitOfMeasure.getUnitOfMeasureConversionReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                           |
| --------- | --------------- | -------- | ----------------------------------------------------- |
| `id`      | `String` (ULID) | False    | The ID of the unit of measure conversion to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                         |
| ------------ | ------------------- | ----------------------------------------------------------------------------------- |
| `tableName`  | `String`            | The name of the table that the reference is in.                                     |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the unit of measure conversion. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                                |
| ----------- | --------------- | -------------------------------------------------------------------------- |
| `fkColName` | `String`        | The name of the foreign key column.                                        |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the unit of measure conversion. |

## Code Examples

```python
# Retrieve the references for the unit of measure conversion specified
uomc_references = system.mes.unitOfMeasure.getUnitOfMeasureConversionReferences('01JCH4NZH2-C7494ZJT-P52KRZEY')

# Output the unit of measure conversion references
print(uomc_references)
```
