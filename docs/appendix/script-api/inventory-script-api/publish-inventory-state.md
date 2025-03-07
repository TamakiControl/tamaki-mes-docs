---
sidebar_position: 41
title: "publishInventoryState"
description: "Publishes the current inventory state to the tag system."
---

# system.mes.inventory.publishInventoryState

## Description

**No Parameter:** Publishes all of the [Inventories](../../data-model/inventory-model/inventory) to the tag system.

**With a Parameter:** Publishes only the specified [Inventories](../../data-model/inventory-model/inventory) to the tag system given 
the ID or path of the location associated with the inventory.

## Syntax
```python
system.mes.inventory.publishInventoryState()
system.mes.inventory.publishInventoryState([locationIdsOrPaths])
```

## Parameters

**No Parameter:**
| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

**With a Parameter:**
| Parameter            | Type            | Description                                                         |
|----------------------|-----------------|---------------------------------------------------------------------|
| `locationIdsOrPaths` | `List\<String>` | List of IDs or paths of the location associated with the inventory. |

## Returns

If successful, no response is returned.

## Code Examples

```python
# Publish the tag for the specified inventories based on the location path
system.mes.inventory.publishInventoryState(['DariyCo/Plant1/Line1', 'DariyCo/Plant1/Line2'])
```