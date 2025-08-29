---
sidebar_position: 0
---

# Shift Model Overview

The Shift model organizes and manages production shifts at specific locations. It covers both the configuration of a Shift and the runtime records created when a Shift starts and stops.

---

### 1. Shift

Defines a shift configuration, including identification, associated location, optional schedule/expression triggers, and conflict resolution strategy.

### 2. ShiftRecord

Tracks individual occurrences of a shift, including start and end times, status, duration, and location. While the Shift defines configuration, ShiftRecord represents runtime execution.

---

This model supports clear definition of production time periods and accurate tracking of actual shift activity, enabling effective scheduling and analysis.
