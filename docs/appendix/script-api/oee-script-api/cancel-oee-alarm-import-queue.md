---
sidebar_position: 17
title: "cancelOeeAlarmImportQueue"
description: "Cancels pending alarm imports."
---

# system.mes.oee.cancelOeeAlarmImportQueue

## Description

Cancels all pending OEE alarm imports in the import queue. This stops the processing of any queued import items. Items that have already been processed will not be affected.

## Syntax

```python
system.mes.oee.cancelOeeAlarmImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an integer representing the number of cancelled oee alarms.

## Code Examples

```python
# Cancel pending imports
result = system.mes.oee.cancelOeeAlarmImportQueue()
print("Import queue cancelled")
```
