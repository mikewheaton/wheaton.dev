---
path: '/notes/prisma-system-fields'
date: '2019-01-29'
title: 'Sorting by Created Date with GraphQL and Prisma'
draft: false
---

While working on a side project with Prisma and GraphQL, I ran into a common situation. I wanted to display a list of items sorted from newest to oldest.

My first idea was to add a field for the created date to the model, just like any other. This could be set in the mutation resolver when an item is created.

```graphql
type Item {
  ...
  created: DateTime!
}
```

However, I was concerned that it could be accidentally updated in the future. Given how common this requirement is, I thought there might be a better solution.

Digging through the documentation, I learned of Prisma's [system fields](<https://www.prisma.io/docs/reference/service-configuration/data-modelling-(sdl)-eiroozae8u#system-fields>). These are read-only fields that are included in the underlying database, even when they aren't defined in the data model. They're a sort of hidden metadata for each node.

And yes, it's possible to expose these to the GraphQL API by adding a 'createdAt' field with a matching directive. Don't get creative here, the names must be exact.

```graphql
type Item {
  ...
  createdAt: DateTime! @createdAt
}
```

It's now possible to query this like any other field. Prisma generates methods to filter and sort based on this field. For my needs, `createdAt_DESC` did the trick.

```graphql
items(orderBy: createdAt_DESC) {
    id
    name
    description
    createdAt
}
```

That's all there is to it! And since this field had existed under the surface all along, it _already had data for all existing items_. This turned out to be a huge timesaver and is a feature I'll be using, along with the 'updatedAt' system field, regularly from now on.
