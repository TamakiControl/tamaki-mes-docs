---
sidebar_position: 96
title: "getOeeStateImportQueueSize"
description: "Gets the current size of the OeeState import queue."
---

# system.mes.oeeState.getOeeStateImportQueueSize

## Description

Gets the current size of the [OeeState](../../data-model/oee-model/oee-state) import queue.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oeeState.getOeeStateImportQueueSize()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of items in the OeeState import queue.

## Code Examples

```python
queueSize = system.mes.oee.getOeeStateImportQueueSize()
print(queueSize)
```

