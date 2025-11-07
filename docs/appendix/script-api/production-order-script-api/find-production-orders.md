---
sidebar_position: 4
title: "findProductionOrders"
description: "Retrieves production orders based on the specified pagination, sort, and column constraint parameters."
---

# system.mes.productionOrder.findProductionOrders

## Description

Retrieves [Production Orders](../../data-model/production-order-model/production-order) records based on the specified pagination, sort, and column constraint parameters.

## Syntax

```python
system.mes.productionOrder.findProductionOrders(**queryRequest)
```

## Parameters

Using Python keyword arguments, a [Query Request](../query-script-api/new-query-request) can be passed to the `findProductionOrders` function
without specifying each parameter individually. Please refer to the [Query Request](../query-script-api/new-query-request) documentation for a list of parameters.

| Parameter      | Type            | Nullable | Description                                                                                                                                                                                                                                                                                                      |
|----------------|-----------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `queryRequest` | `Query Request` | False    | A [Query Request](../query-script-api/new-query-request) with the desired pagination, sorting, and filtering parameters.  |

## Returns

Returns a Query Result object with the following properties:

| Name            | Type                                                                                       | Description                                                                                                      |
|-----------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `content`       | `List`&lt;[Production Order](../../data-model/production-order-model/production-order)&gt; | The list of all records found that meet the specified criteria                                                   |
| `totalPages`    | `Integer`                                                                                  | If pagination is used, this is the number of total pages of records in the database for the specified page size. |
| `totalElements` | `Long`                                                                                     | If pagination is used, this is the number of records in the database that meet the specified criteria.           |
| `pageSize`      | `Integer`                                                                                  | If pagination is used, this is the specified page size.                                                          |
| `pageIndex`     | `Integer`                                                                                  | If pagination is used, this is the specified page index.                                                         |
| `hasContent`    | `Boolean`                                                                                  | True if any records were found that meet the specified criteria.                                                 |
| `isFirst`       | `Boolean`                                                                                  | If pagination is used, this is true if the first page was returned.                                              |
| `isLast`        | `Boolean`                                                                                  | If pagination is used, this is true if the last page was returned.                                               |
| `hasNext`       | `Boolean`                                                                                  | If pagination is used, this is true if there is a page of content available after this one.                      |
| `hasPrevious`   | `Boolean`                                                                                  | If pagination is used, this is true if there is a page of content available before this one.                     |

### Production Order

| Name                | Type                | Description                                                                                               |
|---------------------|---------------------|-----------------------------------------------------------------------------------------------------------|
| `productName`       | `String`            | The name of the material produce to be produced in this production order.                                 |
| `locationName`      | `String`            | The name of the location that is associated with this production order.                                   |
| `unitOfMeasureName` | `String`            | The name of the unit of measure that is associated with this production order.                            |
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

Here is an example of how to use a Query Request to retrieve the first ten production orders created in 2025 sorted by their
name.

```python
# Generate the object structure for a new query request
queryRequest = system.mes.query.newQueryRequest()

# Set the basic attributes of the query request
queryRequest['pageSize'] = 10
queryRequest['pageIndex'] = 0

queryRequest['sortFields'] = ['name']
queryRequest['sortDirections'] = ['Ascending']

# Generate the object structure for a filter for the query request
filterRequest = system.mes.query.newFilterRequest()
filterRequest['field'] = 'createdDate'
filterRequest['condition'] = 'between'
filterRequest['minDateValue'] = '2025-01-01T00:00:00Z'
filterRequest['maxDateValue'] = '2026-01-01T00:00:00Z'

filters = [filterRequest]

queryRequest['filters'] = filters

# Retrieve the production orders that match the filter
result = system.mes.productionOrder.findProductionOrders(**queryRequest)

# Output the production orders that match the filter.
print(result)
```
