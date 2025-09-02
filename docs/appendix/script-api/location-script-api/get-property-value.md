---
sidebar_position: 28
title: "getPropertyValue"
description: "Retrieves a property value by its ID."
---

# system.mes.location.getPropertyValue

## Description

Retrieves a [Location Property Value](../../data-model/location-model/location-property-value) record directly by its ID.

## Syntax

```python
system.mes.location.getPropertyValue(id)
```

## Parameters

| Parameter | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| `id`      | `String` | The ULID of the location property value to retrieve |

## Returns

Returns a JSON representation of the location property value. Returns nothing if no location property value is found.

| Name         | Type            | Description                                                                                                        |
|--------------|-----------------|--------------------------------------------------------------------------------------------------------------------|
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

## Example

```python
# Get a location property value by its ID
propertyValueId = "01KR72DNT8-FXJL6QAB-9YV53M2P"
propertyValue = system.mes.location.getPropertyValue(propertyValueId)

if propertyValue:
    print("Property value: {0}".format(propertyValue['value']))
    print("For location: {0}".format(propertyValue['locationId']))
    print("For property: {0}".format(propertyValue['propertyId']))
else:
    print("Property value not found")
```
