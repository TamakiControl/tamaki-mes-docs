---
sidebar_position: 95
title: "getOeeModeImportQueueSize"
description: "Gets the current size of the OeeMode import queue."
---

# system.mes.oee.getOeeModeImportQueueSize

## Description

Gets the current size of the [OeeMode](../../data-model/oee-model/oee-mode.md) import queue.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeModeImportQueueSize()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of items in the OeeMode import queue.

## Code Examples

```python
queueSize = system.mes.oee.getOeeModeImportQueueSize()
print(queueSize)
```
