---
sidebar_position: 3
title: 'Table View'
description: 'Table View Navigation for Track and Trace'
---

import terminalNodes from './videos/terminal-nodes.webm';

# Track and Trace - Terminal Nodes View

The Track and Trace Terminal Nodes View provides tabular information about the terminal nodes (i.e., the most distant descendant lots) related to a selected lot in the inventory system. This guide will walk you through the key features and functionalities of the Terminal Nodes View.

## Navigation and Example:

<video controls style={{ width: '60vw', borderRadius: '0.5rem' }}>
  <source src={terminalNodes}/>
</video>

The Terminal Nodes View can be accessed from the Track and Trace Graph View by clicking the "Terminal Nodes" tab located at the top of the screen.

In this example video, we can see that the selected lot has several terminal nodes (nodes that do not have any further descendants) including "CREAM_POWDER_2025-09-25 09:47" and "SS01 2025-08-15 03:00:23.944". When we navigate to the Terminal Nodes View, we can see a table listing these terminal nodes along with relevant details such as Lot Number, Material, Quantity, and Location. This view allows users to quickly identify and analyze the end products or lots that have been derived from the selected lot in the inventory system.

Any of these terminal lots can then be selected to view further details in the sidebar.

## Exporting:

The Terminal Nodes View allows users to export the displayed data to a CSV file for further analysis or reporting purposes. To export the data, simply click the "Export" button located above the table, and the system will generate a downloadable CSV file containing the current view's data. Individual terminal lots can also be selected to view further details in the sidebar, which can also be exported as needed by clicking the "Export" button in the top right of the sidebar.
