---
sidebar_position: 45
title: "validatePropertyValue"
description: "Validates a material property value based on provided parameters."
---

# system.mes.material.validatePropertyValue

## Description

Validates the specified parameters for a [Material Property Values](../../data-model/material-model/material-property-value) record and returns any validation errors.
This only checks if the material property value object can be saved based on the attributes given, without actually creating or modifying the material property value. Use this function to verify your parameters before executing a save material property value operation.

## Syntax

```python
system.mes.material.validatePropertyValue(**propertyData)
```

## Parameters

| Parameter            | Type            | Nullable | Description                                                                                                        |
|----------------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------|
| `materialId`         | `String` (ULID) | False    | The ULID of the material.                                                                                          |
| `materialPropertyId` | `String` (ULID) | False    | The ULID of the material property.                                                                                 |
| `dataType`           | `String`        | True     | The data type of the property value. Must be the same as the data type of the property. Default value is `String`. |
| `value`              | `Mixed`         | True     | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                 | `String` (ULID) | True     | The ULID of the material property value (optional, for updating an existing property).                             |
| `notes`              | `String`        | True     | Notes related to the material property value.                                                                      |
| `enabled`            | `Boolean`       | True     | Indicates if the property value is active and enabled. Default value is `true`.                                    |
| `spare1`             | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare2`             | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare3`             | `String`        | True     | Additional field for user-defined context.                                                                         |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new property object
newProperty = system.mes.material.newProperty()
newProperty['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newProperty['name'] = 'Density'
newProperty['dataType'] = 'Float'
savedProperty = system.mes.material.saveProperty(**newProperty)

# Generate the object structure for a new property value object
propertyValueData = system.mes.material.newPropertyValue()

# Define property value details
propertyValueData['materialId'] = system.mes.material.getMaterial('IRB/5391537510212')['id']
propertyValueData['materialPropertyId'] = savedProperty.id
propertyValueData['dataType'] = 'Float' # Must be the same data type as the property
propertyValueData['value'] = 100

# Validate material property value parameters

validationErrors = system.mes.material.validatePropertyValue(**propertyValueData)
if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Material property value parameters are valid.')
```
