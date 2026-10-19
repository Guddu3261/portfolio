---
title: "Multi-tenant apps with PostgreSQL: three ways to isolate tenants"
date: "2026-10-12"
summary: "Shared tables, separate schemas, or separate databases? A practical look at the trade-offs and how row-level security fits in."
tags: ["PostgreSQL", "Architecture", "Multi-tenant"]
---

When one application serves many customers (clinics, companies, schools), the first architecture question is: **how do you keep one tenant's data away from another's?** PostgreSQL gives you three common answers.

## 1. Shared tables with a `tenant_id` column

Every table has a `tenant_id`, and every query filters on it.

```sql
CREATE TABLE patients (
  id         BIGSERIAL PRIMARY KEY,
  tenant_id  BIGINT NOT NULL REFERENCES tenants(id),
  full_name  TEXT   NOT NULL
);

CREATE INDEX patients_tenant_idx ON patients (tenant_id);
```

**Pros:** simplest to build and migrate, cheapest to run, easy cross-tenant reporting for you as the operator.
**Cons:** one forgotten `WHERE tenant_id = ?` is a data leak.

## 2. One schema per tenant

Each tenant gets its own schema (`tenant_42.patients`). You switch with `SET search_path`.

**Pros:** stronger separation, per-tenant backup and restore is easier.
**Cons:** migrations must run once per schema, and thousands of schemas get slow to manage.

## 3. One database per tenant

**Pros:** strongest isolation, simple to move a big customer to its own server.
**Cons:** the most operational overhead: connection pools, migrations, monitoring, all multiplied.

## Make shared tables safe with row-level security

If you choose option 1, don't rely on developers remembering the filter. Let PostgreSQL enforce it:

```sql
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON patients
  USING (tenant_id = current_setting('app.tenant_id')::bigint);
```

Then, per request, set the tenant after authenticating the user:

```js
await client.query("SELECT set_config('app.tenant_id', $1, true)", [tenantId]);
```

The `true` makes the setting local to the current transaction, so it can't leak to the next request that reuses the pooled connection.

## How I'd choose

| Situation | Pick |
| --- | --- |
| Many small tenants, fast iteration | Shared tables + RLS |
| Fewer tenants with strict compliance needs | Schema or database per tenant |
| Unsure | Start shared with RLS, keep `tenant_id` everywhere so you can split later |

The key habit: **put the tenant boundary in the database, not just in application code.**
