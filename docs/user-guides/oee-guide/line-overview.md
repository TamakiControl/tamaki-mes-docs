---
sidebar_position: 3
title: "Line Overview"
description: "OEE Line Overview Screen"
---

# Line Overview

**Navigation:**

<img src={require('./images/line-overview-navigation.png').default} alt="Navigation menu showing the Line Overview selection in the OEE module" />

**Example:**

<img src={require('./images/line-overview.png').default} alt="Complete Line Overview screen showing the top bar, line graphic, and downtime records sections" />

**Description:**
- The Line Overview screen provides a comprehensive view of the production line's performance, including OEE metrics, downtime records, and a graphical representation of the line's status. It allows users to monitor the overall effectiveness of the equipment and identify areas for improvement.

**Components:**
- [Top Bar](#top-bar)
- [Line Graphic](#line-graphic)
- [Downtime Records](#downtime-records)

## Top Bar
**Example:**

<img src={require('./images/line-overview-top-bar.png').default} alt="Top bar section of the Line Overview screen showing current order status, OEE metrics, and timeline" />

**Description:**
- The top bar of the Line Overview screen displays key information about the selected line, including:
  - **Current Order Status**: 
  
  <img src={require('./images/line-overview-top-bar-current-order-status.png').default} alt="Current order status panel showing completion percentage and production status" />
  
  The percentage of the current order that has been completed, the state of the order, and what may be causing delays (i.e., what is starving it).

  - **Current OEE**:
  
  <img src={require('./images/line-overview-top-bar-current-oee.png').default} alt="Current OEE metrics panel showing availability, performance, and quality percentages" />
  
  The overall equipment effectiveness of the line, calculated based on availability, performance, and quality metrics.

  - **OEE State Timeline**:
  
  <img src={require('./images/line-overview-top-bar-oee-state-timeline.png').default} alt="OEE state timeline showing color-coded periods of different operational states" />
  
  A timeline that shows the historical OEE state of the line, allowing users to see trends and patterns over time. Hover over the colored bars that make up the timeline to see the start time, end time, and duration of the event associated with the color (see [States](setup#states) for what state each color represents).
  
    - Clicking on a bar in the timeline will open a popup with more detailed information about the event:
      - <img src={require('./images/timeline-event-details.png').default} alt="Timeline event details popup showing duration and state information" align="center" />
  
## Line Graphic
**Example:**

<img src={require('./images/line-overview-line-graphic.png').default} alt="Line graphic showing the production line layout with color-coded equipment states" />

**Description:**
- The line graphic provides a visual representation of the production line, showing the current state of each piece of equipment. It includes:
  - **Equipment States**: Each piece of equipment is color-coded to indicate its current state (e.g., running, stopped, fault).
  - **OEE Metrics**: The OEE metrics for each piece of equipment are displayed, allowing users to quickly assess performance.
  - **Interactive Elements**: Users can click on individual pieces of equipment to view detailed information and historical data.

Selecting a node opens the following popup:

<img src={require('./images/node-details-popup.png').default} alt="Node details popup showing step, status, and other information about the selected equipment" />

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

<img src={require('./images/line-overview-downtime-records.png').default} alt="Downtime records table showing list of downtime events with duration, location, and reason information" />

**Description:**
- The downtime records section displays a list of downtime events for the selected line. It includes:
  - **Downtime Duration**: The total duration of each downtime event.
  - **Location**: The specific piece of equipment or area where the downtime occurred.
  - **Reason Codes**: The reason for each downtime event, allowing users to categorize and analyze downtime causes.
  - **Notes**: Additional notes or comments related to each downtime event, providing context and details for analysis.

Refer to [tables](TODO) for information on how tables work in Tamaki MES.

Selecting a row in the table allows the two buttons in the top left of the downtime records section to be selected.

The `Set Downtime Reason` button, <img src={require('./images/button-set-reason.png').default} alt="Set Downtime Reason Button" align="center" width="30" />, opens the downtime reason selection popup:

<img src={require('./images/downtime-reason-popup.png').default} alt="Downtime reason selection popup with hierarchical tree of reasons and notes field" />

**Sections:**
- **Downtime Reason Selection Tree:** Allows users to select a reason for the downtime event from a hierarchical list of predefined reasons.
- **Acknowledge Button:** Clicking this button acknowledges the downtime event, marking it as reviewed and preventing further edits.
- **Notes Field:** A text field for users to add additional notes or comments related to the downtime event.

The `Split Downtime Event` button, <img src={require('./images/button-split-event.png').default} alt="Split Downtime Event Button" align="center" width="30" />, opens the Split Downtime Event popup:

<img src={require('./images/split-event-popup.png').default} alt="Split Downtime Event popup with slider to select the split point between two events" />

**Sections:**

- Select and drag the middle slider to choose the split point for the downtime event.
- Click `Confirm` to split the selected downtime event into two separate events at the chosen point.
