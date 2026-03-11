---
sidebar_position: 9
title: "getDetailedProductionOrdersByLocationAndStatus"
description: "Retrieves detailed production orders by location ids or paths and statuses."
---

# system.mes.productionOrder.getDetailedProductionOrdersByLocationAndStatus

## Description

Retrieves a list of detailed [Production Orders](../../data-model/production-order-model/production-order) records
filtered by location IDs or paths and statuses.

## Syntax

```python
system.mes.productionOrder.getDetailedProductionOrdersByLocationAndStatus(locationIdsOrPaths, statuses)
```

## Parameters

| Parameter            | Type           | Nullable | Description                                                                                                         |
|----------------------|----------------|----------|---------------------------------------------------------------------------------------------------------------------|
| `locationIdsOrPaths` | `List[String]` | True     | A list of location IDs (ULIDs) or location paths to filter by.                                                      |
| `statuses`           | `List[String]` | True     | A list of statuses to filter by (e.g., `IDLE`, `SCHEDULED`, `RUNNING`, `PAUSED`, `STOPPED`, `CLOSED`, `CANCELLED`). |

## Returns

Returns a list of JSON objects representing detailed production orders that match the given location IDs or paths and
statuses. Each object contains expanded information including related entities such as property values and bill of
materials.

| Name                | Type                | Description                                                                                               |
|---------------------|---------------------|-----------------------------------------------------------------------------------------------------------|
| `productName`       | `String`            | The name of the material produce to be produced in this production order.                                 |
| `locationName`      | `String`            | The name of the location that is associated with this production order.                                   |
| `unitOfMeasureName` | `String`            | The name of the unit of measure that is associated with this production order.                            |
| `propertyValues`    | `List<JSON Object>` | The property values of the production order.                                                              |
| `billOfMaterials`   | `List<JSON Object>` | The bill of materials associated with this production order.                                              |
| `name`              | `String`            | The name of the production order.                                                                         |
| `productId`         | `String` (ULID)     | The ULID of the material produce to be produced.                                                          |
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
| `shiftRecordId`     | `String` (ULID)     | The ULID of the shift the production order started in.                                                    |
| `id`                | `String` (ULID)     | The ULID of the production order.                                                                         |
| `notes`             | `String`            | Notes related to the production order.                                                                    |
| `enabled`           | `Boolean`           | Indicates if the production order is active and enabled.                                                  |
| `spare1`            | `String`            | Additional field for user-defined context.                                                                |
| `spare2`            | `String`            | Additional field for user-defined context.                                                                |
| `spare3`            | `String`            | Additional field for user-defined context.                                                                |

## Code Examples

```python
# Retrieve detailed production orders for specific locations and statuses
locationIdsOrPaths = ['Enterprise/Site/Area/Line1', 'Enterprise/Site/Area/Line2']
statuses = ['RUNNING', 'SCHEDULED']

detailedOrders = system.mes.productionOrder.getDetailedProductionOrdersByLocationAndStatus(
    locationIdsOrPaths,
    statuses
)

# Output the list of detailed production orders
print(detailedOrders)
```

```python
# Retrieve all detailed production orders regardless of location or status
detailedOrders = system.mes.productionOrder.getDetailedProductionOrdersByLocationAndStatus(None, None)

# Output the list of detailed production orders
print(detailedOrders)
```

