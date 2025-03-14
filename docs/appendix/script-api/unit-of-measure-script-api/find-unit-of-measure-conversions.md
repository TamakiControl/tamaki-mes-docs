---
title: "findUnitOfMeasureConversions"
description: "Retrieves Units Of Measure Conversions based on the specified pagination, sort, and column constraint parameters."
sidebar_position: 0
---

# system.mes.unitOfMeasure.findUnitOfMeasureConversions

## Description

Retrieves [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion.md) 
based on the specified pagination, sort, and column constraint parameters.

## Permissions

This scripting function has no client permission restrictions.

## Syntax
Using Python keyword arguments, a [Query Request](../query-script-api/query-request.md) can be passed to the `findUnitsOfMeasure` function
without specifying each parameter individually. Please refer to the Query Request documentation for a list of parameters.
```python
system.mes.unitOfMeasure.findUnitsOfMeasure(**queryRequest)
```

### Returns

Returns a Query Result object with the following properties:

| Type                                                                                                                   | Name          | Description                                                                                                      |
|------------------------------------------------------------------------------------------------------------------------| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| List\<[UnitOfMeasureConversion](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion.md)>  | content       | The list of all records found that meet the specified criteria                                                   |
| Integer                                                                                                                | totalPages    | If pagination is used, this is the number of total pages of records in the database for the specified page size. |
| Long                                                                                                                   | totalElements | If pagination is used, this is the number of records in the database that meet the specified criteria.           |
| Integer                                                                                                                | pageSize      | If pagination is used, this is the specified page size.                                                          |
| Integer                                                                                                                | pageIndex     | If pagination is used, this is the specified page index.                                                         |
| Boolean                                                                                                                | hasContent    | True if an records were found that meet the specified criteria.                                                  |
| Boolean                                                                                                                | isFirst       | If pagination is used, this is true if the first page was returned.                                              |
| Boolean                                                                                                                | isLast        | If pagination is used, this is true if the last page was returned.                                               |
| Boolean                                                                                                                | hasNext       | If pagination is used, this is true if there is a page of content available after this one.                      |
| Boolean                                                                                                                | hasPrevious   | If pagination is used, this is true if there is a page of content available before this one.                     |

## Code Examples

Here is an example of how to use a Query Request to retrieve the first ten Units Of Measure created in 2024.


```python
queryRequest = system.mes.query.newQueryRequest()  

queryRequest["pageSize"] = 10
queryRequest["pageIndex"] = 0

filterRequest = system.mes.query.newFilterRequest()  
filterRequest["field"] = "createdDate"  
filterRequest["condition"] = "between"  
filterRequest["minDateValue"] = "2024-01-01T00:00:00Z"
filterRequest["maxDateValue"] = "2025-01-01T00:00:00Z"
    
filters = [filterRequest]  
  
queryRequest["filters"] = filters  

result = system.mes.unitOfMeasure.findUnitOfMeasureConversions(**queryRequest)
```

