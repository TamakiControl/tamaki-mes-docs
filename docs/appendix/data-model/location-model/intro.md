---
sidebar_position: 1
title: "Location Model Overview"
description: "High-level overview of the Location model in the TamakiMES application."
---

# Location Model

## Overview

The **Location** model in *TamakiMES* is designed to represent the hierarchical structure and characteristics of
physical locations within a manufacturing environment. Each location can be a part of a larger organizational structure,
support specific types of processes, and include attributes like storage capabilities, inventory strategies, and maximum
capacities.

The Location model is composed of the following key entities:

- **Location**: Represents individual locations, organized hierarchically. Each location has attributes like type,
  process type, storage capacity, and configurable strategies for handling inventory and lots.
- **LocationGroup**: Allows grouping of multiple locations into logical sets, facilitating easier management and
  reporting.
- **LocationProperty** and **LocationPropertyValue**: Define and store specific properties for locations, similar to how
  *Equipment Properties* and *Property Values* work for equipment.

## Key Entities

### 1. Location

The **Location** entity represents physical or logical locations within the facility. Locations are hierarchical and can
be of various types, such as `ENTERPRISE`, `SITE`, `AREA`, or `UNIT`, allowing flexible representation from high-level
company structures down to specific production units.

Locations have configurable attributes, including:

- **Type**: Defines the location's role within the hierarchy, such as `ENTERPRISE`, `SITE`, `AREA`, or `UNIT`.
- **Process Type**: Specifies whether the location supports continuous, batch, discrete, or storage processes.
- **Storage Capabilities**: Configurable options for storage capacity, units of measure, and the ability to hold
  multiple lots.
- **Inventory and Lot Strategies**: Customizable strategies for managing inventory, including **Lot Conflict Strategy**
  and **Lot Use Strategy**.

### 2. LocationGroup

**LocationGroup** enables the creation of logical groupings of locations. These groups are useful for organizing
locations into sets that can be managed collectively, such as grouping all locations in a specific department or
production area.

### 3. LocationProperty and LocationPropertyValue

- **LocationProperty**: Defines a property that can apply to multiple locations, such as "Temperature Control" or "
  Storage Type."
- **LocationPropertyValue**: Stores the actual values of properties for specific locations, allowing each location to
  have unique characteristics based on its configuration.

## Enum Types

The Location model includes several enums to define configurations and strategies:

- **LocationType**: Defines the hierarchy, with types such as `ENTERPRISE`, `SITE`, `AREA`, `LINE`, etc., allowing
  flexible representation of a facility's structure.
- **ProcessType**: Specifies process types like `STORAGE`, `CONTINUOUS`, `BATCH`, `DISCRETE`, and `NONE`, indicating the
  type of production or storage process the location supports.
- **LotConflictStrategy**: Handles situations where multiple lots are stored, with strategies like `DISALLOW`,
  `KEEP_PREVIOUS`, and `KEEP_NEW`.
- **LotUseStrategy**: Determines the strategy for using lots in inventory, such as `FIFO` (First In, First Out),
  `LIFO` (Last In, First Out), and `FEFO` (First to Expire, First Out).

## Summary

The Location model in *TamakiMES* provides a robust framework for organizing, managing, and configuring the physical and
logical layout of a manufacturing facility. Through hierarchical locations, groupings, and customizable properties, the
model supports complex facility structures and flexible inventory strategies.