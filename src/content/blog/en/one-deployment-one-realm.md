---
title: One deployment, one realm
description: Why Realmroot makes the deployment—not an organization row or application record—the identity isolation boundary.
publishedAt: 2026-07-18
author: Realmroot
language: en
---

Multi-tenancy is not one decision. A system can have organizations and still
operate one identity realm. It can register many applications and still share
one user pool.

Realmroot draws the boundary at the deployment.

## What one realm shares

One Realmroot deployment has one:

- Better Auth user pool
- issuer and signing-key lifecycle
- administrator surface
- set of connector, login, MFA, and password policies
- database, asset store, queue, and secret set per environment

Multiple product applications can live inside this realm when they intentionally
share accounts and administrators. Each application remains an OIDC client, not
an identity silo.

## When to deploy another realm

Use a separate deployment when products require independent users,
administrators, issuers, provider configuration, incident response, backup, or
deletion lifecycle.

This is more explicit than threading a tenant predicate through every identity
query. It also aligns the operational boundary with the security boundary:
separate Worker, database, storage, domain, and secrets.

Organizations remain useful authorization and membership objects inside a
realm. They are not a replacement for an independent user pool.

