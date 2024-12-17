---
sidebar_position: 6
title: "getLocationsByPartialPath"
description: "Retrieves all locations that have paths that contain the provided path."
---

# system.mes.location.getLocationsByPartialPath

## Method Description

Retrieves all locations with paths that contain the specified partial path. This function returns a JSON list of all
matching locations.

## Parameters

| Parameter | Type   | Description                                  |
|-----------|--------|----------------------------------------------|
| `path`    | String | The partial path to search for in locations. |

## Returns

A JSON list of all locations with paths that contain the provided partial path.

## Example Usage

```python
# Retrieve locations by partial path
matching_locations = system.mes.location.getLocationsByPartialPath(path="partial/path/example")

# Output the list of matching locations
print(matching_locations)
