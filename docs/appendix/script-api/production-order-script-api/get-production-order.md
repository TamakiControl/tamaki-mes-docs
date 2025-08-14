---
sidebar_position: 5
title: "getProductionOrder"
description: "Retrieves the production order with the given ID or name."
---

# system.mes.productionOrder.getProductionOrder

## Description

Retrieves a [Production Orders](../../data-model/production-order-model/production-order) record by its ID or name.

## Syntax

```python
system.mes.productionOrder.getProductionOrder(productionOrderIdOrName)
```

## Parameters

| Parameter                 | Type     | Nullable | Description                                         |
|---------------------------|----------|----------|-----------------------------------------------------|
| `productionOrderIdOrName` | `String` | False    | The ID or name of the production order to retrieve. |

## Returns

Returns a JSON representation of the production order. Returns nothing if no production order is found.

| Name                | Type                | Description                                                                                               |
|---------------------|---------------------|-----------------------------------------------------------------------------------------------------------|
| `productName`       | `String`            | The name of the material produce to be produced in this production order.                                 |
| `customerName`      | `String`            | The name of the customer that is associated with this production order.                                   |
| `locationName`      | `String`            | The name of the location that is associated with this production order.                                   |
| `unitOfMeasureName` | `String`            | The name of the unit of measure that is associated with this production order.                            |
| `propertyValues`    | `List<JSON Object>` | The property values of the production order.                                                              |
| `billOfMaterials`   | `List<JSON Object>` | The bill of materials associated with this production order.                                              |
| `name`              | `String`            | The name of the production order.                                                                         |
| `productId`         | `String` (ULID)     | The ULID of the material produce to be produced.                                                          |
| `customerId`        | `String` (ULID)     | The ULID of the customer that ordered this production order.                                              |
| `locationId`        | `String` (ULID)     | The ULID of the location associated with this production order.                                           |
| `status`            | `String`            | The status of the production order. (e.g., IDLE, SCHEDULED, RUNNING, PAUSED, STOPPED, CLOSED, CANCELLED). |
| `schedulePriority`  | `String`            | The schedule priority of the production order (e.g., LOW, NORMAL, HIGH, URGENT).                          |
| `quantity`          | `Double`            | The total quantity to be produced in this production order.                                               |
| `quantityProduced`  | `Double`            | The quantity that has been already produced in this production order.                                     |
| `quantityScheduled` | `Double`            | The quantity that has been scheduled to be produced in this production order.                             |
| `startDate`         | `Instant`           | The date this production order started.                                                                   |
| `endDate`           | `Instant`           | The date this production order ended.                                                                     |
| `dueDate`           | `Instant`           | The date this production order is due.                                                                    |
| `unitOfMeasureId`   | `String` (ULID)     | The ULID of the unit of measure for this production order.                                                |
| `scheduleShiftId`   | `String` (ULID)     | The ULID of the shift the production order started in.                                                    |
| `scheduleShiftName` | `String`            | The name of the shift the production order started in.                                                    |
| `id`                | `String` (ULID)     | The ULID of the production order.                                                                         |
| `notes`             | `String`            | Notes related to the production order.                                                                    |
| `enabled`           | `Boolean`           | Indicates if the production order is active and enabled.                                                  |
| `spare1`            | `String`            | Additional field for user-defined context.                                                                |
| `spare2`            | `String`            | Additional field for user-defined context.                                                                |
| `spare3`            | `String`            | Additional field for user-defined context.                                                                |

## Code Examples

```python
# Retrieve a production order by ID or name
production_order = system.mes.productionOrder.getProductionOrder('Order001')

# Output the production order
print(production_order)
```
