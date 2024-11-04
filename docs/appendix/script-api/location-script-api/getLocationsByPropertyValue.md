---
sidebar_position: 2
title: "getLocationsByPropertyValue"
description: "Retrieves all locations with a specific property value."
---

# getLocationsByPropertyValue

Retrieves all locations that have the specified value for a given property.

## Method Description

This function searches through locations and returns those that match a specified property value. It allows users to
filter locations based on the ID or name of a property and a particular value for that property.

## Returns

A JSON list of all locations that have the specified property value.

## Parameters

| Parameter          | Type   | Description                                            |
|--------------------|--------|--------------------------------------------------------|
| `propertyIdOrName` | String | The ID or name of the location property to filter by.  |
| `propertyValue`    | Mixed  | The value to search for within the specified property. |

## Example Usage

```python
property_name = "erp_location"
value = "WRHS-01"
matching_locations = system.mes.location.getLocationsByPropertyValue(property_name, value)

if not matching_locations:
    raise Exception(f"No locations found with {property_name} = {value}")

```