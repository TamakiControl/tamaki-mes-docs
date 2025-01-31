---
sidebar_position: 13
title: "move"
description: "Moves inventory from the MES based on the provided parameters."
---

# system.mes.inventory.move

Moves inventory from the MES based on the provided parameters.

## Syntax
```python
system.mes.inventory.move(**move_request)
```

## Parameters

| Parameter                       | Type            | Description                                                        |
|---------------------------------|-----------------|--------------------------------------------------------------------|
| `type`                          | `String`        | The type of request used for inventory request deserialization.    |
| `quantity`                      | `Double`        | The quantity to move from the location.                            |
| `unitOfMeasureSymbol`           | `String`        | The symbol of the unit of measure for the quantity.                |
| `lotIdOrName`                   | `String`        | The ID or name of material lot to move.                            |
| `materialIdOrPath`              | `String`        | The ID or path of the material being moved.                        |
| `sourceLocationIdOrPath`        | `String`        | The ID or path of the location from which inventory will be moved. |
| `destinationLocationIdOrPath`   | `String`        | The ID or path of the location the moved inventory goes to.        |
| `operationId`                   | `String` (ULID) | The ID of the operation moving this inventory.                     |
| `productionOrderIdOrName`       | `String`        | The ID or name of the production order associated with the move.   |
| `materialReasonCodeId`          | `String` (ULID) | The ID of the material reason code to add additional context.      |
| `startDate`                     | `Instant`       | The start date and time of the move.                               |
| `endDate`                       | `Instant`       | The end date and time of the move.                                 |
| `ongoing`                       | `Boolean`       | Indicates whether this request is ongoing.                         |
| `destinationInventoryName`      | `String`        | The name of the inventory the moved inventory goes to.             |
| `notes`                         | `String`        | Notes related to the move request.                                 |
| `spare1`                        | `String`        | Additional field for user-defined context.                         |
| `spare2`                        | `String`        | Additional field for user-defined context.                         |
| `spare3`                        | `String`        | Additional field for user-defined context.                         |

## Returns

Returns a JSON representation of a material lot record for a Move Request.

## Code Examples

```python
# Create a new move request instance with no initial arguments
new_request = system.mes.inventory.newMoveRequest()

# Set basic attributes for the new move request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyFarm'
new_request['destinationLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Move the request
moved_request = system.mes.inventory.move(**new_request)

# Output the JSON representation of the moved request
print(moved_request)
```