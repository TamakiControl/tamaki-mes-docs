---
sidebar_position: 16
title: "getOeeAlarmImportQueueSize"
description: "Gets the current import queue size for alarm imports."
---

# system.mes.oee.getOeeAlarmImportQueueSize

## Description

Retrieves the current size of the import queue for OEE alarm imports. This is useful for monitoring the progress of asynchronous imports.

## Syntax

```python
system.mes.oee.getOeeAlarmImportQueueSize()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an integer representing the number of items currently in the import queue.

## Code Examples

```python
# Check import queue size
queue_size = system.mes.oee.getOeeAlarmImportQueueSize()
print(f"Items in queue: {queue_size}")

# Monitor import progress
while True:
    size = system.mes.oee.getOeeAlarmImportQueueSize()
    if size == 0:
        print("Import complete!")
        break
    print(f"Still processing: {size} items remaining")
    system.util.sleep(1000)  # Wait 1 second
```