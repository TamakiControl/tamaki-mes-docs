---
sidebar_position: 1
title: 'Terms and Definitions'
description: 'Track and Trace Terms and Definitions'
---

# Terms and Definitions

This document provides definitions and explanations of key terms related to Track and Trace in manufacturing. Understanding these terms is essential for effectively utilizing Track and Trace to trace contaminanents in manufacturing environments.

## Track and Trace

- **Definition:**
  - **Track** - Follow the path of materials and products forward through the supply chain, from raw materials to finished products.
  - **Trace** - Trace the history backward to identify the origin, attributes, and history of materials and components used in production.
- **Purpose:**
  - **Regulatory Compliance:** Many industries (pharmaceuticals, food, automotive) must comply with regulations requiring material traceability.
  - **Quality Control:** Quickly identify and isolate quality issues by tracing affected materials.
  - **Recall Management:** Efficiently manage product recalls by precisely identifying affected batches.
  - **Supply Chain Visibility:** Gain insights into material flows, bottlenecks, and inefficiencies.
  - **Process Optimization:** Analyze material transformations to improve production processes.
  - **Waste Reduction:** Identify sources of waste and implement targeted improvements.

## Graph

- **Definition:**
  - A data structure consisting of a set of nodes connected by edges.
- **Purpose:**
  - In Track and Trace, a graph represents the network of lots and their relationships through inventory transactions (aka lot records).

## Node

- **Definition:**
  - A fundamental unit of a graph representing an entity.
- **Purpose:**
  - In Track and Trace, nodes represent [inventory lots](../../appendix/data-model/inventory-model/inventory-lot) in the system.

## Edge

- **Definition:**
  - A connection between two nodes that represents a relationship.
- **Purpose:**
  - In Track and Trace, edges represent inventory lot records that show how materials are transformed, moved, split, or merged.

## Root Node

- **Definition:**
  - The starting point for traversing a graph.
- **Purpose:**
  - In Track and Trace, this is the inventory lot that is selected in the sidebar.

## Depth

- **Definition:**
  - The number of edges away from the root node.
- **Purpose:**
  - In Track and Trace, the depth parameter controls how far to traverse the material flow in either direction.

## Direction

- **Purpose:**
  - In Track and Trace, direction can be either:
    - INPUT: Traces backward to find the materials that were used to create the root node (tracing inputs/sources).
    - OUTPUT: Traces forward to find what the root node material was used to create (tracing outputs/destinations).

## Adjacency

- **Definition:**
  - The direct connection between nodes.
- **Purpose:**
  - The [getLotTraceGraph](../../appendix/script-api/track-and-trace-script-api/get-lot-trace-graph.md) function retrieves nodes that are directly adjacent to the root node at the specified depth.
