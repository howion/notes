# Research Book: History

* [CIDOC CRM](https://cidoc-crm.org/): Tries to structure historical events, actors, and artifacts.

```ts
Person : Type
Event : Time → Type
Witness : (t : Time) → Event t → Prop

// Temporal Entity etc.
```
