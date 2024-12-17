---
title: "Filter Request"
description: "Defines a column, condition, and values to filter query data by."
sidebar_position: 0
---

# Filter Request

A Filter Request is used as a part of a [Query Request](./query-request.md) to filter records retrieved when calling a 
`find` method. It is analogous to the `WHERE` clause in an SQL query. Only records that meet the condition specified in 
the Filter Request will be returned.

## Code Examples

To get an empty filter request object, use the `newFilterRequest` method:
```python
filterRequest = system.mes.query.newFilterRequest()
```

Here is an example of how to use a Filter Request to retrieve all materials created in 2024 that contain "can" in 
their name.
```python  
filterRequestOne = system.mes.query.newFilterRequest()  
filterRequestOne["field"] = "createdDate"  
filterRequestOne["condition"] = "between"  
filterRequestOne["minDateValue"] = "2024-01-01T00:00:00Z"
filterRequestOne["maxDateValue"] = "2025-01-01T00:00:00Z"

filterRequestTwo = system.mes.query.newFilterRequest()  
filterRequestTwo["field"] = "name"  
filterRequestTwo["condition"] = "contains"  
filterRequestTwo["stringValue"] = "can"  
    
filters = [filterRequestOne, filterRequestTwo]  
  
queryRequest = system.mes.query.newQueryRequest()  
queryRequest["filters"] = filters  
result = system.mes.material.findMaterials(**queryRequest)  
```

## Parameters 

| Type   | Name           | Required                                |
|--------| -------------- | --------------------------------------- |
| String | field          | required                                |
| String | type           | not required (automatically determined) |
| String | condition      | required                                |
| String | stringValue    | one or more values are required         |
| Sumber | numberValue    | one or more values are required         |
| String | dateValue      | one or more values are required         |
| Number | minNumberValue | one or more values are required         |
| Number | maxNumberValue | one or more values are required         |
| String | minDateValue   | one or more values are required         |
| String | maxDateValue   | one or more values are required         |

## Field
The `field` can be any field of the object being queried. It should be formatted in camelCase. Here is one way to see
what fields are available for a given object:

```python
material = system.mes.material.newMaterial()
print(material)
```

This will print an empty material object with all available fields.

## Conditions
Conditions can be expressed in uppercase or lowercase and with or without underscore spacing. Here are the available conditions that can be used in a Filter Request:

| Condition                | Readable Format          | Compatible Types              | SQL Equivalent      |
| ------------------------ | ------------------------ | ----------------------------- |---------------------|
| EQUALS                   | equals                   | string, number, boolean, date | =                   |
| NOT_EQUALS               | not equals               | string, number, boolean, date | !=, NOT =, <>       |
| TRUE                     | true                     | boolean                       | = TRUE              |
| FALSE                    | false                    | boolean                       | = FALSE             |
| CONTAINS                 | contains                 | string                        | LIKE '%value%'      |
| STARTS_WITH              | starts with              | string                        | LIKE 'value%'       |
| ENDS_WITH                | ends with                | string                        | LIKE '%value'       |
| GREATER_THAN             | greater than             | number, date                  | \>                  |
| GREATER_THAN_OR_EQUAL_TO | greater than or equal to | number, date                  | \>=                 |
| LESS_THAN                | less than                | number, date                  | <                   |
| LESS_THAN_OR_EQUAL_TO    | less than or equal to    | number, date                  | <=                  |
| BETWEEN                  | between                  | number, date                  | BETWEEN min AND max |

## Value

Use the `value` property that corresponds the type of the specified `field`. If the `condition` is `BETWEEN`, use 
either the `minNumberValue` and `maxNumberValue` properties or the `minDateValue` and `maxDateValue` properties. 

| Field Type | Property      | Property when using the `BETWEEN` condition | 
| ---------- | ------------- |---------------------------------------------|
| string     | `stringValue` |                                             |
| number     | `numberValue` | `minNumberValue` and `maxNumberValue`       | 
| date       | `dateValue`   | `minDateValue` and `maxDateValue`           |









