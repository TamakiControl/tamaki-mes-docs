---
sidebar_position: 8
title: "getAllLocations"
description: "Retrieves all locations."
---

# system.mes.location.getAllLocations

## Description

Retrieves a list of all [Locations](../../data-model/location-model/location) records in the system.

## Syntax

```python
system.mes.location.getAllLocations()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all locations.

## Code Examples

```python
# Retrieve all locations
all_locations = system.mes.location.getAllLocations()

# Output the list of locations
print(all_locations)
```
