---
sidebar_position: 3
title: "saveProductionOrder"
description: "Creates or updates a production order with specified parameters."
---

# system.mes.productionOrder.saveProductionOrder

## Description

Creates or updates a [Production Orders](../../data-model/production-order-model/production-order) record in the system based on the provided parameters.


## Permissions

This method requires the `PRODUCTION_ORDER.WRITE.SAVE` permission.

## Syntax

```python
system.mes.productionOrder.saveProductionOrder(**production_order_data)
```

## Parameters

| Parameter               | Type            | Nullable | Description                                                                                          |
|-------------------------|-----------------|----------|------------------------------------------------------------------------------------------------------|
| `name`                  | `String`        | False    | The name of the production order.                                                                    |
| `productId`             | `String` (ULID) | False    | The ULID of the material produce to be produced.                                                     |
| `customerId`            | `String` (ULID) | True     | The ULID of the customer that is associated with this production order.                              |
| `locationId`            | `String` (ULID) | True     | The ULID of the location associated with this production order.                                      |
| `status`                | `String`        | False    | The status of the production order. Default value is `IDLE`                                          |
| `schedulePriority`      | `String`        | False    | The schedule priority of the production order. Default value is `NORMAL`                             |
| `quantity`              | `Double`        | False    | The total quantity to be produced in this production order. Default value is `0.0`                   |
| `quantityProduced`      | `Double`        | False    | The quantity that has been already produced in this production order. Default value is `0.0`         |
| `quantityScheduled`     | `Double`        | False    | The quantity that has been scheduled to be produced in this production order. Default value is `0.0` |
| `startDate`             | `Instant`       | True     | The date this production order started.                                                              |
| `endDate`               | `Instant`       | True     | The date this production order ended.                                                                |
| `dueDate`               | `Instant`       | True     | The date this production order is due.                                                               |
| `unitOfMeasureId`       | `String` (ULID) | False    | The ULID of the unit of measure for this production order.                                           |
| `scheduleShiftRecordId` | `String` (ULID) | True     | The ULID of the shift record the production order started in.                                        |
| `id`                    | `String` (ULID) | True     | The ULID of the production order (optional, used for updating an existing production order).         |
| `notes`                 | `String`        | True     | Notes related to the production order.                                                               |
| `enabled`               | `Boolean`       | True     | Indicates if the production order is active and enabled. Default value is `true`                     |
| `spare1`                | `String`        | True     | Additional field for user-defined context.                                                           |
| `spare2`                | `String`        | True     | Additional field for user-defined context.                                                           |
| `spare3`                | `String`        | True     | Additional field for user-defined context.                                                           |

## Returns

Returns a JSON representation of the saved production order.

## Code Examples

```python
# Generate the object structure for a new production order object, set the initial arguments and save it
new_production_order = system.mes.productionOrder.newProductionOrder()
new_production_order['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
new_production_order['name'] = 'Order002'
new_production_order['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
saved_production_order = system.mes.productionOrder.saveProductionOrder(**new_production_order)

# Output the JSON representation of the saved production order
print(saved_production_order)

# Generate the object structure for another new production order to update the previous production order
production_order_data = system.mes.productionOrder.newProductionOrder()

# Set basic attributes for the updated production order
production_order_data['id'] = saved_production_order.id
production_order_data['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
production_order_data['name'] = 'Order002'
production_order_data['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
production_order_data['quantity'] = '100'
# (You can continue setting other properties as needed here)

# Save the production order to update it in the system
updated_production_order = system.mes.productionOrder.saveProductionOrder(**production_order_data)

# Output the JSON representation of the updated production order
print(updated_production_order)
```
