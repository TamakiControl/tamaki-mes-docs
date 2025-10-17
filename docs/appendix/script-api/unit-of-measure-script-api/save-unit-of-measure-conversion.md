---
sidebar_position: 14
title: 'saveUnitOfMeasureConversion'
description: 'Creates or updates a unit of measure conversion with specified parameters.'
---

# system.mes.unitOfMeasure.saveUnitOfMeasureConversion

## Description

Creates or updates a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record in the system based on the provided parameters.

## Permissions

This method requires the `UNIT_OF_MEASURE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.unitOfMeasure.saveUnitOfMeasureConversion(**uomc_data)
```

## Parameters

| Parameter          | Type            | Nullable | Description                                                                                                      |
| ------------------ | --------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
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

Returns a JSON representation of the saved unit of measure conversion.

## Code Examples

```python
# Generate the object structure for a new unit of measure conversion object, set the parameters and save it
new_uomc = system.mes.unitOfMeasure.newUnitOfMeasureConversion()
new_uomc['toId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
new_uomc['conversionFactor'] = 0.33
new_uomc['fromId'] = '01JCH4NB3J-BTERAZ27-QEQQN4ME'
saved_uomc = system.mes.unitOfMeasure.saveUnitOfMeasureConversion(**new_uomc)

# Output the JSON representation of the saved unit of measure conversion
print(saved_uomc)

# Generate the object structure for another new unit of measure conversion object to update the previous unit of measure conversion
uomc_data = system.mes.unitOfMeasure.newUnitOfMeasureConversion()

# Set basic attributes for the updated unit of measure conversion
uomc_data['toId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
uomc_data['conversionFactor'] = 0.33
uomc_data['fromId'] = '01JCH4NB3J-BTERAZ27-QEQQN4ME'
uomc_data['notes'] = 'Conversion from L to BT'
# (You can continue setting other properties as needed here)

# Save the unit of measure conversion to update it in the system
updated_uomc = system.mes.unitOfMeasure.saveUnitOfMeasureConversion(**uomc_data)

# Output the JSON representation of the updated unit of measure conversion
print(updated_uomc)
```
