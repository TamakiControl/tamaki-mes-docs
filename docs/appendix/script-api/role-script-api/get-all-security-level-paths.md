---
title: "getAllSecurityLevelPaths"
description: "Retrieves all configured Ignition security level paths."
---

# getAllSecurityLevelPaths

## Overview
Retrieves a list of paths of all configured Ignition security level leaves

## Parameters
| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns
- List of all Ignition security level path strings.

## Example
```python
paths = system.mes.role.getAllSecurityLevelPaths()
```

