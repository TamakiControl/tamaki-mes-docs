---
sidebar_position: 37
title: "newPropertyValue"
description: "Generates an empty non-persisted property values object to provide the structure to save a new record into the database."
---

# system.mes.material.newPropertyValue

## Description

Generates an empty non-persisted [Material Property Values](../../data-model/material-model/material-property-value) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [savePropertyValue](./save-property-value) method in order to persist the record.

## Syntax

```python
system.mes.material.newPropertyValue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created material property value object. The following is a list of keys and default values:

| Key                  | Default Value |
|----------------------|---------------|
| `materialId`         | `null`        |
| `materialPropertyId` | `null`        |
| `dataType`           | `String`      |
| `value`              | `null`        |
| `id`                 | `null`        |
| `notes`              | `null`        |
| `enabled`            | `true`        |
| `spare1`             | `null`        |
| `spare2`             | `null`        |
| `spare3`             | `null`        |

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

# Generate the object structure for a new property value object with no initial arguments
newPropertyValue = system.mes.material.newPropertyValue()

# Define property value details
newPropertyValue['materialId'] = savedMaterial.id
newPropertyValue['materialPropertyId'] = savedProperty.id
newPropertyValue['dataType'] = 'Float' # Must be the same data type as the property
newPropertyValue['value'] = 100
# (You can continue setting other properties as needed here)

# Save the property value
savedPropertyValue = system.mes.material.savePropertyValue(**newPropertyValue)

# Output the JSON representation of the saved material property value
print(savedPropertyValue)
```
