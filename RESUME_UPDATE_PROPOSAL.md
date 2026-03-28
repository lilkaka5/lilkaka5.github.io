# Resume Site Update Proposal

**Source:** Carlos_Miyares_2026.docx
**Date:** 2026-03-27
**Branch:** feat/sync-resume-2026

---

## Summary of Changes

The 2026 resume contains significantly more quantified metrics, richer tool coverage, and updated achievement details across all sections. Below is a file-by-file breakdown of every proposed change.

---

## 1. `src/components/Hero.astro` — Summary Paragraph

### Current

> "Senior security analyst with a proven track record in HITRUST, SOC II, and PCI accreditation. Specializing in IAM, cloud security, and enterprise digital transformation across organizations supporting 5,000+ users. USMC veteran."

### Proposed

> "Innovative and results-driven senior security analyst with a proven track record in HITRUST, SOC II, and PCI accreditation. Adept at cloud security, IAM, and enterprise digital transformation across environments supporting 5,000+ users. Effective cross-functional communicator and USMC veteran."

**Why:** The resume positions Carlos as results-driven and highlights cross-functional leadership — the site summary is missing that framing.

---

## 2. `src/components/Experience.astro` — NationsBenefits Achievements

### Job Summary (Current → Proposed)

**Current:** "Recruited to elevate security posture and operational efficiency. Collaborated with C-Suite to develop and implement cybersecurity vision and strategy. Managed a dynamic environment supporting up to 5,000 users/devices. Achieved HITRUST, SOC II, and PCI accreditation."

**Proposed:** "Recruited to elevate security posture and operational efficiency. Collaborated with C-Suite to develop a robust cybersecurity vision and strategy. Spearheaded cloud-first transformation, modernizing infrastructure and policies for 5,000+ users and devices. Achieved HITRUST, SOC II, and PCI accreditation while optimizing costs and resources."

---

### Achievement 1 — Cybersecurity Compliance & Accreditation

**Current detail:**

> "Led the organization to achieve HITRUST, SOC II, and PCI accreditation."

**Proposed detail:**

> "Led the organization to achieve HITRUST, SOC II, and PCI accreditation leveraging Microsoft Purview for compliance monitoring, Azure Policy enforcement, and Vanta for automated evidence collection and continuous compliance tracking. Established a continuous compliance framework reducing audit preparation time by 60%."

---

### Achievement 2 — Cloud Security & Governance

**Current detail:**

> "Led cloud-first security transformation — Azure Access Reviews, custom Intune compliance policies, Azure Policy management, and full migration from domain-joined Windows to cloud-based Intune."

**Proposed detail:**

> "Architected and implemented cloud-first security strategy using Azure Security Center/Defender for Cloud and Orca Security for CSPM, deploying custom Azure Policies across 500+ resources. Implemented Conditional Access policies in Microsoft Entra ID, custom Intune compliance policies, and automated Azure Access Reviews. Migrated from domain-joined Windows to a fully cloud-based Intune solution supporting 5,000+ endpoints."

---

### Achievement 3 — Security Operations Center

**Current label:** Security Operations Center
**Current detail:**

> "Established and managed SOC team, enhancing incident response capabilities and reducing response times. Developed and maintained SOPs."

**Proposed label:** Security Operations & Incident Response
**Proposed detail:**

> "Established and managed SOC utilizing Microsoft Sentinel as primary SIEM/SOAR platform. Deployed SentinelOne EDR across 5,000+ endpoints with full integration to Microsoft Sentinel. Developed 50+ custom KQL queries for proactive threat hunting and integrated telemetry from Orca Security and Arctic Wolf. Reduced MTTR by 40% through PowerShell and Azure Logic Apps automation."

---

### Achievement 4 — Identity & Access Management

**Current detail:**

> "Led implementation of Azure AD Authentication, MFA, SSO, Conditional Access Policies, and YubiKey deployment."

**Proposed detail:**

> "Led advanced IAM solutions leveraging Microsoft Entra ID and Azure Identity Governance. Eliminated SMS/voice MFA enforcing phishing-resistant methods only (Microsoft Authenticator, YubiKey, OTP). Implemented SSO for 100+ SaaS applications with risk-based Conditional Access. Deployed Azure Entitlement Management for self-service access provisioning. Led BYOD initiative with Intune MAM policies enforcing data protection on personal devices. Automated quarterly access reviews via Azure Logic Apps, reducing manual review time by 75%."

---

### Achievement 5 — Data Loss Prevention & Email Security

**Current detail:**

> "Revamped email DLP policy with automation to reduce detection/response time. Implemented DKIM, DMARC, and customized DLP policies."

**Proposed detail:**

> "Implemented and managed Proofpoint email security with DKIM, DMARC, and SPF authentication. Integrated Proofpoint with Microsoft Purview DLP policies and automated incident response workflows using Power Automate and Azure Functions. Reduced data exfiltration detection and response time from hours to minutes. Deployed ZScaler for secure web gateway and CASB capabilities."

---

### Achievement 6 — Automation & Process Optimization

**Current detail:**

> "Automated access reviews and governance processes. Developed custom KQL queries for proactive threat analysis and monitoring."

**Proposed detail:**

> "Developed extensive automation framework using PowerShell, Python, and Azure Logic Apps to streamline security operations. Created automated playbooks for incident response scenarios, reducing manual intervention by 60%. Built custom integrations between Microsoft Sentinel, SentinelOne, and ticketing systems (ZenDesk/Jira) using Azure Functions and REST APIs. Automated security baseline deployment via Azure Resource Manager templates and Azure Policy."

---

### Achievement 7 — Vulnerability Management

**Current detail:**

> "Established a vulnerability management program with systematic remediation and daily threat analysis."

**Proposed detail:**

> "Established comprehensive vulnerability management program using Orca Security and Arctic Wolf for continuous posture monitoring. Developed automated remediation workflows with PowerShell and Azure Automation, achieving 85% reduction in critical vulnerability exposure time. Conducted daily threat analysis using Microsoft Sentinel, Azure Monitor, and Log Analytics workbooks. Integrated vulnerability data with ZenDesk and Jira for streamlined remediation tracking."

---

## 3. `src/components/Experience.astro` — Champion Solutions Group / CDW Achievements

### Job Summary (Current → Proposed)

**Current:** "Delivered advanced technical support for 300+ clients across Office 365 and Azure. Led a team of five remote engineers. Named Employee of the Quarter Q2 2021."

**Proposed:** "Elevated technical support and operational efficiency by collaborating with senior leadership to implement a robust cloud support framework for 300+ clients across Office 365 and Azure. Led a team of five remote engineers. Named Employee of the Quarter Q2 2021."

---

### Achievement 1 — Cloud Expertise

**Current label:** Cloud Expertise
**Current detail:**

> "Delivered advanced technical support for 300+ clients across Office 365 and Azure."

**Proposed label:** Technical Support & Cloud Expertise
**Proposed detail:**

> "Delivered advanced technical support for 300+ clients across Microsoft 365 and Azure platforms, including Microsoft Entra ID (Azure AD), Exchange Online, SharePoint, Teams, Intune, and Azure Resource Manager. Maintained 98% customer satisfaction rating while managing complex multi-tenant environments."

---

### Achievement 2 — Team Leadership

**Current detail:**

> "Led a specialized team of five remote employees, providing guidance for resolving complex technical issues."

**Proposed detail:**

> "Led a specialized team of five remote employees, providing technical guidance and mentorship for resolving complex Azure and Microsoft 365 issues. Developed PowerShell-based troubleshooting tools and documentation to improve team efficiency and standardize response procedures."

---

### Achievement 3 — Certifications

**Current detail:**

> "Earned 12 certifications in Microsoft ecosystems, Azure, cybersecurity, and network architecture."

**Proposed detail:**

> "Earned 12 Microsoft and industry certifications, demonstrating deep expertise in Microsoft ecosystems, Azure infrastructure, cybersecurity, and network architecture. Applied certification knowledge to provide consultative guidance to clients on best practices."

---

### Achievement 4 — Client Optimization

**Current detail:**

> "Conducted license reviews and Azure calculator evaluations, optimizing clients' technical resources and financial plans."

**Proposed detail:**

> "Conducted comprehensive license reviews and Azure cost optimization assessments, helping clients reduce unnecessary spending while improving security posture. Utilized Azure Advisor, Azure Monitor, and custom PowerShell scripts to provide actionable recommendations."

---

### Achievement 5 — Service Delivery

**Current label:** Service Delivery
**Current detail:**

> "Administered Office 365 Admin Centers for 300+ clients across Azure AD, Teams, Intune, OneDrive, SharePoint, and Exchange."

**Proposed label:** Recognition & Service Excellence
**Proposed detail:**

> "Named Employee of the Quarter in Q2 2021 for outstanding performance resolving intricate technical issues. Managed Microsoft Premier Technical Account with monthly service hour reviews, ensuring high standards of service delivery and client satisfaction across 300+ organizations."

---

## 4. `src/components/Skills.astro` — Tools & Technologies

### Current Tools List (20 items)

`Microsoft Entra ID`, `Azure AD`, `Intune`, `Jamf Pro`, `Zscaler`, `KQL`, `Microsoft Sentinel`, `Defender for Endpoint`, `Exchange Online`, `SharePoint`, `Teams`, `PowerShell`, `HITRUST`, `SOC II`, `PCI-DSS`, `NIST`, `YubiKey`, `Conditional Access`, `MFA / SSO`, `Azure Policy`

### Proposed Tools List (aligned with resume's Technical Proficiencies)

**Security & Monitoring:**
`Microsoft Sentinel`, `Microsoft Defender Suite`, `SentinelOne EDR`, `Proofpoint`, `Orca Security`, `Arctic Wolf`, `Microsoft Purview`, `Defender for Cloud Apps`, `ZScaler`, `Microsoft eDiscovery`

**Cloud & Identity:**
`Microsoft Entra ID`, `Azure Policy`, `Azure Security Center`, `Azure Monitor`, `Azure Key Vault`, `Azure Identity Governance`, `Azure Resource Manager`, `Intune`, `Conditional Access`, `MFA / SSO`, `YubiKey`

**Automation & Scripting:**
`PowerShell`, `Python`, `KQL`, `Azure Logic Apps`, `Power Automate`, `Azure Functions`

**Compliance & Service Management:**
`HITRUST`, `SOC II`, `PCI-DSS`, `Vanta`, `ZenDesk`, `Jira`, `ServiceNow`

**Removed (not in resume):** `Jamf Pro`, `Azure AD` (superseded by Microsoft Entra ID), `Exchange Online`, `SharePoint`, `Teams`, `NIST`, `Defender for Endpoint` (covered by Microsoft Defender Suite)

> Note: The tools section will remain as a flat tag list (matching the current design) but the items will be reordered to reflect resume categories.

---

## Files Changed

| File                              | Type of Change                                     |
| --------------------------------- | -------------------------------------------------- |
| `src/components/Hero.astro`       | Summary paragraph update                           |
| `src/components/Experience.astro` | All achievement details updated with metrics/tools |
| `src/components/Skills.astro`     | Tools list resynced with 2026 resume proficiencies |

## Files NOT Changed

| File                                  | Reason                                             |
| ------------------------------------- | -------------------------------------------------- |
| `src/components/Certifications.astro` | All certifications from resume are already present |
| `src/components/Education.astro`      | Education and military service match exactly       |
| `src/layouts/Layout.astro`            | No resume content here                             |
| `src/pages/index.astro`               | No resume content here                             |
