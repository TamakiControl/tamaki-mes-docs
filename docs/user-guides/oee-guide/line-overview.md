---
sidebar_position: 3
title: "Line Overview"
description: "OEE Line Overview Screen"
---

# Line Overview

**Navigation:**

![Navigation menu showing the Line Overview selection in the OEE module](./images/line-overview-navigation.png)

**Example:**

![Complete Line Overview screen showing the top bar, line graphic, and downtime records sections](./images/line-overview.png)

**Description:**
- The Line Overview screen provides a comprehensive view of the production line's performance, including OEE metrics, downtime records, and a graphical representation of the line's status. It allows users to monitor the overall effectiveness of the equipment and identify areas for improvement.

**Components:**
- [Top Bar](#top-bar)
- [Line Graphic](#line-graphic)
- [Downtime Records](#downtime-records)

## Top Bar
**Example:**

![Top bar section of the Line Overview screen showing current order status, OEE metrics, and timeline](./images/line-overview-top-bar.png)

**Description:**
- The top bar of the Line Overview screen displays key information about the selected line, including:
  - **Current Order Status**: 
  
  ![Current order status panel showing completion percentage and production status](./images/line-overview-top-bar-current-order-status.png)
  
  The percentage of the current order that has been completed, the state of the order, and what may be causing delays (i.e., what is starving it).

  - **Current OEE**:
  
  ![Current OEE metrics panel showing availability, performance, and quality percentages](./images/line-overview-top-bar-current-oee.png)
  
  The overall equipment effectiveness of the line, calculated based on availability, performance, and quality metrics.

  - **OEE State Timeline**:
  
  ![OEE state timeline showing color-coded periods of different operational states](./images/line-overview-top-bar-oee-state-timeline.png)
  
  A timeline that shows the historical OEE state of the line, allowing users to see trends and patterns over time. Hover over the colored bars that make up the timeline to see the start time, end time, and duration of the event associated with the color (see [States](setup#states) for what state each color represents).
  
    - Clicking on a bar in the timeline will open a popup with more detailed information about the event:

    ![Timeline event details popup showing duration and state information](./images/timeline-event-details.png)
  
## Line Graphic
**Example:**

![Line graphic showing the production line layout with color-coded equipment states](./images/line-overview-line-graphic.png)

**Description:**
- The line graphic provides a visual representation of the production line, showing the current state of each piece of equipment. It includes:
  - **Equipment States**: Each piece of equipment is color-coded to indicate its current state (e.g., running, stopped, fault).
  - **OEE Metrics**: The OEE metrics for each piece of equipment are displayed, allowing users to quickly assess performance.
  - **Interactive Elements**: Users can click on individual pieces of equipment to view detailed information and historical data.

Selecting a node opens the following popup:

![Node details popup showing step, status, and other information about the selected equipment](./images/node-details-popup.png)

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

![Downtime records table showing list of downtime events with duration, location, and reason information](./images/line-overview-downtime-records.png)

**Description:**
- The downtime records section displays a list of downtime events for the selected line. It includes:
  - **Downtime Duration**: The total duration of each downtime event.
  - **Location**: The specific piece of equipment or area where the downtime occurred.
  - **Reason Codes**: The reason for each downtime event, allowing users to categorize and analyze downtime causes.
  - **Notes**: Additional notes or comments related to each downtime event, providing context and details for analysis.

Refer to the [Downtime Event Table](downtime-entry#downtime-event-table) guide for more details.