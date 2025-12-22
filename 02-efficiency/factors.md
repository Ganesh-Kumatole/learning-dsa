## The Efficiency of an Algorithm

When we talk about an algorithm's **efficiency**, we're primarily asking two questions:

1.  **How much time will it take to run?** (Time Complexity)
2.  **How much memory will it need?** (Space Complexity)

The goal is to find a way to measure this that is independent of the computer's speed, the programming language, or the specific compiler. We want to analyze the **intrinsic quality of the algorithm itself**.

---

### Factors Affecting Efficiency

- **Internal Factors:** These are properties of the algorithm itself, like the number of steps it requires. **This is what we focus on in complexity analysis.**
- **External Factors:** These are related to the environment, such as the CPU speed, memory available, programming language, and compiler. We ignore these because they can change.

---

### How to Measure Efficiency: Asymptotic Analysis

We use **Asymptotic Analysis** to describe the performance of an algorithm as its input size grows very large. We are not interested in the exact time (e.g., "2.5 seconds"), but rather in how the running time **grows** in relation to the input size.

This is done using three main notations, with Big O being the most common.

#### The Three Key Notations:

1.  **Big O Notation ($O$): The Upper Bound (Worst-Case)**

    - This is the most important one. It describes the **worst-case scenario**. It answers the question: "What is the maximum time or space this algorithm will ever take for a given input size?" We care about the worst case because it gives us a guaranteed performance boundary.

2.  **Omega Notation ($\Omega$): The Lower Bound (Best-Case)**

    - This describes the **best-case scenario**. It answers the question: "What is the minimum time or space this algorithm will take?" This is less common because the best case often happens under ideal (and sometimes rare) conditions.

3.  **Theta Notation ($\Theta$): The Tight Bound (Average-Case)**
    - This is used when the best-case and worst-case complexities are the same. It provides a precise description of the algorithm's performance.

---

### Common Big O Complexities (from best to worst)

Here are the most common growth rates you will encounter, ordered from most efficient to least efficient.

- **$O(1)$ — Constant Time**

  - **Explanation:** The algorithm takes the same amount of time regardless of the input size.
  - **Example:** Accessing an element in an array by its index (`my_array[5]`).

- **$O(\log n)$ — Logarithmic Time**

  - **Explanation:** The time taken increases logarithmically as the input size `n` grows. The algorithm typically halves the input size with each step.
  - **Example:** Binary Search in a sorted array.

- **$O(n)$ — Linear Time**

  - **Explanation:** The time taken grows linearly with the input size `n`. If you double the input, the time taken roughly doubles.
  - **Example:** Searching for an element in an unsorted list by checking every element.

- **$O(n \log n)$ — Linearithmic Time**

  - **Explanation:** This is a common complexity for efficient sorting algorithms. It's slightly worse than linear but much better than quadratic.
  - **Example:** Merge Sort, Heap Sort.

- **$O(n^2)$ — Quadratic Time**

  - **Explanation:** The time taken is proportional to the square of the input size. This often involves nested loops over the data.
  - **Example:** Simple sorting algorithms like Bubble Sort, Insertion Sort.

- **$O(2^n)$ — Exponential Time**
  - **Explanation:** The time taken doubles with each addition to the input data set. These algorithms become extremely slow very quickly.
  - **Example:** Recursive calculation of Fibonacci numbers without memoization.

---

### How to Calculate Big O: Practical Rules

To calculate the Big O complexity of a piece of code, follow these simple rules:

1.  **Find the Dominant Term:**

    - If an algorithm performs multiple operations, its complexity is determined by the "slowest" or most time-consuming part.
    - **Example:** If you have `O(n^2) + O(n)`, you drop the non-dominant term (`O(n)`) and the complexity is just **$O(n^2)$**.

2.  **Ignore Constants:**

    - Big O is about the growth rate, so constant factors don't matter.
    - **Example:** `O(2n)` is the same as **$O(n)$**. `O(500)` is the same as **$O(1)$**.

3.  **Analyze Loops:**
    - The running time of a loop is, at most, the running time of the statements inside the loop multiplied by the number of iterations.
    - **A single loop** over `n` items is typically **$O(n)$**.
    - **Nested loops** are multiplied. A loop inside another loop is **$O(n * n) = O(n^2)$**.
    * **Consecutive loops** are added. One loop after another is **$O(n + n) = O(2n) = O(n)$**.
