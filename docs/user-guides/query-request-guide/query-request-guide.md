---
title: "Query Request"
description: "Defines a column, condition, and values to filter query data by."
sidebar_position: 1
---

# Query Request

In Tamaki MES, you can query the database using a structured method known as a query request. A query request allows
you to specify pagination, sorting, and filtering parameters to refine the data you retrieve without needing to write 
an SQL query. This guide will walk you through the components of a query request and provide examples of how to use it 
effectively.

Query requests can be used with the following methods

- [system.mes.material.findMaterials](../../appendix/script-api/material-script-api/find-materials.md)
- [system.mes.material.findMaterialClasses](../../appendix/script-api/material-script-api/find-material-classes.md)
- [system.mes.material.findMaterialReasonCodes](../../appendix/script-api/material-script-api/find-material-reason-codes.md)
- [system.mes.personnel.findPeople](../../appendix/script-api/personnel-script-api/find-people.md)
- [system.mes.personnel.findDepartments](../../appendix/script-api/personnel-script-api/find-departments.md)
- [system.mes.role.findRoles](../../appendix/script-api/role-script-api/find-roles.md)
- [system.mes.location.findLocations](../../appendix/script-api/location-script-api/find-locations.md)
- [system.mes.inventory.findLots](../../appendix/script-api/inventory-script-api/find-lots.md)
- [system.mes.operation.findOperations](../../appendix/script-api/operation-script-api/find-operations.md)
- [system.mes.operation.findOperationRecords](../../appendix/script-api/operation-script-api/find-operation-records.md)
- [system.mes.productionOrder.findProductionOrders](../../appendix/script-api/production-order-script-api/find-production-orders.md)
- [system.mes.schedule.findSchedules](../../appendix/script-api/schedule-script-api/find-schedules.md)
- [system.mes.unitOfMeasure.findUnitOfMeasureConversions](../../appendix/script-api/unit-of-measure-script-api/find-unit-of-measure-conversions.md)

## Pagination
Pagination is used to limit the number of records returned by a query. This is useful when working with large datasets.
The `pageSize` parameter specifies the number of records to return, and the `pageIndex` parameter specifies the page
number to return. If either parameter is not specified, pagination is disabled and all records that meet the filter 
criteria will be returned.

## Sorting
Sorting is used to order the records returned by a query. The `sortFields` parameter specifies the fields to sort by. 
Multiple fields can be specified in a list in the order to be sorted by, and should be formatted in camelCase. The 
`sortDirection` parameter specifies the direction to sort in. Accepted values are "Ascending" or "Descending" which
can also be abbreviated as "asc" or "desc".

## Filtering
Only records that match the conditions specified by the filters will be returned. The `filters` parameter can be a
list of one or more [Filter Requests](./filter-request-guide.md) that define conditions to filter by. If left empty, all
records that meet the pagination and sorting criteria will be returned.
Alternatively, the filter property of a column of a perspective table can be used directly in place of a Filter Request.
To do this, combine the filters into a list and pass them to the `filters` parameter of the Query Request.



## Code Examples
To get an empty query request object, use [newQueryRequest](../../appendix/script-api/query-script-api/new-query-request.md):

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
