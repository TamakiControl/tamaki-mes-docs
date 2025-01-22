---
sidebar_position: 28
title: "getPropertyValueFor"
description: "Retrieves a property value for a specified location and property."
---

# system.mes.location.getPropertyValueFor

## Description

Retrieves a [Location Property Values](../../data-model/location-model/location-property-value) record by its specified ID or name.

## Syntax
```python
system.mes.location.getPropertyValueFor(locationIdOrPath, propertyIdOrName)
```

## Parameters

| Parameter          | Type     | Description                                                        |
|--------------------|----------|--------------------------------------------------------------------|
| `locationIdOrPath` | `String` | The ULID or path of the location.                                  |
| `propertyIdOrName` | `String` | The ULID or name of the property for which the value is retrieved. |

## Returns

Returns a JSON representation of the location property value.

| Name           | Type            | Description                                                                             |
|----------------|-----------------|-----------------------------------------------------------------------------------------|
| `locationId`   | `String` (ULID) | The ULID of the location.                                                               |
| `propertyId`   | `String` (ULID) | The ULID of the location property.                                                      |
| `dataType`     | `String`        | The data type of the property value. Must be the same as the data type of the property. |
| `value`        | `Mixed`         | The value assigned to the property value if none is provided.                           |
| `id`           | `String` (ULID) | The ULID of the location property value (optional, for updating an existing property).  |
| `notes`        | `String`        | Notes related to the location property value.                                           |
| `enabled`      | `Boolean`       | Indicates if the property value is active and enabled.                                  |
| `spare1`       | `String`        | Additional field for user-defined context.                                              |
| `spare2`       | `String`        | Additional field for user-defined context.                                              |
| `spare3`       | `String`        | Additional field for user-defined context.                                              |

## Code Examples

```python
# Retrieve a location property value by location id or path and property id or name
property_value = system.mes.location.getPropertyValueFor('DairyCo', 'Cows')

# Output the location property value
print(property_value)
```