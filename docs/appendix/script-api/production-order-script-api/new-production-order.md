---
sidebar_position: 2
title: "newProductionOrder"
description: "Generates an empty non-persisted production orders object to provide the structure to retrieve records from the database."
---

# system.mes.productionOrder.newProductionOrder

Generates an empty non-persisted [Production Orders](../../data-model/production-order-model/production-order) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProductionOrder](./save-production-order) method in order to persist the record.

## Syntax

```python
system.mes.productionOrder.newProductionOrder()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created production order object. The following is a list of keys and default values:

| Key                 | Default Value |
| ------------------- | ------------- |
| `name`              | `null`        |
| `productId`         | `null`        |
| `customerId`        | `null`        |
| `locationId`        | `null`        |
| `status`            | `IDLE`        |
| `schedulePriority`  | `NORMAL`      |
| `quantity`          | `0`           |
| `quantityProduced`  | `0`           |
| `quantityScheduled` | `0`           |
| `startDate`         | `null`        |
| `endDate`           | `null`        |
| `dueDate`           | `null`        |
| `unitOfMeasureId`   | `null`        |
| `scheduleShiftId`   | `null`        |
| `scheduleShiftName` | `null`        |
| `id`                | `null`        |
| `notes`             | `null`        |
| `enabled`           | `true`        |
| `spare1`            | `null`        |
| `spare2`            | `null`        |
| `spare3`            | `null`        |

## Code Examples

```python
# Generate the object structure for a new production order object with no initial arguments
new_production_order = system.mes.productionOrder.newProductionOrder()

# Set basic attributes for the new production order
new_production_order['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
new_production_order['name'] = 'Order001'
new_production_order['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
# (You can continue setting other properties as needed here)

# Save the new production order to the system
saved_production_order = system.mes.productionOrder.saveProductionOrder(**new_production_order)

# Output the JSON representation of the saved production order
print(saved_production_order)
```
