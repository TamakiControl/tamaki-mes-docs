---
title: 'getSecurityLevelTree'
description: 'Retrieves a tree of all Ignition security levels.'
---

# getSecurityLevelTree

## Overview

Retrieves a hierarchical tree of all security levels defined in Ignition. Each node in the tree is represented by a SecurityLevelDTO object.

## Permissions

This method requires the `SYSTEM.ADMIN` permission.

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

List of SecurityLevelDTO objects representing the top of the security level hierarchy.

## Example

```python
securityLevels = system.mes.role.getSecurityLevelTree()
```
