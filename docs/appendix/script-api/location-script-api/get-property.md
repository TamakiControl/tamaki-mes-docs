---
sidebar_position: 18
title: "getProperty"
description: "Retrieves a location property by its ID or name."
---

# system.mes.location.getProperty

## Description

Retrieves a [Location Properties](../../data-model/location-model/location-property) by its specified ID or name.

## Syntax
```python
system.mes.location.getProperty(idOrName)
```

## Parameters

| Parameter  | Type     | Description                                            |
|------------|----------|--------------------------------------------------------|
| `idOrName` | `String` | The ULID or name of the location property to retrieve. |

## Returns

A JSON representation of the location property.

## Code Examples

```python
# Retrieve a location property by ID or name
property = system.mes.location.getProperty('Temperature')

# Output the location property
print(property)
```