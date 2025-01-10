/*
    There are two types of memory that can be allocated
    1. Stack
        -> Primitive data types that can be stored in the stack 
        -> Stack is a linear data structure that follows the LIFO (Last In First Out) principle
        -> Stack is used to store local variables and function calls
        -> Stack has a limited memory size
        -> Stack memory is automatically managed by the system
        -> Stack overflow occurs when the memory stack is full and new memory cannot be allocated
        -> Stack memory is faster than heap memory
    2. Heap
        -> Reference data types are stored in the heap
        -> Heap is a non-linear data structure
        -> Heap is used to store objects, arrays, and functions
        -> Heap has a large memory size
        -> Heap memory is manually managed by the programmer
        -> Memory leaks occur when the programmer forgets to deallocate memory
        -> Heap memory is slower than stack memory
*/

let fname = "Sagar";
let anotherFname = fname;
anotherFname = "Raj";
console.log(fname+" <-> "+anotherFname);


let person1 = {
    name: "Sagar",
    age: 25,
    city: "Mumbai",
    country: "India"
};
let person2 = person1;

person2.name = "Raj";

console.log(person1.name+" <-> "+person2.name);

/*
    person1 and person2 both are objects and they are stored in the
    heap memory.
    When we assign person1 to person2, a reference to the same object is created.
    So,person2.name = "Raj"; is equivalent to person1.name = "Raj";
    person1 and person2 both are pointing to the same memory location
    So, if we change the value of any one object, then it will reflect in both objects

*/