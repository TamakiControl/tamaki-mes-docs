---
sidebar_position: 2
title: 'checkLocationHasCapacity'
description: 'Checks if a location can store the given quantity of inventory.'
---

# system.mes.inventory.checkLocationHasCapacity

## Description

Checks if the [Locations](../../data-model/location-model/location) record can store the given quantity of material.

**NOTE:** If an inventory lot ID is provided, the material ID parameter becomes optional (cannot be None or left as null).
This can be left as an empty string.

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.inventory.checkLocationHasCapacity(locationIdOrPath, lotIdOrName, materialId, quantity)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                         |
| ------------------ | -------- | -------- | ------------------------------------------------------------------- |
| `locationIdOrPath` | `String` | False    | The ID or path of the location associated with the inventory.       |
| `lotIdOrName`      | `String` | False    | The ID or name of the inventory lot associated with the inventory.  |
| `materialIdOrPath` | `String` | False    | The ID or path of the material associated with the inventory's lot. |
| `quantity`         | `String` | False    | The quantity of inventory to store.                                 |

## Returns

Returns a boolean indicating whether the location can accommodate the given quantity of inventory.

## Code Examples

```python
# Check whether the location can store the given quantity of inventory
has_capacity = system.mes.inventory.checkLocationHasCapacity('DairyCo', '425e29ed-2780-430a-95cf-79431ec0e3e5', 'Bottle/Milk', 1454)

# Output the boolean result
print(has_capacity)
```
