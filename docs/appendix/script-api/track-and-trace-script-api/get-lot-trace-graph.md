---
title: 'getLotTraceGraph'
description: 'Retrieves adjacent nodes and edges of the track and trace graph for the given inventory lot ID in the specified direction.'
sidebar_position: 0
---

# system.mes.trackandtrace.getLotTraceGraph

## Description

Retrieves adjacent and root nodes and edges of the trace graph for the given
[InventoryLot](../../data-model/inventory-model/inventory-lot.md) ID in the specified direction. Only a single level of
adjacency is returned if depth is 1 or not provided, meaning that the function will return only the nodes and edges that are directly connected to the
root node. Otherwise it will fetch ancestors or offspring up to the specified depth.

This function is used by the trace graph component to visualize the flow of materials. Nodes represent inventory lots,
and edges represent the InventoryLotRecords that connect them.

## Permissions

This method requires the `TRACK_AND_TRACE.READ.GET` permission.

## Syntax

```python
system.mes.trackandtrace.getLotTraceGraph(rootNodeId, direction)
system.mes.trackandtrace.getLotTraceGraph(rootNodeId, direction, depth) # Overload
```

## Parameters

| Parameter    | Type            | Description                                                                                                    | Required |
| ------------ | --------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `rootNodeId` | `String` (ULID) | The ID of the root inventory lot                                                                               | Yes      |
| `direction`  | `String`        | The direction of the trace graph to be retrieved. Can be either `INPUT` or `OUTPUT`                            | Yes      |
| `depth `     | `Int`           | The desired maximum depth to which the graph will attempt to generate nodes in the given direction (maximum 5) | No       |

## Returns

A trace graph object with the following properties:

### Trace Graph

| Property     | Type            | Description                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------- |
| `nodes`      | `List` of nodes | List of nodes in the track and trace graph that are adjacent to the root node in the requested direction. |
| `edges`      | `List` of edges | List of edges in the track and trace graph that connect the nodes in the requested direction.             |
| `rootNodeId` | `String`        | The inventory lot ID that was given as an argument in the original request                                |
| `direction`  | `String`        | The direction that was given as an argument in the original request                                       |

### Node

| Property | Type            | Description                                              |
| -------- | --------------- | -------------------------------------------------------- |
| `id`     | `String` (ULID) | The ID of the node, which is the inventory lot ID        |
| `data`   | `Object`        | The data object contains several properties listed below |

#### Node data

| Property              | Type     | Description                                                                       |
| --------------------- | -------- | --------------------------------------------------------------------------------- |
| `lotName`             | `String` | The name of the inventory lot                                                     |
| `materialName`        | `String` | The name of the material associated with this inventory lot                       |
| `materialClassName`   | `String` | The name of the material class of the material associated with this inventory lot |
| `materialDescription` | `String` | The description of the material associated with this inventory lot                |
| `quantity`            | `Double` | The total quantity of inventory processed from the starting node to this one      |
| `uom`                 | `String` | The unit of measure symbol for the quantity                                       |

### Edge

| Property   | Type            | Description                                                                                                                     |
| ---------- | --------------- |---------------------------------------------------------------------------------------------------------------------------------|
| `id`       | `String` (ULID) | Unique identifier of the [InventoryLotRecord](../../data-model/inventory-operation-model/inventory-lot-record.md) for the edge. |
| `source`   | `String` (ULID) | The source InventoryLot ID from which this edge originates.                                                                     |
| `target`   | `String` (ULID) | The target InventoryLot ID to which this edge points.                                                                           |
| `animated` | `Boolean`       | Whether the edge is animated in the track and trace graph.                                                                      |

## Code Example

```python
inventoryLotId = "01JZJZ1FSE-WAW6VBVG-4506XP0C"
traceGraph = system.mes.trackandtrace.getLotTraceGraph(inventoryLotId, "OUTPUT")
print(traceGraph)
```

### Example Output

```json
{
	"direction": "OUTPUT",
	"rootNodeId": "01JZJZ1FSE-WAW6VBVG-4506XP0C",
	"nodes": [
		{
			"id": "01JRGMQQQR-FNYB310E-QATAWA9X",
			"data": {
				"lotName": "Lot-01JZJZ",
				"materialName": "cherry",
				"materialClassName": "BLEND",
				"materialDescription": null,
				"quantity": 100.0,
				"uom": "kg"
			}
		}
	],
	"edges": [
		{
			"id": "01JZKBA80K-JYT9EC63-BZRVNE6H",
			"source": "01JZJZ1FSE-WAW6VBVG-4506XP0C",
			"target": "01JRGMQQQR-FNYB310E-QATAWA9X",
			"animated": true
		}
	]
}
```
