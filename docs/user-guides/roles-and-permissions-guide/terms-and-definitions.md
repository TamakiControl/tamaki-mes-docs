---
sidebar_position: 1
title: 'Terms and Definitions'
description: 'Roles and Permissions Terms and Definitions'
---

# Terms and Definitions

This document provides definitions and explanations of key terms related to the Roles and Permissions system in TamakiMES. Understanding these terms is essential for effectively managing user access and permissions within the system.

## User (Ignition)

- **Definition:**

  - A User is an individual account that is defined by Ignition. Users can be managed directly within Ignition or synchronized from an external source such as LDAP or Active Directory.

- **Key Points:**

  - If using the built-in Ignition user management, users can be created, modified, and deleted directly within the Ignition interface.
    - Administrators can assign roles to users to control their access to various parts of the system.
  - If using an external Identity Provider (IdP), user management is handled outside of Ignition, and users are synchronized into Ignition.
    - Roles cannot be assigned directly to users in this case; instead, roles must be mapped from the external source.

- **Additional Documentation:**
  - [Ignition User Management Documentation](https://www.docs.inductiveautomation.com/docs/8.1/platform/security/classic-authentication-strategy/managing-users-and-roles).
  - [Ignition IdP Documentation](https://www.docs.inductiveautomation.com/docs/8.1/platform/security/identity-provider-authentication-strategy).

## Role (Ignition)

- **Definition:**
  - A Role is simply a string that is assigned to a user to define their access within the system.
  - If using an external identity provider, roles can be assigned in the external system and must be mapped to roles in Ignition (Security Levels help with this).
  - If using the built-in Ignition user management, roles can be assigned directly to users within Ignition.

## Security Level (Ignition)

- **Definition:**
  - Security Levels are a way to map external roles from an IdP to roles in Ignition. All roles will appear under the
    Security Level "Authenticated/Roles".
- **Key Points:**
  - Security Levels can be used to simplify role management by allowing administrators to assign multiple roles to a user through a single Security Level.
  - Security Levels can be nested, allowing for a more granular control of permissions.
  - When using an external identity provider, roles from the external system can be mapped to Security Levels in Ignition.
- **Additional Documentation:**
  - [Ignition Security Levels Documentation](https://www.docs.inductiveautomation.com/docs/8.1/platform/security/identity-provider-authentication-strategy/security-levels).

## Security Zones (Ignition)

- **Definition:**
  - Security Zones are a way to group Clients/IPs based on their network location. They can be used to restrict access to certain parts of the system based on the client's network location. For example, a Security Zone can be created for the internal network and another for external access, so if a user is accessing the system from outside the internal network, they can be restricted from accessing certain parts of the system.
- **Key Points:**
  - Security Zones function as a subset of Security Levels, and can be seen in the Security Levels tree in TamakiMES.
  - Security Zones can be used in conjunction with Roles and Security Levels to provide a more granular control of permissions.
  - Security Zones can be configured in the Ignition Gateway under the Config > Security > Security Zones section.
- **Additional Documentation:**
  - [Ignition Security Zones Documentation](https://www.docs.inductiveautomation.com/docs/8.1/platform/security/security-zones).

## Permission (TamakiMES)

- **Definition:**
  - Permissions are specific access rights that can be assigned to Roles/Security Levels within TamakiMES. They define what actions a user with a particular role can perform.
- **Key Points:**
  - Permissions can be assigned to Roles to control access to various features and functionalities within TamakiMES.
  - Permissions can be granular, allowing for fine-tuned control over what users can and cannot do.
  - Permissions are typically managed by administrators to ensure that users have the appropriate access based on their roles.

## Role-Permission Relationship

- **Definition:**
  - The Role-Permission relationship defines how Roles/Security Levels and permissions interact within TamakiMES. A Roles/Security Level can have multiple permissions assigned to it, and a permission can be assigned to multiple Roles/Security Levels.
  - This relationship allows for flexible and scalable management of user access within the system.
- **Key Points:**
  - Administrators can create Roles/Security Levels and assign the necessary permissions to them based on the needs of the organization.
  - Users are then assigned to Roles/Security Levels, which in turn grants them the associated permissions.
  - This structure allows for easy management of user access, as changes to permissions can be made at the Role/Security Level level rather than on an individual user basis.
- **Additional Documentation:**
  - [TamakiMES Roles and Permissions Documentation](https://docs.tamakimes.com/docs/user-guides/roles-and-permissions-guide/intro).

## Personnel Role (TamakiMES)

- **Definition:**
  - A Personnel Role in TamakiMES is the actual object that serves as a mapping between one or more Ignition Roles/Security Levels and one or more TamakiMES Permissions. This mapping allows for the assignment of specific permissions to users based on their roles in Ignition.
- **Key Points:**
  - These Personnel Roles define Role-Permission Relationships.
  - Personnel Roles are created and managed within the TamakiMES interface.
  - These Personnel Roles are stored in the personnel_roles table in the TamakiMES database.
