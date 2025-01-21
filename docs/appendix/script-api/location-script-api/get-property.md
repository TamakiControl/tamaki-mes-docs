---
sidebar_position: 18
title: "getProperty"
description: "Retrieves a location property by its ID or name."
---

# system.mes.location.getProperty

## Description

Retrieves a [Location Properties](../../data-model/location-model/location-property) record by its specified ID or name.

## Syntax
```python
system.mes.location.getProperty(idOrName)
```

## Parameters

| Parameter  | Type     | Description                                            |
|------------|----------|--------------------------------------------------------|
| `idOrName` | `String` | The ULID or name of the location property to retrieve. |

## Returns

Returns a JSON representation of the location property.

| Name           | Type            | Description                                                                      |
|----------------|-----------------|----------------------------------------------------------------------------------|
| `name`         | `String`        | The name of the location property.                                               |
| `description`  | `String`        | A description of the location property.                                          |
| `dataType`     | `String`        | The data type of the property (e.g., Integer, String, Float).                    |
| `lowLimit`     | `Double`        | The minimum value allowed for a numerical property.                              |
| `highLimit`    | `Double`        | The maximum value allowed for a numerical property.                              |
| `format`       | `String`        | The format of the property, if applicable.                                       |
| `units`        | `String`        | The measurement units for the property (e.g., Celsius, kg).                      |
| `options`      | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).         |
| `nullable`     | `Boolean`       | Defines if the property can accept null values.                                  |
| `defaultValue` | `Mixed`         | The default value assigned to the property if none is provided.                  |
| `id`           | `String` (ULID) | The ULID of the location property (optional, for updating an existing property). |
| `notes`        | `String`        | Notes related to the location property.                                          |
| `enabled`      | `Boolean`       | Indicates if the property is active and enabled.                                 |
| `spare1`       | `String`        | Additional field for user-defined context.                                       |
| `spare2`       | `String`        | Additional field for user-defined context.                                       |
| `spare3`       | `String`        | Additional field for user-defined context.                                       |

## Code Examples

```python
# Retrieve a location property by ID or name
property = system.mes.location.getProperty('Temperature')

# Output the location property
print(property)
```