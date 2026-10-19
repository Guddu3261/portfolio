---
title: "Writing React components that stay reusable"
date: "2026-09-28"
summary: "Small habits that keep a growing component library maintainable: composition, controlled props, and where state should live."
tags: ["React", "Frontend", "Best practices"]
---

A component is reusable when you can use it in a second place **without editing it**. These are the habits that get me there.

## 1. Prefer composition over configuration

Instead of a component with ten boolean props, let callers pass children.

```jsx
// Hard to extend
<Card title="Orders" showFooter footerText="View all" showIcon />

// Easier to extend
<Card>
  <Card.Header>Orders</Card.Header>
  <Card.Body>...</Card.Body>
  <Card.Footer><a href="/orders">View all</a></Card.Footer>
</Card>
```

## 2. Keep state as low as possible

Put state in the component that needs it, and lift it only when two siblings must share it. Data that comes from the server belongs in a data-fetching layer, not duplicated into `useState`.

## 3. Make form inputs controlled from outside

A reusable input should not own its value. Let the parent (or a form library like Formik) decide.

```jsx
function TextField({ label, value, onChange, error }) {
  return (
    <label>
      {label}
      <input value={value} onChange={(e) => onChange(e.target.value)} />
      {error && <span role="alert">{error}</span>}
    </label>
  );
}
```

## 4. Spread the rest of the props

Let callers add `className`, `aria-*`, or event handlers without you adding a prop for each.

```jsx
function Button({ className = "", ...props }) {
  return <button className={`btn ${className}`} {...props} />;
}
```

## 5. Separate logic from markup with custom hooks

```jsx
function useAppointments(clinicId) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/clinics/${clinicId}/appointments`)
      .then((r) => r.json())
      .then(setData);
  }, [clinicId]);
  return data;
}
```

The component renders; the hook fetches. Both are easier to test and reuse.

## 6. Test behavior, not implementation

With React Testing Library, test what a user sees and does: click the button, expect the text. Tests written this way survive refactors.

## Rule of thumb

If you copy-paste a component a third time, that's the signal to extract and generalize it, not before.
