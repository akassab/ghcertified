---
question: "How many jobs will be executed in the following workflow?"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  matrix-job:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        pet: [cat, dog]
        color: [pink, brown]
        include:
          - color: white
            pet: dog
    steps:
      - run: echo "Hello ${{ matrix.color }} ${{ matrix.pet }}"
```
- <input type="checkbox" disabled> 5
- <input type="checkbox" disabled> 4
- <input type="checkbox" disabled> 6
- <input type="checkbox" disabled> 7

> scroll down to see correct answer

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Correct answer

```yaml
jobs:
  matrix-job:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        pet: [cat, dog]
        color: [pink, brown]
        include:
          - color: white
            pet: dog
    steps:
      - run: echo "Hello ${{ matrix.color }} ${{ matrix.pet }}"
```
- [x] 5
> **Simple:** The base matrix is 2×2 = 4 jobs; `include` adds one more combination for **5** total jobs.
>
> **Detailed:** Base matrix: `pet: [cat, dog]` × `color: [pink, brown]` = **4** variants:
>
> - `(cat, pink)`, `(cat, brown)`, `(dog, pink)`, `(dog, brown)`
>
> `include` adds **`{ pet: dog, color: white }`** as a **fifth** combination—it does not multiply the whole matrix again (you do not get another full 2×2). `include` merges extra keys into matching rows or adds new legs. Result: **5** parallel `matrix-job` runs, not 4, 6, or 7.
