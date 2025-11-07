---
sidebar_position: 13
title: "newUnitOfMeasureConversion"
description: "Generates an empty non-persisted unit of measure conversion object to provide the structure to save a new record into the database."
---

# system.mes.unitOfMeasure.newUnitOfMeasureConversion

## Description

Generates an empty non-persisted [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveUnitOfMeasureConversion](./save-unit-of-measure-conversion) method in order to persist the record.

## Syntax

```python
system.mes.unitOfMeasure.newUnitOfMeasureConversion()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created unit of measure conversion object. The following is a list of keys and default values:

| Key                | Default Value |
|--------------------|---------------|
| `fromId`           | `null`        |
| `toId`             | `null`        |
| `conversionFactor` | `null`        |
| `materialId`       | `null`        |
| `id`               | `null`        |
| `notes`            | `null`        |
| `enabled`          | `true`        |
| `spare1`           | `null`        |
| `spare2`           | `null`        |
| `spare3`           | `null`        |

## Code Examples

```python
# Generate the object structure for a new unit of measure conversion object with no initial arguments
newUomc = system.mes.unitOfMeasure.newUnitOfMeasureConversion()

# Set basic attributes for the new unit of measure
newUomc['toId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
newUomc['conversionFactor'] = 0.33
newUomc['fromId'] = '01JCH4NB3J-BTERAZ27-QEQQN4ME'
# (You can continue setting other properties as needed here)

# Save the new unit of measure conversion to the system
savedUomc = system.mes.unitOfMeasure.saveUnitOfMeasureConversion(**newUomc)

# Output the JSON representation of the saved unit of measure conversion
print(savedUomc)
```
