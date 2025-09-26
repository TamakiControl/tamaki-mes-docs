---
sidebar_position: 5
title: "findPeople"
description: "Retrieves people based on the specified pagination, sort, and column constraint parameters."
---

# system.mes.personnel.findPeople

## Description

Retrieves [Person](../../data-model/personnel-model/personnel) records based on the specified pagination, sort, and column constraint parameters.

## Syntax

```
system.mes.personnel.findPeople(**queryRequest)
```

## Parameters

Using Python keyword arguments, a [Query Request](../query-script-api/new-query-request) can be passed to the `findPeople` function
without specifying each parameter individually. Please refer to the [Query Request](../query-script-api/new-query-request) documentation for a list of parameters.

| Parameter      | Type            | Nullable | Description                                                                                                                                                                                                                                                                                               |
|----------------|-----------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `queryRequest` | `Query Request`   | False    | A [Query Request](../query-script-api/new-query-request) with the desired pagination, sorting, and filtering parameters.   |

## Returns

Returns a Query Result object with the following properties:

| Name            | Type           | Description                                                                                                      |
| --------------- |----------------| ---------------------------------------------------------------------------------------------------------------- |
| `content`       | `List<Person>` | The list of all records found that meet the specified criteria                                                   |
| `totalPages`    | `Integer`      | If pagination is used, this is the number of total pages of records in the database for the specified page size. |
| `totalElements` | `Long`         | If pagination is used, this is the number of records in the database that meet the specified criteria.           |
| `pageSize`      | `Integer`      | If pagination is used, this is the specified page size.                                                          |
| `pageIndex`     | `Integer`      | If pagination is used, this is the specified page index.                                                         |
| `hasContent`    | `Boolean`      | True if any records were found that meet the specified criteria.                                                 |
| `isFirst`       | `Boolean`      | If pagination is used, this is true if the first page was returned.                                              |
| `isLast`        | `Boolean`      | If pagination is used, this is true if the last page was returned.                                               |
| `hasNext`       | `Boolean`      | If pagination is used, this is true if there is a page of content available after this one.                      |
| `hasPrevious`   | `Boolean`      | If pagination is used, this is true if there is a page of content available before this one.                     |

## Code Examples

```
# Generate the object structure for a new query request
queryRequest = system.mes.query.newQueryRequest()

# Set the basic attributes of the query request
queryRequest['pageSize'] = 10
queryRequest['pageIndex'] = 0

queryRequest['sortFields'] = ['lastName']
queryRequest['sortDirections'] = ['Ascending']

# Generate the object structure for a filter for the query request
filterRequest = system.mes.query.newFilterRequest()
filterRequest['field'] = 'createdDate'
filterRequest['condition'] = 'between'
filterRequest['minDateValue'] = '2025-01-01T00:00:00Z'
filterRequest['maxDateValue'] = '2026-01-01T00:00:00Z'

filters = [filterRequest]

queryRequest['filters'] = filters

# Retrieve the people that match the filter
result = system.mes.personnel.findPeople(**queryRequest)

# Output the people that match the filter.
print(result)
```