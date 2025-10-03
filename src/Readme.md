
1. JSX (JavaScript XML)
   a. A syntax extension for JavaScript.
   b. Lets you write HTML-like code inside JavaScript
   Why use JSX?
   a.Easy to read & write UI.
   b.Combines JavaScript + HTML in one place.
   c.Supports loops, conditions, and variables.
   d.Makes React components simple & reusable.


2. Difference between State and Props in React
   Props
   Passed from parent to child component
   Read-only (cannot be changed by child)
   Makes components reusable
   State
   Managed inside a component
   Mutable (can be updated with setState/useState)
   Makes components dynamic & interactive


3. useState Hook
   A React Hook to add state in functional components.
   value → current state
   setValue → function to update it
   Component re-renders when state changes.


4. Sharing State in React
   Lift State Up
   Keep the state in a common parent component.
   Pass data down via props.

   Context API
   Create a global context.
   Any component can access state without prop-drilling.

   State Management Libraries
   For large apps → use Redux, Zustand, Recoil, etc.


5. Event Handling in React
   CamelCase → Events use camelCase (onClick, onChange).
   JSX Function Reference → Pass a function, not a string.
   Synthetic Events → React wraps native events for cross-browser support.