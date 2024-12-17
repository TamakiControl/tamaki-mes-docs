---
title: "Query Request"
description: "Defines a column, condition, and values to filter query data by."
sidebar_position: 0
---

# Query Request

A Query Request is used to define pagination, sorting, and filtering parameters when calling a `find` method.

## Code Examples

To get an empty query request object, use the `newQueryRequest` method:
```python
queryRequest = system.mes.query.newQueryRequest()
```

Here is an example of how to use a Query Request to retrieve the first ten materials created in 2024 sorted by their name.
```python  
queryRequest = system.mes.query.newQueryRequest()  

queryRequest["pageSize"] = 10
queryRequest["pageIndex"] = 0

queryRequest["sortFields"] = ["name"]
queryRequest["sortDirection"] = "Ascending"

filterRequest = system.mes.query.newFilterRequest()  
filterRequest["field"] = "createdDate"  
filterRequest["condition"] = "between"  
filterRequest["minDateValue"] = "2024-01-01T00:00:00Z"
filterRequest["maxDateValue"] = "2025-01-01T00:00:00Z"
    
filters = [filterRequest]  
  
queryRequest["filters"] = filters  

result = system.mes.material.findMaterials(**queryRequest)
```

## Parameters

| Type                 | Name          | Required                  |
| -------------------- | ------------- |---------------------------|
| Integer              | pageSize      | not required              |
| Integer              | pageIndex     | not required              |
| List\<String>        | sortFields    | not required              |
| String               | sortDirection | required, empty list okay |
| List\<[Filter Request](./filter-request.md)> | filters       | not required              |


## Pagination

Pagination is used to limit the number of records returned by a query. This is useful when working with large datasets. 
The `pageSize` parameter specifies the number of records to return, and the `pageIndex` parameter specifies the page 
number to return. If either parameter is not specified, all records that meet the filter criteria will be returned.

## Sorting
Sorting is used to order the records returned by a query. The `sortFields` parameter specifies the fields to sort by. Multiple fields can be specified in a list in the order to 
be sorted by, and should be formatted in camelCase. The `sortDirection` parameter specifies the direction to sort in. Accepted values are "Ascending" or "Descending" which 
can also be abbreviated as "asc" or "desc". 

## Filtering

Only records that match the conditions specified by the filters will be returned. The `filters` parameter can be a 
list of one or more [Filter Requests](./filter-request.md) that define conditions to filter by. If left empty, all 
records that meet the pagination and sorting criteria will be returned.

Alternatively, the filter property of a column of a perspective table can be used directly in place of a Filter Request.
To do this, combine the filters into a list and pass them to the `filters` parameter of the Query Request.

