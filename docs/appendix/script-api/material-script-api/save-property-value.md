---
sidebar_position: 38
title: "savePropertyValue"
description: "Creates or updates a material property value based on specified parameters."
---

# system.mes.material.savePropertyValue

## Description

Creates or updates a [Material Property Values](../../data-model/material-model/material-property-value) record in the system based on the provided parameters.

## Syntax

```python
system.mes.material.savePropertyValue(**propertyValueData)
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

Returns a JSON representation of the saved material property value.

## Code Examples

```python
# Generate the object structure for a new material object
newMaterial = system.mes.material.newMaterial()
newMaterial['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newMaterial['name'] = '5391537510212'
newMaterial['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
savedMaterial = system.mes.material.saveMaterial(**newMaterial)

# Generate the object structure for a new property object
newProperty = system.mes.material.newProperty()
newProperty['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newProperty['name'] = 'Density'
newProperty['dataType'] = 'Float'
savedProperty = system.mes.material.saveProperty(**newProperty)

# Generate the object structure for a new property value object with no initial arguments, set the material ID and property ID and save it
newPropertyValue = system.mes.material.newPropertyValue()
newPropertyValue['materialId'] = savedMaterial.id
newPropertyValue['materialPropertyId'] = savedProperty.id
savedPropertyValue = system.mes.material.savePropertyValue(**newPropertyValue)

# Generate the object structure for another new property value object to update the previous material property value
propertyValueData = system.mes.material.newPropertyValue()
propertyValueData['id'] = savedPropertyValue.id
propertyValueData['dataType'] = 'Float' # Must be the same data type as the property
propertyValueData['value'] = 100

# Save the material property value to update it in the system
updatedPropertyValue = system.mes.material.savePropertyValue(**propertyValueData)

# Output the JSON representation of the updated material property value
print(updatedPropertyValue)
```
