---
sidebar_position: 50
title: "findOeeModeRecords"
description: "Retrieves OEE mode records based on the specified pagination, sort, and column constraint parameters."
---

# system.mes.oee.findOeeModeRecords

## Description

Retrieves [OEE Mode Records](../../data-model/oee-model/oee-mode-record) based on the specified pagination, sort, and column constraint parameters.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.findOeeModeRecords(**queryRequest)
```

## Parameters

Using Python keyword arguments, a [Query Request](../query-script-api/new-query-request) can be passed to the `findOeeModeRecords` function
without specifying each parameter individually. Please refer to the [Query Request](../query-script-api/new-query-request) documentation for a list of parameters.

| Parameter      | Type            | Nullable | Description                                                                                                              |
|----------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------------|
| `queryRequest` | `Query Request` | False    | A [Query Request](../query-script-api/new-query-request) with the desired pagination, sorting, and filtering parameters. |

## Returns

Returns a Query Result object with the following properties:

| Name            | Type                                                                              | Description                                                                                                      |
|-----------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `content`       | `List`&lt;[OeeModeRecord](../../data-model/oee-model/oee-mode-record)&gt;         | The list of all records found that meet the specified criteria                                                   |
| `totalPages`    | `Integer`                                                                         | If pagination is used, this is the number of total pages of records in the database for the specified page size. |
| `totalElements` | `Long`                                                                            | If pagination is used, this is the number of records in the database that meet the specified criteria.           |
| `pageSize`      | `Integer`                                                                         | If pagination is used, this is the specified page size.                                                          |
| `pageIndex`     | `Integer`                                                                         | If pagination is used, this is the specified page index.                                                         |
| `hasContent`    | `Boolean`                                                                         | True if any records were found that meet the specified criteria.                                                 |
| `isFirst`       | `Boolean`                                                                         | If pagination is used, this is true if the first page was returned.                                              |
| `isLast`        | `Boolean`                                                                         | If pagination is used, this is true if the last page was returned.                                               |
| `hasNext`       | `Boolean`                                                                         | If pagination is used, this is true if there is a page of content available after this one.                      |
| `hasPrevious`   | `Boolean`                                                                         | If pagination is used, this is true if there is a page of content available before this one.                     |

Each `OeeModeRecordDTO` in `content` has the following properties:

| Name                 | Type                     | Nullable | Description                                                                      | Default Value          |
|----------------------|--------------------------|----------|----------------------------------------------------------------------------------|------------------------|
| `id`                 | `String`                 | `True`   | The id of the OEE Mode Record                                                    | `null`                 |
| `locationId`         | `String`                 | `False`  | Identifier of the associated location where this mode was recorded               | `null`                 |
| `locationName`       | `String`                 | `True`   | Name of the associated location                                                  | `null`                 |
| `locationPath`       | `String`                 | `True`   | Path of the associated location where this mode was recorded                     | `null`                 |
| `code`               | `Integer`                | `False`  | Integer mode number                                                              | `null`                 |
| `status`             | `Status`                 | `False`  | Status of the OEE mode record (e.g., running, faulted, canceled, complete)       | `UNKNOWN`              |
| `startDate`          | `Instant`                | `False`  | Start date and time of the mode record                                           | `Instant.now()`        |
| `endDate`            | `Instant`                | `True`   | End date and time of the mode record                                             | `null`                 |
| `duration`           | `Double`                 | `False`  | Total duration of the mode record in seconds                                     | `0.0`                  |
| `overrunDurationSec` | `Double`                 | `False`  | Duration in seconds that the machine has overrun its scheduled downtime          | `0.0`                  |
| `name`               | `String`                 | `False`  | Name of the mode                                                                 | `null`                 |
| `calculationType`    | `OeeModeCalculationType` | `False`  | Specifies how this mode should be factored into OEE calculations                 | `SCHEDULED_PRODUCTION` |
| `color`              | `String`                 | `False`  | Hex color code representing the mode visually                                    | `"#000000"`            |
| `expectedDuration`   | `Double`                 | `True`   | Expected duration of the mode in seconds                                         | `0.0`                  |
| `notes`              | `String`                 | `True`   | Notes associated with the OEE Mode Record                                        | `null`                 |
| `enabled`            | `boolean`                | `True`   | Indicates whether the OEE Mode Record is enabled                                 | `true`                 |
| `spare1`             | `String`                 | `True`   | Extra field 1                                                                    | `null`                 |
| `spare2`             | `String`                 | `True`   | Extra field 2                                                                    | `null`                 |
| `spare3`             | `String`                 | `True`   | Extra field 3                                                                    | `null`                 |

## Code Examples

Here is an example of how to use a Query Request to retrieve the first ten OEE mode records created in 2025, sorted
by start date.

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
filterRequest['minDateValue'] = '2025-01-01T00:00:00Z' # OR system.date.getDate(2025, 0, 1)
filterRequest['maxDateValue'] = '2026-01-01T00:00:00Z' # OR system.date.getDate(2026, 0, 1)

filters = [filterRequest]

queryRequest['filters'] = filters

# Retrieve the OEE mode records that match the filter
result = system.mes.oee.findOeeModeRecords(**queryRequest)

# Output the OEE mode records that match the filter
print(result)
```

