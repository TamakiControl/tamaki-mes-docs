---
sidebar_position: 2
title: "Graph View"
description: "Graph View Navigation for Track and Trace"
---

import navigation from './videos/navigation.webm';
import search from './videos/search.webm';
import explore from './videos/explore.webm';

# Track and Trace - Graph View

**Navigation:**

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={navigation}/>
</video>

**Navigation Summary:**

From any screen, click or tap Inventory from the top navigation bar (in mobile view, instead open the hamburger menu on the upper left, then select Inventory from the sidebar), then click or tap Track & Trace.

**Search:**

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={search}/>
</video>

**Search Summary:**

> *Optional* - Apply any desired filters before selecting the lot. This step may be skipped; it is possible to select as many or as few of the availabled filters as desired. Filters for lots include:
> - Material
> - Lot Status
> - Expiration Date
> - Closed Date

Lot selection - this is where one can choose the lot that is of interest for track and trace.

Depth selection – this controls how many connections deep the search will initially bring up in the chosen direction. If ancestors or descendant do not fill out the depth, it will end early without sshowing the full depth.

Direction selection – this chooses whether to search in the ancestor direction, i.e. the lots feeding into the lot of interest, or the descendant direction, i.e., the lots flowing out from the lot of interest.

**Exploration (Expand/Collapse):**

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={explore}/>
</video>

**Exploration (Expand/Collapse) Summary:**

Expand - to expand a lot to view its adjacent lots, click on the plus (+) button attached to a root or leaf node. This will extend the view by one additional depth level, as long as one or more adjacent lots exist.

Collapse - to collapse ALL ancestors or descendants, click on the minus (-) button on either side of the last node to be kept in that direction; left collapses ancestors and right collapses descendants.

> Note: collapse/expand can have some funky behavior; experiment with it before it is needed for something important. Additionally, when re-expanding a node which has been manually collapsed there may be additional nodes which were not visible previously. This is intentional, as the original search only sets ancestors or descendents that are in a direct line within the given direction and depth as visible, while the expansion logic dictates that all connected nodes should become visible.
