---
sidebar_position: 39
title: "executeInventoryActions"
description: "Executes a list of inventory actions in a single transaction. That means that if any of the actions fail, none of them will be executed, and any changes made to the database will be rolled back."
---

# system.mes.inventory.executeInventoryActions

## Description

Executes a list of inventory actions in a single transaction. That means that if any of the actions fail,
none of them will be executed, and any changes made to the database will be rolled back.

## Syntax

```python
system.mes.inventory.executeInventoryActions(**{'requests':[records]})
```

## Parameters

| Parameter  | Type             | Nullable | Description                                                                             |
|------------|------------------|----------|-----------------------------------------------------------------------------------------|
| `requests` | `List<Requests>` | False    | List of inventory actions to be executed. They would be in the format of a new request. |

## Returns

Returns a list of JSON representation of inventory lot records for the inventory actions executed.

## Code Examples

```python
# Generate the object structure for a new receive request object with no initial arguments
receiveRequest = system.mes.inventory.newReceiveRequest()

# Set basic attributes for the new receive request
receiveRequest['materialIdOrPath'] = 'Bottle/Milk'
receiveRequest['destinationLocationIdOrPath'] = 'DairyCo'
receiveRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Generate the object structure for a new consume request object with no initial arguments
consumeRequest = system.mes.inventory.newConsumeRequest()

# Set basic attributes for the new consume request
consumeRequest['materialIdOrPath'] = 'Bottle/Milk'
consumeRequest['sourceLocationIdOrPath'] = 'DairyCo'
consumeRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Build the request as a dictionary
inventoryActionsRequest = {
    'requests' : [receiveRequest, consumeRequest]
}

# Execute the inventory actions
system.mes.inventory.executeInventoryActions(**inventoryActionsRequest)
```
