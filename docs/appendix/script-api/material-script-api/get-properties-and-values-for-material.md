---
sidebar_position: 43
title: "getPropertiesAndValuesForMaterial"
description: "Retrieves all properties and property values for a specified material."
---

# system.mes.material.getPropertiesAndValuesForMaterial

## Description

Retrieves all [Material Properties](../../data-model/material-model/material-property) and [Material Property Values](../../data-model/material-model/material-property-value)
records by its material ID or path.

## Syntax

```python
system.mes.material.getPropertiesAndValuesForMaterial(idOrPath)
```

## Parameters

| Parameter  | Type     | Nullable | Description                       |
|------------|----------|----------|-----------------------------------|
| `idOrPath` | `String` | False    | The ULID or path of the material. |

## Returns

Returns a list of JSON objects representing all material properties and property values for a given material.

| Name                           | Type            | Description                                                                                                          |
|--------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------|
| `materialClassId`              | `String` (ULID) | The ULID of the material class associated with this material property.                                               |
| `materialId`                   | `String` (ULID) | The ULID of the material.                                                                                            |
| `materialPropertyId`           | `String` (ULID) | The ULID of the material property.                                                                                   |
| `materialPropertyValueId`      | `String` (ULID) | The ULID of the material property value.                                                                             |
| `materialPropertyNotes`        | `String`        | Notes related to the material property.                                                                              |
| `materialPropertyValueNotes`   | `String`        | Notes related to the material property value.                                                                        |
| `materialPropertyEnabled`      | `Boolean`       | Indicates if the property is active and enabled.                                                                     |
| `materialPropertyValueEnabled` | `Boolean`       | Indicates if the property value is active and enabled.                                                               |
| `name`                         | `String`        | The name of the material property.                                                                                   |
| `description`                  | `String`        | The description of the material property.                                                                            |
| `dataType`                     | `String`        | The data type of the property (e.g., Integer, String, Float).                                                        |
| `lowLimit`                     | `Double`        | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`                    | `Double`        | The maximum value allowed for a numerical property.                                                                  |
| `format`                       | `String`        | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`              | `String` (ULID) | The ULID of the unit of measure for this property.                                                                   |
| `unitOfMeasureName`            | `String`        | The name of the unit of measure for the property. For display purposes only.                                         |
| `unitOfMeasureSymbol`          | `String`        | The symbol of the unit of measure for the property. For display purposes only.                                       |
| `options`                      | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`                     | `Boolean`       | Defines if the property can accept null values.                                                                      |
| `defaultValue`                 | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `value`                        | `Mixed`         | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is.   |

## Code Examples

```python
# Retrieve all material properties and property values by material ID or path
propertiesAndValues = system.mes.material.getPropertiesAndValuesForMaterial('IRB/5391537510212')

# Output the material properties and property values
print(propertiesAndValues)
```
