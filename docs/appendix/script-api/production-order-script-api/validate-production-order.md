---
sidebar_position: 9
title: "validateProductionOrder"
description: "Validates the specified parameters for a production order."
---

# system.mes.productionOrder.validateProductionOrder

## Description

Validates the specified parameters for a [Production Orders](../../data-model/production-order-model/production-order) record and returns any validation errors.
This only checks if the production order object can be saved based on the attributes given.

## Syntax

```python
system.mes.productionOrder.validateProductionOrder(**production_order_data)
```

## Parameters

| Parameter           | Type            | Description                                                                                               |
| ------------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| `name`              | `String`        | The name of the production order.                                                                         |
| `productId`         | `String` (ULID) | The ULID of the material produce to be produced.                                                          |
| `customerId`        | `String` (ULID) | The ULID of the customer that is associated with this production order.                                   |
| `locationId`        | `String` (ULID) | The ULID of the location associated with this production order.                                           |
| `status`            | `String`        | The status of the production order. (e.g., IDLE, SCHEDULED, RUNNING, PAUSED, STOPPED, CLOSED, CANCELLED). |
| `schedulePriority`  | `String`        | The schedule priority of the production order (e.g., LOW, NORMAL, HIGH, URGENT).                          |
| `quantity`          | `Double`        | The total quantity to be produced in this production order.                                               |
| `quantityProduced`  | `Double`        | The quantity that has been already produced in this production order.                                     |
| `quantityScheduled` | `Double`        | The quantity that has been scheduled to be produced in this production order.                             |
| `startDate`         | `Instant`       | The date this production order started.                                                                   |
| `endDate`           | `Instant`       | The date this production order ended.                                                                     |
| `dueDate`           | `Instant`       | The date this production order is due.                                                                    |
| `unitOfMeasureId`   | `String` (ULID) | The ULID of the unit of measure for this production order.                                                |
| `scheduleShiftId`   | `String` (ULID) | The ULID of the shift the production order started in.                                                    |
| `scheduleShiftName` | `String`        | The name of the shift the production order started in.                                                    |
| `id`                | `String` (ULID) | The ULID of the production order (optional, used for updating an existing production order).              |
| `notes`             | `String`        | Notes related to the production order.                                                                    |
| `enabled`           | `Boolean`       | Indicates if the production order is active and enabled.                                                  |
| `spare1`            | `String`        | Additional field for user-defined context.                                                                |
| `spare2`            | `String`        | Additional field for user-defined context.                                                                |
| `spare3`            | `String`        | Additional field for user-defined context.                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new production order object
production_order_data = system.mes.productionOrder.newProductionOrder()

# Set basic attributes for the updated production order
production_order_data['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
production_order_data['name'] = 'Order001'
production_order_data['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
# (You can continue setting other properties as needed here)

# Validate production order parameters
validation_errors = system.mes.productionOrder.validateProductionOrder(**production_order_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Production order parameters are valid.')
```
