/*
    - JavaScript is a
        1. Synchronous and 
        2. Single Threaded language

    - Execution Context:
        - Executes one line at a time
        - Each operation waits for the last one to complete before executing the new one

    - Blocking Code and Non-Blocking Code
        1. Blocking Code (Read File Synchronously):
            - Waits for I/O operations to complete before moving on to the next line
            - Examples: File reading, Network requests, DOM manipulation
            - Best Used For:
                - Simple, synchronous operations
                - Initialization logic (e.g., configuration loading)
                - Debugging and learning (easier flow understanding)
                - Critical sections needing strict order

        2. Non-Blocking Code (Read File Asynchronously):
            - Doesn't wait for I/O operations to complete before moving on to the next line
            - Examples: setTimeout, setInterval, Promises, Fetch API
            - Best Used For:
                - I/O-heavy applications
                - Real-time applications (e.g., chat apps, live updates)
                - High-concurrency systems
                - User interface applications to maintain responsiveness
            


    - Conclusion:
        - **Blocking Code** is best for straightforward, sequential tasks or critical operations where order is crucial.
        - **Non-Blocking Code** is ideal for performance, scalability, and responsiveness, especially in I/O-heavy or   
            real-time applications.
        - Both have Different use cases so we can use both enviorments as per our use cases.
        

    - Async Code:
        - JavaScript handles non-blocking code using asynchronous programming patterns like:
            - **Callbacks**: Functions executed after a task completes
            - **Promises**: Objects representing the eventual completion (or failure) of an asynchronous operation
            - **Async/Await**: Syntactic sugar for Promises, making asynchronous code easier to write and understand
*/
