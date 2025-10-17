---
sidebar_position: 19
title: "getAllLocationProperties"
description: "Retrieves a list of all location properties."
---

# system.mes.location.getAllLocationProperties

## Description

Retrieves a list of all [Location Properties](../../data-model/location-model/location-property) records in the system.


## Permissions

This method requires the `LOCATION.READ.GET` permission.

## Syntax

```python
system.mes.location.getAllLocationProperties()
```

## Parameters

This method does not take any parameters.

## Returns

Returns a list of JSON objects representing all location properties in the system.

Each object in the list has the following properties:

| Name                  | Type            | Description                                                          |
|-----------------------|-----------------|----------------------------------------------------------------------|
| `name`                | `String`        | The name of the location property.                                   |
| `description`         | `String`        | A detailed description of the location property.                     |
| `dataType`            | `String`        | The data type of the property (e.g., String, Int8, Float8, Boolean). |
| `lowLimit`            | `Double`        | The minimum value for the property (for numeric types).              |
| `highLimit`           | `Double`        | The maximum value for the property (for numeric types).              |
| `format`              | `String`        | Format string for the property value display.                        |
| `unitOfMeasureId`     | `String` (ULID) | The ULID of the unit of measure associated with the property.        |
| `unitOfMeasureName`   | `String`        | The name of the unit of measure associated with the property.        |
| `unitOfMeasureSymbol` | `String`        | The symbol of the unit of measure associated with the property.      |
| `options`             | `String`        | Comma-separated list of options for the property.                    |
| `nullable`            | `Boolean`       | Indicates if the property can be null.                               |
| `defaultValue`        | `Object`        | Default value for the property.                                      |
| `id`                  | `String` (ULID) | The ULID of the location property.                                   |
| `enabled`             | `Boolean`       | Indicates if the property is active and enabled.                     |
| `notes`               | `String`        | Notes related to the property.                                       |
| `spare1`              | `String`        | Additional field for user-defined context.                           |
| `spare2`              | `String`        | Additional field for user-defined context.                           |
| `spare3`              | `String`        | Additional field for user-defined context.                           |

## Code Examples

```python
# Retrieve all location properties
allProperties = system.mes.location.getAllLocationProperties()

# Output the number of properties
print("Found {0} location properties".format(len(allProperties)))

# Loop through each property and print its name and data type
for prop in allProperties:
    print("Name: {0}, Data Type: {1}".format(prop['name'], prop['dataType']))
```
