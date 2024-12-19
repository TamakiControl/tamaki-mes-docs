---
sidebar_position: 3
title: "getLocation"
description: "Retrieves the location with the given id or path."
---

# system.mes.location.getLocation

## Method Description

Retrieves the location with the specified ID or path. This function returns a JSON representation of the location object
if found.

## Parameters

| Parameter  | Type   | Description                                 |
|------------|--------|---------------------------------------------|
| `idOrPath` | String | The ID or path of the location to retrieve. |

## Returns

A JSON/Dictionary representation of the location.

## Example Usage

```python
# Retrieve a location by ID or path
location = system.mes.location.getLocation("DariyCo/Plant1/Line1")
print(location.name)
```
