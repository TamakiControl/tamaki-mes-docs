---
sidebar_position: 6
title: "getLocationsByPartialPath"
description: "Retrieves all locations that have paths that contain the provided path."
---

# system.mes.location.getLocationsByPartialPath

## Description

Retrieves all [Locations](../../data-model/location-model/location) records with paths that contain the specified partial path.

## Syntax

```python
system.mes.location.getLocationsByPartialPath('partial/path/example')
```

## Parameters

| Parameter | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| `path`    | `String` | The partial path to search for in locations. |

## Returns

Returns a list of JSON objects representing all locations with paths that include the given partial path.

## Code Examples

```python
# Retrieve locations by partial path
matching_locations = system.mes.location.getLocationsByPartialPath('DairyCo')

# Output the list of matching locations
print(matching_locations)
```
