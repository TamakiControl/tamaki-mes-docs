---
sidebar_position: 19
title: "getProperty"
description: "Retrieves a location property by its ID or name."
---

# system.mes.location.getProperty

## Description

Retrieves a [Location Properties](../../data-model/location-model/location-property) record by its specified ID or name.


## Permissions

This method requires the `LOCATION.READ.GET` permission.

## Syntax

```python
system.mes.location.getProperty(idOrName)
```

## Parameters

| Parameter  | Type     | Nullable | Description                                            |
|------------|----------|----------|--------------------------------------------------------|
| `idOrName` | `String` | False    | The ULID or name of the location property to retrieve. |

## Returns

Returns a JSON representation of the location property. Returns nothing if no location property is found.

| Name                  | Type            | Description                                                                                                          |
| --------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                | `String`        | The name of the location property.                                                                                   |
| `description`         | `String`        | A description of the location property.                                                                              |
| `dataType`            | `String`        | The data type of the property (e.g., Integer, String, Float).                                                        |
| `lowLimit`            | `Double`        | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`           | `Double`        | The maximum value allowed for a numerical property.                                                                  |
| `format`              | `String`        | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`     | `String` (ULID) | The ULID of the unit of measure for this property.                                                                   |
| `unitOfMeasureName`   | `String`        | The name of the unit of measure for the property. For display purposes only.                                         |
| `unitOfMeasureSymbol` | `String`        | The symbol of the unit of measure for the property. For display purposes only.                                       |
| `options`             | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`            | `Boolean`       | Defines if the property can accept null values.                                                                      |
| `defaultValue`        | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                  | `String` (ULID) | The ULID of the location property.                                                                                   |
| `notes`               | `String`        | Notes related to the location property.                                                                              |
| `enabled`             | `Boolean`       | Indicates if the property is active and enabled.                                                                     |
| `spare1`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | Additional field for user-defined context.                                                                           |

## Code Examples

```python
# Retrieve a location property by ID or name
property = system.mes.location.getProperty('Temperature')

# Output the location property
print(property)
```
