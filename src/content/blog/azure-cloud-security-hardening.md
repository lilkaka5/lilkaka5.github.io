---
title: 'Hardening Azure: A Practical Security Baseline for Cloud Environments'
description: 'A field-tested checklist for locking down Azure environments — from subscription hygiene to network controls and logging. Built from real-world assessment experience.'
date: 2026-02-10
tags: ['Azure', 'Cloud Security', 'Hardening', 'AZ-500']
draft: false
---

Most Azure environments I've assessed weren't breached because someone bypassed a sophisticated control. They were breached — or nearly breached — because a foundational control was missing, misconfigured, or never enabled in the first place.

This is a practical hardening baseline drawn from real assessment work. Not a theoretical framework. Things you can actually go check right now.

## Start at the Subscription Level

Before you touch any individual resource, get the subscription-level controls right.

**Enable Microsoft Defender for Cloud** across all subscriptions and set it to the Standard tier for the services you actually run (servers, storage, SQL, Key Vault, containers). The free tier gives you posture assessment but no threat detection. Threat detection is the point.

**Enable Azure Security Benchmark** as your default policy initiative. This gives you a scored view of your environment's compliance posture against Microsoft's recommended baseline and flags deviations automatically.

**Lock down subscription owners.** Audit who has Owner role at the subscription level. This should be a very short list — service principals for automation, and break-glass emergency accounts only. Day-to-day admins should have scoped, role-specific access.

## Identity and Access

This is where most compromises start.

**Enforce MFA for all users — no exceptions.** Use Conditional Access, not per-user MFA settings. CA policies scale; per-user settings don't. Target all users, all cloud apps, and require MFA for any sign-in risk level above "none."

**Eliminate standing privileged roles.** Any account with Global Admin, Subscription Owner, or Contributor should be in PIM with time-bound activation, approval workflows for sensitive roles, and justification requirements. Review PIM audit logs monthly.

**Check for legacy authentication protocols.** Basic auth, SMTP AUTH, IMAP — these bypass MFA entirely. Block them with a Conditional Access policy targeting legacy authentication clients. If something breaks, that's a conversation you needed to have anyway.

**Audit guest accounts.** Go to Entra ID → External Identities and look at your guest list. Stale guests from old projects, vendors, or contractors are persistent access risks. Run quarterly access reviews through Entra Identity Governance.

## Network Controls

Azure's default networking is permissive. You have to tighten it.

**No public IPs on management interfaces.** RDP and SSH should never be exposed to the internet directly. Use Azure Bastion for jump host access or require VPN/private endpoint connectivity. Check your Network Security Group rules for port 3389 and 22 open to `0.0.0.0/0` — these are automatic findings in every assessment I've run.

**Enable NSG flow logs and send them to a storage account or Log Analytics.** Without flow logs, you have no visibility into east-west traffic or unusual connection patterns. Enable them on every NSG.

**Use Private Endpoints for PaaS services.** Storage accounts, Key Vaults, SQL databases, and similar services should not have public network access enabled unless there's a documented business requirement. Private Endpoints bring the service into your VNet and eliminate the public attack surface.

**Enable DDoS Protection Standard** if you're running public-facing workloads. Basic DDoS is included by default, but it doesn't cover application-layer attacks.

## Data and Key Management

**All data at rest should be encrypted.** Azure encrypts storage at rest by default with platform-managed keys, but wherever possible, use Customer-Managed Keys (CMK) in Azure Key Vault for sensitive workloads. This gives you control over the key lifecycle and a clear audit trail.

**Key Vault access policies vs. RBAC.** Migrate Key Vault instances from access policies to RBAC. RBAC integrates with Entra ID, supports PIM, and gives you a unified audit trail. Access policies are a legacy model with visibility gaps.

**Enable soft-delete and purge protection on all Key Vaults.** Without these, an accidental or malicious deletion of a Key Vault permanently destroys your keys. Enable both — soft-delete (90 days) and purge protection — and you have a recovery window.

**Rotate secrets and certificates on a schedule.** Key Vault supports automatic rotation for supported key types. For secrets, implement a rotation process and monitor expiry with alerts.

## Logging and Detection

Security controls are only as good as your ability to detect when they fail.

**Enable Diagnostic Settings on every resource that matters** — Key Vaults, storage accounts, NSGs, Azure AD, and your subscription activity log — and route them to a central Log Analytics workspace. This is the foundation for any SIEM-based detection.

**Enable Azure AD sign-in and audit logs** with a minimum 90-day retention. Longer if your compliance requirements demand it.

**Set up Microsoft Defender for Cloud alerts** to flow into your SIEM or notification channel. At minimum, configure email notifications for high-severity alerts.

**Monitor for these specific signals:**

- Azure AD sign-ins from outside expected geographies
- New Owner or Contributor role assignments at subscription scope
- Key Vault access by unexpected service principals
- Storage account public access changes
- NSG rule modifications opening inbound ports

---

No environment is hardened in a day. Start with identity — MFA and PIM — because that's where the highest-impact compromises happen. Then layer in network controls, key management, and logging. Run Defender for Cloud's secure score as your ongoing benchmark and work the findings down systematically.

The goal isn't a perfect score. The goal is a defensible posture you can explain to an auditor, a CISO, or an incident responder at 2am.
