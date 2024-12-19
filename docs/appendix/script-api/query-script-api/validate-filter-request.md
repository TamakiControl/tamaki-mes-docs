---
title: "validateFilterRequest"
description: "Validates a filter request."
sidebar_position: 0
---

# system.mes.query.validateFilterRequest

## Description

Validates a [Filter Request](./filter-request.md) and returns a dictionary of validation violations if any are found.

## Permissions

This scripting function has no client permission restrictions.

## Syntax
Using Python keyword arguments, a [Filter Request](./filter-request.md) can be passed to the `validateFilterRequest` function without 
specifying each parameter individually. Please refer to the Filter Request documentation for a list of parameters.
```python
system.mes.querry.validateFilterRequest(**filterRequest)
```

### Returns

A dictionary of validation violations if any are found. If the Filter Request is valid, an empty dictionary is returned.
Each key-value pair is a parameter name and a list of violations pertaining to that parameter.

## Code Examples

```python
filterRequest = system.mes.query.newFilterRequest()    
filterRequest["field"] = "createdDate"     
filterRequest["dateValue"] = "2024-01-01T00:00:00Z"

violations = system.mes.query.validateFilterRequest(**filterRequest)  
  
print(violations)
```

The above code displays the following output. The key "condition" indicates a problem with the `condition` parameter.
The value is a list of violations, in this case, a single violation indicating that the `condition` parameter is required.

```
{"condition":["The condition is required"]}
```
