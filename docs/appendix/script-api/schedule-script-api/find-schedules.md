---
sidebar_position: 0
title: "findSchedules"
description: "Retrieves schedules based on the specified pagination, sort, and column constraint parameters."
---

# system.mes.schedule.findSchedules

## Description

Retrieves [Schedules](../../data-model/schedule-model/schedule.md) based on the specified pagination, sort, and column constraint parameters.

## Syntax

```python
system.mes.schedule.findSchedules(**queryRequest)
```

## Parameters

Using Python keyword arguments, a [Query Request](../query-script-api/new-query-request.md) can be passed to the `findSchedules` function without specifying each parameter individually. Please refer to the [Query Request](../query-script-api/new-query-request.md) documentation for a list of parameters.

| Parameter      | Type            | Nullable | Description                                                                                                               |
|----------------|-----------------|----------|---------------------------------------------------------------------------------------------------------------------------|
| `queryRequest` | `Query Request` | False    | A [Query Request](../query-script-api/new-query-request.md) with the desired pagination, sorting, and filtering parameters.|

## Returns

Returns a Query Result object with the following properties:

| Name            | Type                                                               | Description                                                                                                      |
|-----------------|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `content`       | `List`&lt;[Schedule](../../data-model/schedule-model/schedule.md)&gt; | The list of all records found that meet the specified criteria                                                   |
| `totalPages`    | `Integer`                                                          | If pagination is used, this is the number of total pages of records in the database for the specified page size. |
| `totalElements` | `Long`                                                             | If pagination is used, this is the number of records in the database that meet the specified criteria.           |
| `pageSize`      | `Integer`                                                          | If pagination is used, this is the specified page size.                                                          |
| `pageIndex`     | `Integer`                                                          | If pagination is used, this is the specified page index.                                                         |
| `hasContent`    | `Boolean`                                                          | True if any records were found that meet the specified criteria.                                                 |
| `isFirst`       | `Boolean`                                                          | If pagination is used, this is true if the first page was returned.                                              |
| `isLast`        | `Boolean`                                                          | If pagination is used, this is true if the last page was returned.                                               |
| `hasNext`       | `Boolean`                                                          | If pagination is used, this is true if there is a page of content available after this one.                      |
| `hasPrevious`   | `Boolean`                                                          | If pagination is used, this is true if there is a page of content available before this one.                     |

## Code Examples

Here is an example of how to use a Query Request to retrieve the first ten schedules created in 2024 sorted by their name.

```python
# Generate the object structure for a new query request
queryRequest = system.mes.query.newQueryRequest()

# Set the basic attributes of the query request
queryRequest["pageSize"] = 10
queryRequest["pageIndex"] = 0

queryRequest["sortFields"] = ["name"]
queryRequest["sortDirections"] = ["Ascending"]

# Generate the object structure for a filter for the query request
filterRequest = system.mes.query.newFilterRequest()
filterRequest["field"] = "createdDate"
filterRequest["condition"] = "between"
filterRequest["minDateValue"] = "2024-01-01T00:00:00Z"
filterRequest["maxDateValue"] = "2025-01-01T00:00:00Z"

filters = [filterRequest]

queryRequest["filters"] = filters

# Retrieve the schedules that match the filter
result = system.mes.schedule.findSchedules(**queryRequest)

# Output the schedules that match the filter.
print(result)
``````