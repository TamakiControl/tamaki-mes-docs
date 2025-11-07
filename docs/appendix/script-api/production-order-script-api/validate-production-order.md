---
sidebar_position: 9
title: "validateProductionOrder"
description: "Validates the specified parameters for a production order."
---

# system.mes.productionOrder.validateProductionOrder

## Description

Validates the specified parameters for a [Production Orders](../../data-model/production-order-model/production-order) record and returns any validation errors.
This only checks if the production order object can be saved based on the attributes given, without actually creating or modifying the production order. Use this function to verify your parameters before executing a save production order operation.

## Syntax

```python
system.mes.productionOrder.validateProductionOrder(**productionOrderData)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new production order object
productionOrderData = system.mes.productionOrder.newProductionOrder()

# Set basic attributes for the new production order
productionOrderData['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
productionOrderData['name'] = 'Order001'
productionOrderData['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
# (You can continue setting other properties as needed here)

# Validate production order parameters
validationErrors = system.mes.productionOrder.validateProductionOrder(**productionOrderData)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Production order parameters are valid.')
```
