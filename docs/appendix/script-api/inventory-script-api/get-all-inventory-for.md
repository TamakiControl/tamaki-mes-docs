---
sidebar_position: 47
title: "getAllInventoryForLocationAndChildren"
description: "Retrieves all inventories at a given location and its children."
---

# system.mes.inventory.getAllInventoryForLocationAndChildren

## Description

Retrieves all [Inventories](../../data-model/inventory-model/inventory) for a location, material, lot, and/or statuses. Any of the parameters can be left blank to not filter by that parameter. If location is provided it will search for inventory at that location and all child locations.

## Syntax

```python
system.mes.inventory.getAllInventoryFor(locationIdOrPath, materialIdOrPath, lotId, statuses)
```

## Parameters

| Parameter          | Type            | Nullable | Description                                                                                                        |
|--------------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------|
| `locationIdOrPath` | `String`        | True     | The ID or path of the location with the inventory.                                                                 |
| `materialIdOrPath` | `String`        | True     | The ID or path of the material of the inventory to search for. This can also be the id or path of a Material Class |
| `lotId`            | `String` (ULID) | True     | The ID of the lot for the inventory to search for.                                                                 |
| `statuses`         | `String[]`      | True     | A list of lot statuses to filter by. If not provided, inventory for lots of all statuses will be returned.         |


## Returns

Returns a list of JSON objects representing all inventories found matching the provided criteria. If no inventories are found, an empty list is returned.

## Example Usage

```python
# Retrieve all inventories for a given location and its children, material, lot, and/or statuses
allInventories = system.mes.inventory.getAllInventoryFor('DairyCo', 'RAW MATERIALS', None, ['AVAILABLE', 'OPEN'])

# Output the list of inventories
print(allInventories)
```
