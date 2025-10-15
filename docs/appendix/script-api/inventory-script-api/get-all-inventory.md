---
sidebar_position: 44
title: "getAllInventory"
description: "Retrieves all inventories."
---

# system.mes.inventory.getAllInventory

## Description

Retrieves all the [Inventories](../../data-model/inventory-model/inventory) records.


## Permissions

This method requires the `INVENTORY.READ.GET` permission.

## Syntax

```python
system.mes.inventory.getAllInventory()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all inventories.

## Example Usage

```python
# Retrieve all inventories
all_inventories = system.mes.inventory.getAllInventory()

# Output the list of inventories
print(all_inventories)
```
