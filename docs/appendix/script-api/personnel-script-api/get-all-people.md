---
sidebar_position: 4
title: "getAllPeople"
description: "Retrieves all people."
---

# system.mes.personnel.getAllPeople

## Description

Retrieves a list of all [Person](../../data-model/personnel-model/personnel) records in the system.


## Permissions

This method requires the `PERSONNEL.READ.GET` permission.

## Syntax

```
system.mes.personnel.getAllPeople()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all people.

## Code Examples

```
# Retrieve all people
allPeople = system.mes.personnel.getAllPeople()

# Output the list of people
print(allPeople)
```