---
sidebar_position: 4
title: "getAllLocations"
description: "Retrieves all locations."
---

# system.mes.location.getAllLocations

## Method Description

Retrieves a list of all locations in the system. This function returns a JSON array representing each location.

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

A JSON list of all locations.

## Example Usage

```python
# Retrieve all locations
all_locations = system.mes.location.getAllLocations()

# Output the list of locations
print(all_locations)
