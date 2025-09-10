---
sidebar_position: 1
title: "Terms and Definitions"
description: "Track and Trace Terms and Definitions"
---

# Terms and Definitions
This document provides definitions and explanations of key terms related to Track and Trace in manufacturing. Understanding these terms is essential for effectively utilizing Track and Trace to trace contaminanents in manufacturing environments.

## Track and Trace
- **Definition:**
    - **Track** - Follow the path of materials and products forward through the supply chain, from raw materials to finished products.
    - **Trace** - Trace the history backward to identify the origin, attributes, and history of materials and components used in production.
- **Purspose:**
    - **Regulatory Compliance:** Many industries (pharmaceuticals, food, automotive) must comply with regulations requiring material traceability.
    - **Quality Control:** Quickly identify and isolate quality issues by tracing affected materials.
    - **Recall Management:** Efficiently manage product recalls by precisely identifying affected batches.
    - **Supply Chain Visibility:** Gain insights into material flows, bottlenecks, and inefficiencies.
    - **Authentication:** Verify product authenticity and combat counterfeiting.
    - **Process Optimization:** Analyze material transformations to improve production processes.
    - **Waste Reduction:** Identify sources of waste and implement targeted improvements.

## Graph
- **Definition:**
    - A data structure consisting of a set of vertices (nodes) connected by edges.
- **Purpose:**
    - In Track and Trace, a graph represents the network of material movements and transformations.

## Node
- **Definition:**
    - A fundamental unit of a graph representing an entity.
- **Purpose:**
    - In Track and Trace, nodes typically represent inventory lots or materials.

## Edge
- **Definition:**
    - A connection between two nodes that represents a relationship.
- **Purpose:**
    - In Track and Trace, edges represent inventory lot records that show how materials are transformed, moved, split, or merged.

## Directed Graph
- **Definition:**
    - A graph where edges have a direction, pointing from one node to another.
- **Purpose:**
    - Track and Trace typically uses directed graphs to show the flow of materials from source to destination.

## Root Node
- **Definition:**
    - The starting point for traversing a graph.
- **Purpose:**
    - In Track and Trace, this is typically the inventory lot that is the focus of the trace operation.

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
