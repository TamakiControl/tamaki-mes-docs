---
sidebar_position: 3
title: "Line Overview"
description: "OEE Line Overview Screen"
---

# Line Overview

**Navigation:**
![line-overview-navigation.png](line-overview-navigation.png)

**Example:**
![line-overview.png](line-overview.png)

**Description:**
- The Line Overview screen provides a comprehensive view of the production line's performance, including OEE metrics, downtime records, and a graphical representation of the line's status. It allows users to monitor the overall effectiveness of the equipment and identify areas for improvement.

**Components:**
- [Top Bar](#top-bar)
- [Line Graphic](#line-graphic)
- [Downtime Records](#downtime-records)

## Top Bar
**Example:**
![line-overview-top-bar.png](line-overview-top-bar.png)
**Description:**
- The top bar of the Line Overview screen displays key information about the selected line, including:
  - **Current Order Status**: 
  ![line-overview-top-bar-current-order-status.png](line-overview-top-bar-current-order-status.png)
  The percentage of the current order that has been completed, the state of the order, and what may be causing delays (i.e. what is starving it).

  - **Current OEE**:
  ![line-overview-top-bar-current-oee.png](line-overview-top-bar-current-oee.png)
  The overall equipment effectiveness of the line, calculated based on availability, performance, and quality metrics.

  - **OEE State Timeline**:
  ![line-overview-top-bar-oee-state-timeline.png](line-overview-top-bar-oee-state-timeline.png)
  A timeline that shows the historical OEE state of the line, allowing users to see trends and patterns over time. Hover over the coloured bars that make up the timeline to see the start time, end time, and duration of the event associated with the colour (see [States](setup#states) for what state each colour represents).
  
## Line Graphic
**Example:**
![line-overview-line-graphic.png](line-overview-line-graphic.png)

**Description:**
- The line graphic provides a visual representation of the production line, showing the current state of each piece of equipment. It includes:
  - **Equipment States**: Each piece of equipment is color-coded to indicate its current state (e.g., running, stopped, fault).
  - **OEE Metrics**: The OEE metrics for each piece of equipment are displayed, allowing users to quickly assess performance.
  - **Interactive Elements**: Users can click on individual pieces of equipment to view detailed information and historical data.

Selecting a node opens the following popup:
![img_1.png](img_1.png)
These table details include:

| **Field** | **Description**                    |
|-----------|------------------------------------|
| Step      | What step it is on                 |
| Status    | Current state of the selected node |
| Trans     | TODO                               |
| Message   | TODO                               |
| Hold      | TODO                               |

Clicking on `View Steps` opens the following popup:
TODO

Change the [Mode](setup#modes) of the note by clicking `On`, `Off`, `Resume`, Or `Hold`. TODO

## Downtime Records
**Example:**
![line-overview-downtime-records.png](line-overview-downtime-records.png)

**Description:**
- The downtime records section displays a list of downtime events for the selected line. It includes:
  - **Downtime Duration**: The total duration of each downtime event.
  - **Location**: The specific piece of equipment or area where the downtime occurred.
  - **Reason Codes**: The reason for each downtime event, allowing users to categorize and analyze downtime causes.
  - **Notes**: Additional notes or comments related to each downtime event, providing context and details for analysis.

Refer to [tables](TODO) for information on how tables work in Tamaki MES.

Selecting a row in the table allows the two buttons in the top left of the downtime records section to be selected.

The ![img_3.png](img_3.png) button opens the downtime reason selection popup:
![img.png](img.png)
**Sections:**
- **Downtime Reason Selection Tree:** Allows users to select a reason for the downtime event from a hierarchical list of predefined reasons.
- **Acknowledge Button:** Clicking this button acknowledges the downtime event, marking it as reviewed and preventing further edits.
- **Notes Field:** A text field for users to add additional notes or comments related to the downtime event.

The ![img_4.png](img_4.png) button opens the Split Downtime Event popup:
![img_2.png](img_2.png)
**Sections:**
- Select and drag the middle slider to choose the split point for the downtime event.
- Click `Confirm` to split the selected downtime event into two separate events at the chosen point.
