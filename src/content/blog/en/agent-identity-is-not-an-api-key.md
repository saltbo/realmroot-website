---
title: An agent identity is not an API key
description: Durable agent identity, host credentials, and delegated API authority solve different problems. Treating them as one secret creates accidental power.
publishedAt: 2026-07-24
author: Realmroot
language: en
---

An API key answers a narrow question: does this request possess a shared
secret? It does not explain which agent is acting, who controls it, which host
currently carries it, or why it has authority.

For delegated agents, those distinctions are the security model.

## Separate identity from the current presenter

A durable agent identity should survive host replacement and key rotation. The
host key proves the current presenter; it should not become the public identity
of the agent.

Realmroot models these separately:

1. The agent identity is the stable subject.
2. A host binding associates a current registration with that identity.
3. Enrollment records the controller-approved relationship.
4. A resource grant records exact business authority.

This separation allows a controller to replace a compromised host without
creating a new public agent identity or transferring authority to an unrelated
machine.

## Enrollment is not authority

Registering or enrolling an agent establishes who it is. It does not entitle the
agent to call every API its controller can access.

Authority starts with a request for one API resource and an exact set of scopes.
For an external resource, that request also identifies one connected account.
Increasing scope, changing the account, or selecting another resource requires a
new decision.

## Tokens should describe the delegation

After approval, the agent receives a short-lived token for the protected
resource. The token identifies the controlling subject and carries the agent
and host in its actor chain. It is bound to the target audience and to the
agent's DPoP key.

The protected API can validate the token without asking Realmroot to proxy the
request. Revoking the grant prevents future issuance.

An API key can still be useful at an integration boundary. It is not a
substitute for an identity and authority model.

