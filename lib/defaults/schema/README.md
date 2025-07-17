# How to use schema markup

- Change the content of the schema that you want to add
- Import the schema in the page
- Render it with this snippet

```jsx
<script
  key="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_CONST) }}
/>
```
