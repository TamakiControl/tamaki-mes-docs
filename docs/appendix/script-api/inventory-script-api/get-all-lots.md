---
sidebar_position: 52
title: "getAllLots"
description: "Retrieves all inventory lots."
---

# system.mes.inventory.getAllLots

## Description

Retrieves a list of all [Inventory Lots](../../data-model/inventory-model/inventory-lot) records in the system.

## Syntax

```python
system.mes.inventory.getAllLots()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all inventory lots.

## Code Examples

```python
# Retrieve all inventory lots
all_lots = system.mes.inventory.getAllLots()

# Output the list of inventory lots
print(all_lots)
```
