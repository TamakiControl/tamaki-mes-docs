---
sidebar_position: 20
title: "getLocationPropertyValues"
description: "Retrieves all property values for a specific location."
---

# system.mes.location.getLocationPropertyValues

## Description

Retrieves a list of all [Location Property Values](../../data-model/location-model/location-property-value) records for a given location.


## Permissions

This method requires the `LOCATION.READ.GET` permission.

## Syntax

```python
system.mes.location.getLocationPropertyValues(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Description                                                     |
|--------------------|----------|-----------------------------------------------------------------|
| `locationIdOrPath` | `String` | The ID or path of the location to retrieve property values for. |

## Returns

Returns a list of JSON objects representing all property values for the specified location.

Each object in the list has the following properties:

| Name         | Type            | Description                                                                 |
|--------------|-----------------|-----------------------------------------------------------------------------|
| `locationId` | `String` (ULID) | The ULID of the location this property value belongs to.                    |
| `propertyId` | `String` (ULID) | The ULID of the property this value is for.                                 |
| `value`      | `Object`        | The actual value of the property (type depends on the property's dataType). |
| `dataType`   | `String`        | The data type of the property value.                                        |
| `id`         | `String` (ULID) | The ULID of the location property value.                                    |
| `notes`      | `String`        | Notes related to the property value.                                        |
| `enabled`    | `Boolean`       | Indicates if the property value is active and enabled.                      |
| `spare1`     | `String`        | Additional field for user-defined context.                                  |
| `spare2`     | `String`        | Additional field for user-defined context.                                  |
| `spare3`     | `String`        | Additional field for user-defined context.                                  |

## Code Examples

```python
# Retrieve all property values for a specific location
propertyValues = system.mes.location.getLocationPropertyValues('DariyCo/Plant1')

# Output the number of property values
print("Found {0} property values for this location".format(len(propertyValues)))

# Loop through each property value and print its name and value
for propValue in propertyValues:
    print("Property: {0}, Value: {1}".format(propValue['propertyName'], propValue['value']))
```
