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
receive_request = system.mes.inventory.newReceiveRequest()

# Set basic attributes for the new receive request
receive_request['materialIdOrPath'] = 'Bottle/Milk'
receive_request['destinationLocationIdOrPath'] = 'DairyCo'
receive_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Generate the object structure for a new consume request object with no initial arguments
consume_request = system.mes.inventory.newConsumeRequest()

# Set basic attributes for the new consume request
consume_request['materialIdOrPath'] = 'Bottle/Milk'
consume_request['sourceLocationIdOrPath'] = 'DairyCo'
consume_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Build the request as a dictionary
inventory_actions_request = {
    'requests' : [receive_request, consume_request]
}

# Execute the inventory actions
system.mes.inventory.executeInventoryActions(**inventory_actions_request)
```
