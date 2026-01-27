---
sidebar_position: 2
title: 'Graph View'
description: 'Graph View Navigation for Track and Trace'
---

import navigation from './videos/navigation.webm';
import filters from './videos/filters.webm';
import depthAndDirection from './videos/depth-and-direction.webm';

import expandAndCollapse from './videos/expand-and-collapse.webm';
import expandAndCollapse2 from './videos/expand-and-collapse2.webm';
import rearrangeAndExport from './videos/rearrange-and-export.webm';
import viewNodeInfo from './videos/view-node-info.webm';

# Track and Trace - Graph View

The Track and Trace Graph View allows users to visually explore the relationships between lots in the inventory system. This guide will walk you through the key features and functionalities of the Graph View.

## Navigation:

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={navigation}/>
</video>

From any screen, click or tap Inventory from the top navigation bar (in mobile view, instead open the hamburger menu on the upper left, then select Inventory from the sidebar), then click or tap Track & Trace.

## Search:

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={filters}/>
</video>

> _Optional_ - Apply any desired filters before selecting the lot. This step may be skipped; it is possible to select as many or as few of the availabled filters as desired. Filters for lots include:
>
> - Date Range
> - Lot Status
> - Material
> - Location

**Lot selection** - this is where one can choose the lot that is of interest for track and trace.

### Search Depth and Direction:

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={depthAndDirection}/>
</video>

**Depth selection** – this controls how many connections deep the search will initially bring up in the chosen direction.

**Direction selection** – this chooses whether to search in the ancestor direction (the _left_ side of the selected lot), or the descendant direction (the _right_ side of the selected lot).

## Graph Interaction:

### Expand/Collapse:

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={expandAndCollapse}/>
</video>

**Expand** - to expand a lot to view its adjacent lots, click on the plus (+) button attached to a node. This will extend the view by one additional depth level, as long as one or more adjacent lots exist.

**Collapse** - to collapse ALL ancestors or descendants, click on the minus (-) button on either side of the last node to be kept in that direction; left collapses ancestors and right collapses descendants.

### Expand hidden nodes:

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={expandAndCollapse2}/>
</video>

Nodes may be hidden because the initial search does not include sibling lots, only ancestors or descendants. For example, if a lot has multiple parent lots, but only one parent lot is shown in the current view, the other parent lots would be hidden by default.

**Expand hidden nodes** - to expand hidden nodes (nodes that exist but are not currently shown), click on (\>\>)/(\<\<) buttons where the (+)/(-) buttons would normally be. This will expand all hidden nodes in that direction.

### Rearrange and Export:

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={rearrangeAndExport}/>
</video>

**Rearrange** - to rearrange the graph layout, simply click and drag any node to the desired position.

**Export** - to export the current graph view as an image file, click on the camera icon in the upper right corner of the graph area. *Note that only the visible portion of the graph will be exported.*

### View Node Information:
To view detailed information about a specific lot/node, click on the node itself. A side panel will open displaying all relevant information about that lot. This side panel also includes a list of every inventory transaction associated with that lot.

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={viewNodeInfo}/>
</video>

In this example, we click on the node representing lot "CREAM_POWDER_2025-09-25 09:47", which is connected to lot "CS01 2025-08-15 03:00:19.044" via an inventory transaction (aka lot record) of type "Ship". When we click on the "CREAM_POWDER_2025-09-25 09:47" node, a sidebar opens displaying detailed information about that lot, including its material, status, and timestamps. Additionally, the sidebar lists all inventory transactions associated with that lot. In this case, we can see the "Ship" transaction that connects "CS01 2025-08-15 03:00:19.044" to "CREAM_POWDER_2025-09-25 09:47". Note that in this example "CREAM_POWDER_2025-09-25 09:47" (the selected lot) is the destination lot of this transaction, therefore it has a **bold** border.
