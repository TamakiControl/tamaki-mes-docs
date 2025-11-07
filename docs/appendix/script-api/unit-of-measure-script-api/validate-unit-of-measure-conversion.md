---
sidebar_position: 21
title: "validateUnitOfMeasureConversion"
description: "Validates the specified parameters for a unit of measure conversion."
---

# system.mes.unitOfMeasure.validateUnitOfMeasureConversion

## Description

Validates the specified parameters for a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record and returns any validation errors.
This only checks if the unit of measure conversion object can be saved based on the attributes given, without actually creating or modifying the unit of measure conversion. Use this function to verify your parameters before executing a save unit of measure conversion operation.

## Syntax

```python
system.mes.unitOfMeasure.validateUnitOfMeasureConversion(**uomc_data)
```

## Parameters

| Parameter          | Type            | Nullable | Description                                                                                                      |
|--------------------|-----------------|----------|------------------------------------------------------------------------------------------------------------------|
| `fromId`           | `String` (ULID) | False    | The unit of measure the conversion is converting from.                                                           |
| `toId`             | `String` (ULID) | False    | The unit of measure the conversion is converting to.                                                             |
| `conversionFactor` | `Double`        | False    | The number used to change the unit of measure from one set to the other.                                         |
| `materialId`       | `String` (ULID) | True     | The material associated with the unit of measure conversion.                                                     |
| `id`               | `String` (ULID) | True     | The ULID of the unit of measure conversion (optional, used for updating an existing unit of measure conversion). |
| `notes`            | `String`        | True     | Notes related to the unit of measure conversion.                                                                 |
| `enabled`          | `Boolean`       | True     | Indicates if the unit of measure conversion is active and enabled. Default value is `true`                       |
| `spare1`           | `String`        | True     | Additional field for user-defined context.                                                                       |
| `spare2`           | `String`        | True     | Additional field for user-defined context.                                                                       |
| `spare3`           | `String`        | True     | Additional field for user-defined context.                                                                       |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new unit of measure conversion object
uomc_data = system.mes.unitOfMeasure.newUnitOfMeasureConversion()

# Set basic attributes for the new unit of measure conversion
uomc_data['toId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
uomc_data['conversionFactor'] = '0.33'
uomc_data['fromId'] = '01JCH4NB3J-BTERAZ27-QEQQN4ME'
# (You can continue setting other properties as needed here)

# Validate unit of measure conversion parameters
validation_errors = system.mes.unitOfMeasure.validateUnitOfMeasureConversion(**uomc_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Unit of measure conversion parameters are valid.')
```
