## Runtime complexity

- **Constant time [n]:** No matter how many elements you add, the operation takes the same amount of time. This is the **holy grail** so to speak, and is rarely(?) available.
- **Logarithmic time [log(n)]:** You have this if doubling the amount of elements you are iterating over doesn't double operations. Always assume **searching operations** are log(n).
- **Linear time [n]:** Iterating over all elements in the data. A loop from 0 to array.length, for example. Adding one element adds one cycle.
- **Quasilinear Time [n * log(n)]:** You have this if doubling the number of elements does not double the amount of work. Assume this for **sorting operations.**
- **Quadratic time [n^2]:** Every element in the collection has to be compared with every other. The 'handshake problem'. Adding an element squares the number of operations.
- **Exponential time [2^n]:** If you add a single element, the processing power required doubles. Almost always a more efficient way.
