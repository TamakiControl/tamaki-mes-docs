---
sidebar_position: 1
title: "getInventory"
description: "Retrieves the inventory for a material lot at a location."
---

# system.mes.inventory.getInventory

## Method Description

Retrieves the inventory for a material lot at a specified location. This function returns a JSON representation of the
inventory as a Python dictionary.

## Parameters

| Parameter          | Type   | Description                         |
|--------------------|--------|-------------------------------------|
| `lotIdOrName`      | String | The ID or name of the material lot. |
| `locationIdOrPath` | String | The ID or path of the location.     |

## Returns

A JSON/Dictionary representation of the inventory record.

## Example Usage

```python
# Retrieve inventory for a material lot at a location
inventory = system.mes.inventory.getInventory("Lot123", "Warehouse/SectionA")
print(inventory)