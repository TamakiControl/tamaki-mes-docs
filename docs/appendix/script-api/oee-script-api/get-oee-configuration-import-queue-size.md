---
sidebar_position: 94
title: "getOeeConfigurationImportQueueSize"
description: "Gets the current size of the OeeConfiguration import queue."
---

# system.mes.oee.getOeeConfigurationImportQueueSize

## Description

Gets the current size of the [OeeConfiguration](../../data-model/oee-model/oee-mode-record.md) import queue.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeConfigurationImportQueueSize()
```

## Parameters

This function does not take any parameters.

## Returns

Returns an integer representing the number of items in the OeeConfiguration import queue.

## Code Examples

```python
queueSize = system.mes.oee.getOeeConfigurationImportQueueSize()
print(queueSize)
```
