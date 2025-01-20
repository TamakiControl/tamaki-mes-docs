---
sidebar_position: 3
title: "getLocation"
description: "Retrieves the location with the given id or path."
---

# system.mes.location.getLocation

## Description

Retrieves a [Locations](../../data-model/location-model/location) record by its id or path.

## Syntax
```python
system.mes.location.getLocation(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                 |
|------------|----------|---------------------------------------------|
| `idOrPath` | `String` | The ID or path of the location to retrieve. |

## Returns

Returns a JSON representation of the location.

## Code Examples

```python
# Retrieve a location by ID or path
location = system.mes.location.getLocation('DariyCo/Plant1/Line1')

# Output the location
print(location)
```
