# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- React JS is one of the most popular libraries used in JavaScript to help create UI. It uses the virtual DOM to interact with the actual DOM to tell it which elements and state to render in, using reconciliation to only update the specific nodes for the components who’s states (data) have been changed. It takes a lot of the load off of the browsers as they don’t have to update or refresh the entire browser anytime a state is changed.

1. What does it mean to think in react?

- Thinking in React is the process of laying out the design of your react app in terms of the file structure and the component hierarchy (what is being imported/exported off of their parent/child relationships) and then implementing the proper code/steps to carry out the file structure design. 

1. Describe state.

- State is the data. It is what the React app is waiting to see change so it can update the respective node to the Virtual DOM (and then the actual DOM). Each component can have its own state so it won’t be updated/refreshed unless that particular components state has changed.

1. Describe props.

- Props (properties) are what we use to pass state (data) from one component to another. When you want to customize/add content to the component, you can add the props parameter and use it inside the function - the props themselves don’t change, but the state does. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

- Side effects are anything that is affecting your code outside of the scope of the function (such as fetching data from an API from this week’s project). Side effects can cause a component to return a different output for the same state and props - we can avoid this by implementing the effect hook: UseEffect( ) inside the function. The effect hook is called on mount (when the function is first called) and takes back 2 arguments - callback function and an array. You can also add an empty dependency array at the end of the effect hook in order to prevent the function from calling an infinite loop of API requests. 
