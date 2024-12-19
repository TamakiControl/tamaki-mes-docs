---
sidebar_position: 6
title: "getProperty"
description: "Retrieves a location property by its ID or name."
---

# system.mes.location.getProperty

Retrieves a location property by its specified ID or name.

## Method Description

This function retrieves the details of a location property based on the provided ULID or name. It is useful for
accessing specific property details, such as configuration and attributes, when the unique identifier or name is known.

## Returns

A JSON representation of the location property.

## Parameters

| Parameter  | Type   | Description                                            |
|------------|--------|--------------------------------------------------------|
| `idOrName` | String | The ULID or name of the location property to retrieve. |

## Example Usage

```python

    property = system.mes.location.getProperty(id_or_name)
    property['defaultValue'] = 100
    system.mes.location.saveProperty(**property)
