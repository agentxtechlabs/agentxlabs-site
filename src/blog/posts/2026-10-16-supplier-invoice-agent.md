---
title: "Use case: an AI agent that processes supplier invoices"
excerpt: "How a small business can hand invoice intake, checking and logging to an AI agent, while a person still approves anything unusual."
date: 2026-10-16
industry: Finance and operations
---

Most small businesses process supplier invoices the same way: someone opens the shared inbox, downloads each PDF, types the details into a spreadsheet or accounting tool, checks the price against what was ordered, and chases the supplier when something doesn't match.

It's careful, repetitive work. It also scales badly. Twenty invoices a week is a morning. Two hundred is a part-time job.

This is one of the clearest first projects for an AI agent, and here's how we'd approach it.

## The problem

A typical setup we see in businesses with 10 to 100 people:

- Invoices arrive by email in different formats: PDFs, scans, photos and the occasional Excel file.
- One person in operations or finance handles them between other tasks.
- Mismatches against purchase orders get caught late, or not at all.
- Nobody has a quick answer to "what do we owe, and to whom, this month?"

## What the agent does

The agent runs on a schedule, for example every morning, and works through five steps.

1. **Reads the invoices inbox.** It finds new emails with invoices and ignores newsletters and replies.
2. **Pulls out the details.** Supplier, invoice number, line items, amounts, VAT and due date are read from each document, including scans.
3. **Matches against purchase orders.** Each invoice is compared with the order it belongs to. Prices, quantities and totals are checked.
4. **Updates your records.** Clean invoices are logged in your accounting tool or spreadsheet and scheduled for payment.
5. **Flags exceptions to a person.** When something doesn't match, the agent drafts a polite query to the supplier and waits for approval before sending it.

> The agent never pays anything or emails a supplier on its own. It prepares the work, and a person makes the decisions that cost money or reach someone outside the business.

## What it connects to

There's no need to replace the tools you already use. A typical build connects to:

| Where | What the agent does there |
| --- | --- |
| Email (Gmail or Outlook) | Reads the invoices inbox, drafts supplier replies |
| Accounting (Xero, QuickBooks, DATEV, or a spreadsheet) | Logs invoices, reads open purchase orders |
| Team chat (Slack or Teams) | Posts a short daily summary and asks for approvals |

## What it takes to build

For a business with one inbox and one accounting system, we'd usually plan it like this:

- **Week 1:** collect 50 to 100 past invoices, map the current process and agree the matching rules.
- **Weeks 2 to 3:** build the agent and run it alongside the person who does the job today, comparing results.
- **Week 4:** switch over, with the person reviewing only the flagged exceptions.

The side-by-side period is the important part. It shows exactly where the agent gets things right and where it needs a rule or a human check.

## What to expect

Results depend on volume and how messy the documents are, so we measure them during the pilot instead of promising a number up front. The changes businesses typically care about are:

- **Time back.** The routine work shrinks to reviewing a short list of exceptions.
- **Fewer missed overcharges.** Every invoice is checked against the order, not just the large ones.
- **A clear picture.** An up-to-date view of what is owed, to whom and when.

## Is this a good fit for you?

It's worth exploring if you receive more than about 30 invoices a month, most of them match a purchase order or a price list, and one person currently spends hours a week on intake.

It's not a good fit yet if your invoices rarely relate to orders, or if your purchase data lives only in people's heads. In that case, the first step is usually getting orders into a simple system. We can help with that too.
