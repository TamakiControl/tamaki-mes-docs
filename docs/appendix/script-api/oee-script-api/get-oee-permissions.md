---
sidebar_position: 69
title: 'getOeePermissions'
description: 'Retrieves a list of all available OEE permissions in the system.'
---

# system.mes.oee.getOeePermissions

Retrieves a list of all available OEE role permissions in the system.

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.oee.getOeePermissions()
```

## Parameters

This method does not take any parameters.

## Returns

A list of strings, where each string is an available OEE permission identifier.

## Code Examples

```python
# Get all OEE permissions
permissions = system.mes.oee.getOeePermissions()

for permission in permissions:
    print permission
```
