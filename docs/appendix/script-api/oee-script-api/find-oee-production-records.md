---
sidebar_position: 49
title: "findOeeProductionRecords"
description: "Retrieves OEE production records based on the specified pagination, sort, and column constraint parameters."
---

# system.mes.oee.findOeeProductionRecords

## Description

Retrieves [OEE Production Records](../../data-model/oee-model/oee-production-record) based on the specified pagination, sort, and column constraint parameters.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.findOeeProductionRecords(**queryRequest)
```

## Parameters

Using Python keyword arguments, a [Query Request](../query-script-api/new-query-request) can be passed to the `findOeeProductionRecords` function
without specifying each parameter individually. Please refer to the [Query Request](../query-script-api/new-query-request) documentation for a list of parameters.

| Parameter      | Type            | Nullable | Description                                                                                                              |
|----------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------------|
| `queryRequest` | `Query Request` | False    | A [Query Request](../query-script-api/new-query-request) with the desired pagination, sorting, and filtering parameters. |

## Returns

Returns a Query Result object with the following properties:

| Name            | Type                                                                                              | Description                                                                                                      |
|-----------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `content`       | `List`&lt;[OeeProductionRecord](../../data-model/oee-model/oee-production-record)&gt;             | The list of all records found that meet the specified criteria                                                   |
| `totalPages`    | `Integer`                                                                                         | If pagination is used, this is the number of total pages of records in the database for the specified page size. |
| `totalElements` | `Long`                                                                                            | If pagination is used, this is the number of records in the database that meet the specified criteria.           |
| `pageSize`      | `Integer`                                                                                         | If pagination is used, this is the specified page size.                                                          |
| `pageIndex`     | `Integer`                                                                                         | If pagination is used, this is the specified page index.                                                         |
| `hasContent`    | `Boolean`                                                                                         | True if any records were found that meet the specified criteria.                                                 |
| `isFirst`       | `Boolean`                                                                                         | If pagination is used, this is true if the first page was returned.                                              |
| `isLast`        | `Boolean`                                                                                         | If pagination is used, this is true if the last page was returned.                                               |
| `hasNext`       | `Boolean`                                                                                         | If pagination is used, this is true if there is a page of content available after this one.                      |
| `hasPrevious`   | `Boolean`                                                                                         | If pagination is used, this is true if there is a page of content available before this one.                     |

Each `OeeProductionRecordDTO` in `content` has the following properties:

| Name                             | Type                 | Nullable | Description                                                                         | Default Value   |
|----------------------------------|----------------------|----------|-------------------------------------------------------------------------------------|-----------------|
| `id`                             | `String`             | `True`   | The id of the OEE Production Record                                                 | `null`          |
| `locationId`                     | `String`             | `False`  | Identifier of the associated location where this OEE production record was captured | `null`          |
| `locationPath`                   | `String`             | `True`   | Path of the location where this OEE production record was captured                  | `null`          |
| `locationName`                   | `String`             | `True`   | Name of the associated location                                                     | `null`          |
| `status`                         | `Status`             | `False`  | Status of the OEE production record (e.g., running, faulted, canceled, complete)    | `UNKNOWN`       |
| `startDate`                      | `Instant`            | `False`  | Start date and time of the OEE production record                                    | `Instant.now()` |
| `endDate`                        | `Instant`            | `True`   | End date and time of the OEE production record                                      | `null`          |
| `totalDurationSec`               | `Double`             | `False`  | Total duration of the OEE production record in seconds                              | `0.0`           |
| `performanceReasonId`            | `String`             | `True`   | The id of the associated performance reason, if applicable                          | `null`          |
| `performanceReasonName`          | `String`             | `True`   | The name of the associated performance reason, if applicable                        | `null`          |
| `performanceReasonPath`          | `String`             | `True`   | The path of the associated performance reason, if applicable                        | `null`          |
| `infeedCount`                    | `Double`             | `False`  | Total number of infeed units during this record period                              | `0.0`           |
| `expectedInfeedCount`            | `Double`             | `False`  | Expected number of infeed units during this record period                           | `0.0`           |
| `qualityStrategy`                | `OeeQualityStrategy` | `False`  | Quality Strategy for this OEE Production Record                                     | `WASTE_COUNT`   |
| `outfeedCount`                   | `Double`             | `False`  | Total number of outfeed units recorded during this period                           | `0.0`           |
| `infeedCountUnitOfMeasureId`     | `String`             | `True`   | Identifier of the unit of measure for the infeed count                              | `null`          |
| `infeedCountUnitOfMeasureName`   | `String`             | `True`   | Name of the unit of measure for the infeed count                                    | `null`          |
| `infeedCountUnitOfMeasureSymbol` | `String`             | `True`   | Symbol of the unit of measure for the infeed count                                  | `null`          |
| `infeedRateTimeUnits`            | `TimeUnit`           | `False`  | Unit of measure for the machine infeed rate & standard rate                         | `MINUTES`       |
| `stateRecordId`                  | `String`             | `True`   | Identifier of the associated state record                                           | `null`          |
| `standardRate`                   | `Double`             | `True`   | The standard rate for this record                                                   | `0.0`           |
| `productionOrderId`              | `String`             | `True`   | The id of the production order associated with this OEE production record           | `null`          |
| `productionOrderName`            | `String`             | `True`   | The name of the production order associated with this OEE production record         | `null`          |
| `notes`                          | `String`             | `True`   | Notes associated with the OEE Production Record                                     | `null`          |
| `enabled`                        | `boolean`            | `True`   | Indicates whether the OEE Production Record is enabled                              | `true`          |
| `spare1`                         | `String`             | `True`   | Extra field 1                                                                       | `null`          |
| `spare2`                         | `String`             | `True`   | Extra field 2                                                                       | `null`          |
| `spare3`                         | `String`             | `True`   | Extra field 3                                                                       | `null`          |

## Code Examples

Here is an example of how to use a Query Request to retrieve the first ten OEE production records created in 2025,
sorted by start date.

```python
# Generate the object structure for a new query request
queryRequest = system.mes.query.newQueryRequest()

# Set the basic attributes of the query request
queryRequest['pageSize'] = 10
queryRequest['pageIndex'] = 0

queryRequest['sortFields'] = ['startDate']
queryRequest['sortDirections'] = ['Ascending']

# Generate the object structure for a filter for the query request
filterRequest = system.mes.query.newFilterRequest()
filterRequest['field'] = 'startDate'
filterRequest['condition'] = 'between'
filterRequest['minDateValue'] = '2025-01-01T00:00:00Z'
filterRequest['maxDateValue'] = '2026-01-01T00:00:00Z'

filters = [filterRequest]

queryRequest['filters'] = filters

# Retrieve the OEE production records that match the filter
result = system.mes.oee.findOeeProductionRecords(**queryRequest)

# Output the OEE production records that match the filter
print(result)
```

