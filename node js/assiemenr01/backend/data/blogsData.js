const blogsData = [
    {
      id: 1,
      title: "Getting Started with React",
      summary: "Learn the fundamentals of React and understand how components work.",
      body: "React is a JavaScript library used for building interactive user interfaces. It allows developers to divide applications into reusable components. Beginners should first understand components, props, state and events before moving toward advanced concepts."
    },
    {
      id: 2,
      title: "Understanding JavaScript Arrays",
      summary: "Explore important JavaScript array methods used in modern applications.",
      body: "Arrays are one of the most commonly used data structures in JavaScript. Methods such as map, filter, find and includes allow developers to process collections of data efficiently. These methods are especially useful when working with React."
    },
    {
      id: 3,
      title: "What is REST API?",
      summary: "Understand how frontend applications communicate with backend servers.",
      body: "A REST API provides a structured way for applications to communicate with each other. A frontend can request information from a backend through HTTP methods. GET requests are commonly used to retrieve resources."
    },
    {
      id: 4,
      title: "Introduction to Node.js",
      summary: "Learn why Node.js is widely used for backend JavaScript development.",
      body: "Node.js allows JavaScript to run outside the browser. It is commonly used to create backend services, APIs and real-time applications. Its large ecosystem makes it a popular choice for modern web development."
    },
    {
      id: 5,
      title: "Express.js for Beginners",
      summary: "Understand the basics of building APIs using Express.",
      body: "Express.js is a lightweight framework built on top of Node.js. It simplifies the process of creating HTTP routes and APIs. Developers can use Express to define endpoints that respond to requests from frontend applications."
    },
    {
      id: 6,
      title: "Understanding React State",
      summary: "Learn how state allows React components to remember information.",
      body: "State is information managed by a React component. When state changes, React can re-render the component so the user interface reflects the latest data. State is commonly used for inputs, fetched data and interactive features."
    },
    {
      id: 7,
      title: "useEffect Explained",
      summary: "Understand when and why React applications use the useEffect hook.",
      body: "The useEffect hook allows React components to perform side effects. Fetching data from an API when a component loads is one common example. Understanding dependencies is important when working with useEffect."
    },
    {
      id: 8,
      title: "React Router Basics",
      summary: "Learn how multiple pages can be created inside a React application.",
      body: "React Router provides navigation capabilities for React applications. It allows developers to associate URLs with components and create dynamic routes using route parameters."
    },
    {
      id: 9,
      title: "Frontend Filtering",
      summary: "Learn how to filter fetched data directly inside a React application.",
      body: "Frontend filtering means retrieving a collection of data and then filtering that collection in the browser. JavaScript methods such as filter and includes are useful for creating search experiences without sending a new request for every keystroke."
    },
    {
      id: 10,
      title: "Why Component Reusability Matters",
      summary: "Discover why reusable components make React applications easier to maintain.",
      body: "Reusable components reduce duplication and make applications easier to maintain. A card component, for example, can display different products by receiving different data through props."
    },
    {
      id: 11,
      title: "Async and Await in JavaScript",
      summary: "Understand how async and await simplify asynchronous operations.",
      body: "Many web operations take time to complete, such as fetching data from an API. Async and await provide a readable way to work with promises and handle asynchronous operations in JavaScript."
    },
    {
      id: 12,
      title: "Handling Errors in React",
      summary: "Learn why applications should always provide useful error states.",
      body: "Network requests can fail for many reasons. A good React application should communicate failures clearly to users instead of displaying an empty screen. Error state handling is an important part of building reliable interfaces."
    },
    {
      id: 13,
      title: "Loading States in Web Applications",
      summary: "Understand why users need feedback while data is being loaded.",
      body: "Fetching information from a server takes time. A loading state provides feedback while the application waits for a response. Even a simple loading message can significantly improve the user experience."
    },
    {
      id: 14,
      title: "Frontend and Backend Communication",
      summary: "Understand the complete journey of data between React and Express.",
      body: "A React application can request information from an Express backend using HTTP requests. Express processes the request and returns data, usually as JSON. React then stores and renders that information."
    },
    {
      id: 15,
      title: "Building Better Full-Stack Projects",
      summary: "Practical principles for organizing and improving full-stack applications.",
      body: "A good full-stack project separates responsibilities between the frontend and backend. Keeping components focused, APIs organized and data structured makes applications easier to understand, debug and extend."
    }
  ];
  
  export default blogsData;