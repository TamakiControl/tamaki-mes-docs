---
title: "validateQueryRequest"
description: "Validates a query request."
sidebar_position: 0
---

# system.mes.query.validateQueryRequest

## Description

Validates a [Query Request](./query-request.md) and returns a dictionary of validation violations if any are found.

## Permissions

This scripting function has no client permission restrictions.

## Syntax
Using Python keyword arguments, a [Query Request](./query-request.md) can be passed to the `validateQueryRequest` 
function without specifying each parameter individually. Please refer to the Query Request documentation for a list of 
parameters.
```python
system.mes.querry.validateQueryRequest(**queryRequest)
```

### Returns

A dictionary of validation violations if any are found. If the Query Request is valid, an empty dictionary is returned.
Each key-value pair is a parameter name and a list of violations pertaining to that parameter.
