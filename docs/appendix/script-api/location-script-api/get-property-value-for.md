---
sidebar_position: 27
title: "getPropertyValueFor"
description: "Retrieves a property value for a specified location and property."
---

# system.mes.location.getPropertyValueFor

## Description

Retrieves a [Location Property Values](../../data-model/location-model/location-property-value) record by its location ID or path and by its property ID or name.

## Syntax

```python
system.mes.location.getPropertyValueFor(locationIdOrPath, propertyIdOrName)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                        |
|--------------------|----------|----------|--------------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The ULID or path of the location.                                  |
| `propertyIdOrName` | `String` | False    | The ULID or name of the property for which the value is retrieved. |

## Returns

Returns a JSON representation of the location property value. Returns nothing if no location property value is found.

| Name         | Type            | Description                                                                                                        |
| ------------ | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `locationId` | `String` (ULID) | The ULID of the location.                                                                                          |
| `propertyId` | `String` (ULID) | The ULID of the location property.                                                                                 |
| `dataType`   | `String`        | The data type of the property value. Must be the same as the data type of the property.                            |
| `value`      | `Mixed`         | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`         | `String` (ULID) | The ULID of the location property value.                                                                           |
| `notes`      | `String`        | Notes related to the location property value.                                                                      |
| `enabled`    | `Boolean`       | Indicates if the property value is active and enabled.                                                             |
| `spare1`     | `String`        | Additional field for user-defined context.                                                                         |
| `spare2`     | `String`        | Additional field for user-defined context.                                                                         |
| `spare3`     | `String`        | Additional field for user-defined context.                                                                         |

## Code Examples

```python
# Retrieve a location property value by location ID or path and property ID or name
property_value = system.mes.location.getPropertyValueFor('DairyCo', 'Cows')

# Output the location property value
print(property_value)
```
