# Mermaid Diagram

You can use Mermaid diagram on **Cayman Improved** by including the declaring script on `_layouts/default.html`:

```html
<script src="https://unpkg.com/mermaid@10/dist/mermaid.min.js"></script>
<script>
    mermaid.initialize({
      startOnLoad:true,
      theme: "dark",
    });
    window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
</script>
```

By default & natively on Markdown, it should be rendered by writing mermaid syntax as follow:

~~~md
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
~~~

And it displayed as follow:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

Let's take on another example, organizational chart:

```mermaid
graph TD
   A[Team Lead] --> B[Project Manager]
   B --> C[System Analyst]
   B --> D[Software Architect]
   D --> E[Frontend Developer]
   D --> F[Backend Developer]
```

## UML Languages

Mermaid can be a helpful diagram language to display your own **UML Diagram** such as Sequence Diagram, Class Diagram, State Diagram, Entity Relationship Diagram, etc. using your Markdown notation and code syntax to display the diagram.

Let's take on simple sequence diagram and class diagram below:

```mermaid
sequenceDiagram
  participant dotcom
  participant iframe
  participant viewscreen
  dotcom->>iframe: loads html w/ iframe url
  iframe->>viewscreen: request template
  viewscreen->>iframe: html & javascript
  iframe->>dotcom: iframe ready
  dotcom->>iframe: set mermaid data on iframe
  iframe->>iframe: render mermaid
```

Class Diagram:

```mermaid
classDiagram
  class Drink
  Drink : +String name
  Drink : +Int amount
  Drink : +drink(amount)

  Drink <|-- Water
  Drink <|-- Soda

  Water : +String name
  Water : +Int amount
  Water : +drink(amount)
  Water : +refill(amount)

  Soda : +String name
  Soda : +Int amount
  Soda : +String flavor
  Soda : +drink(amount)
```

State Diagram:

```mermaid
stateDiagram-v2
  [*] --> Still
  Still --> [*]
  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]
```

```mermaid
---
title: "ATM State Diagram"
---
stateDiagram-v2
  [*] --> NoCard
  NoCard --> HasCard: insertCard()
  HasCard --> NoCard: ejectCard()
  HasCard --> HasPin: insertPin()
  HasPin --> NoCard: ejectCard()
  HasPin --> NoCash: withdrawCash() <less than required>
  NoCash --> NoCard: <more than required>
```


## Git Graph

Mermaid can be handful diagram language to create git graph as well!

```mermaid
gitGraph
  commit
  commit
  branch development
  checkout development
  commit
  branch develop/abby
  branch develop/ruby
  checkout develop/ruby
  commit
  commit
  checkout develop/abby
  commit
  checkout development
  merge develop/ruby
  commit
  checkout develop/ruby
  commit
  checkout develop/abby
  merge development
```

By declaring `gitGraph` and add a `commit` to line up the git log:

~~~md
```mermaid
gitGraph
   commit id: "Alpha" tag: "v1.0"
   commit id: "Beta" type: REVERSE
   commit id: "Gamma"
   commit id: "Delta" type: HIGHLIGHT tag: "v1.1"
   commit id: "Sigma"
```
~~~

```mermaid
gitGraph
   commit id: "Alpha" tag: "v1.0"
   commit id: "Beta" type: REVERSE
   commit id: "Gamma"
   commit id: "Delta" type: HIGHLIGHT tag: "v1.1"
   commit id: "Sigma"
```

You can create a branch by using `branch` and switch to another branch with `checkout`. To merge from a branch, use `merge <branch>` to merge commits from `<branch>`:

~~~md
```mermaid
gitGraph
  commit
  commit
  branch experiments
  commit
  checkout main
  commit
  merge experiments
  commit
```
~~~

```mermaid
gitGraph
  commit
  commit
  branch experiments
  commit
  checkout main
  commit
  merge experiments
  commit
```



