---
sidebar_position: 11
title: "OEE Import/Export"
description: "How to import and export OEE (Overall Equipment Effectiveness)"
---

# OEE (Overall Equipment Effectiveness) Import/Export

It is recommended to import Modes and States before importing OEE configurations. Alternatively, you can import OEE configurations with `enabled = false` and enable them once the OEE Modes and OEE States have been successfully imported.

Importing enabled OEE configurations before the required OEE Modes and OEE States exist can lead to issues with the data collection service. This may result in inconsistent or unexpected behavior, and in some cases, a service restart may be required before data collection will function properly even after the OEE Modes and OEE States have been imported.

## OEE States

**Navigation:**

![Navigation menu showing the OEE selection in the OEE module](./images/oee-navigation.png)

![Navigation menu showing the OEE States selection in the OEE Configuration page](./images/oee-states-navigation.png)

### Importing OEE States

![OEE States Page with the import button highlighted](./images/import-oee-states-button.png)

![OEE States Page with an import menu popup](./images/import-oee-states-popup.png)

**How to use:**

- To import OEE states, press the import button and add a CSV or JSON file to the file upload field.
Then press the confirm button.

- It is recommended to export at least one pre-existing OEE state to CSV to ensure the correct format of the CSV file.

**Import Behavior:**

- When importing, the system checks whether an OEE state already exists by location and state code. If a match is found, the existing OEE state is modified, otherwise a new OEE state is created.

### Exporting OEE States

![OEE States Page with the export button highlighted](./images/export-oee-states-button.png)

![OEE States Page with an export menu popup](./images/export-oee-states-popup.png)

**How to use:**

- To export OEE states, press the export button and select if you'd like to include the configuration, modes and states. Select the locations associated with the OEE states you'd wish to export. Then press the export selected button. 


## OEE Modes

**Navigation:**

![Navigation menu showing the OEE selection in the OEE module](./images/oee-navigation.png)

![Navigation menu showing the OEE Modes selection in the OEE Configuration page](./images/oee-modes-navigation.png)

### Importing OEE Modes

![OEE Modes Page with the import button highlighted](./images/import-oee-modes-button.png)

![OEE Modes Page with an import menu popup](./images/import-oee-modes-popup.png)

**How to use:**

- To import OEE modes, press the import button and add a CSV or JSON file to the file upload field.
Then press the confirm button.

- It is recommended to export at least one pre-existing OEE mode to CSV to ensure the correct format of the CSV file.

**Import Behavior:**

- When importing, the system checks whether an OEE mode already exists by location and mode code. If a match is found, the existing OEE mode is modified, otherwise a new OEE mode is created.

### Exporting OEE Modes

![OEE Modes Page with the export button highlighted](./images/export-oee-modes-button.png)

![OEE Modes Page with an export menu popup](./images/export-oee-modes-popup.png)

**How to use:**

- To export OEE modes, press the export button and select if you'd like to include the configuration, modes and states. Select the locations associated with the OEE modes you'd wish to export. Then press the export selected button. 


## OEE Configuration

**Navigation:**

![Navigation menu showing the OEE selection in the OEE module](./images/oee-navigation.png)

### Importing OEE Configuration

![OEE Configuration Page with the import button highlighted on the default page](./images/import-oee-configuration-button-1.png)

![OEE Configuration Page with the import button highlighted when editing an OEE configuration](./images/import-oee-configuration-button-2.png)

![OEE Configuration Page with an import menu popup](./images/import-oee-configuration-popup.png)

**How to use:**

- To import OEE configurations, press the import button and add a CSV or JSON file to the file upload field. Then press the confirm button.

- It is recommended to export at least one pre-existing OEE configuration to CSV to ensure the correct format of the CSV file.

**Import Behavior:**

- When importing, the system checks whether an OEE configuration already exists by location. If a match is found, the existing OEE configuration is modified, otherwise a new OEE configuration is created.

### Exporting OEE Configuration

![OEE Configuration Page with the export button highlighted on the default page](./images/export-oee-configuration-button-1.png)

![OEE Configuration Page with the export button highlighted when editing an OEE configuration](./images/export-oee-configuration-button-2.png)

![OEE Configuration Page with an export menu popup](./images/export-oee-configuration-popup.png)

**How to use:**

- To export OEE configurations, press the export button and select if you'd like to include the configuration, modes and states. Select the locations associated with the OEE configuration you'd wish to export. Then press the export selected button. 


## OEE Downtime Reasons

**Navigation:**

![Navigation menu showing the OEE selection in the OEE module](./images/oee-navigation.png)

![Navigation menu showing the OEE Downtime Reasons selection in the OEE Configuration page](./images/oee-dt-reasons-navigation.png)

### Importing OEE Downtime Reasons

![OEE Downtime Reasons Page with the import button highlighted on the default page](./images/import-oee-dt-reasons-button-1.png)

![OEE Downtime Reasons Page with the import button highlighted when editing an OEE downtime reason](./images/import-oee-dt-reasons-button-2.png)

![OEE Downtime Reasons Page with an import menu popup](./images/import-oee-dt-reasons-popup.png)

**How to use:**

- To import OEE downtime reasons, press the import button and add a CSV or JSON file to the file upload field. Then press the confirm button.

- It is recommended to export at least one pre-existing OEE downtime reason to CSV to ensure the correct format of the CSV file.

**Import Behavior:**

- When importing, the system checks whether an OEE downtime reason already exists by downtime reason path. If a match is found, the existing OEE downtime reason is modified, otherwise a new OEE downtime reason is created.

### Exporting OEE Downtime Reasons

![OEE Downtime Reasons Page with the export button highlighted on the default page](./images/export-oee-dt-reasons-button-1.png)

![OEE Downtime Reasons Page with the export button highlighted when editing an OEE downtime reason](./images/export-oee-dt-reasons-button-2.png)

![OEE Downtime Reasons Page with an export menu popup](./images/export-oee-dt-reasons-popup.png)

**How to use:**

- To export OEE downtime reasons, press the export button and select the OEE downtime reasons you'd wish to export. Then press the export selected button.