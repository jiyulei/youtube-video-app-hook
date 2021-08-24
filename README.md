Custom Hook: Reuse same logic for different component.

1. Create by extracting hook-related code out of a function component
2. Custom hooks always make use of at least one primitive hook internally
3. Each custom hook should have one purpose
4. Especially for data-fetching, its great to make reusable by custom hook

Process for creating custom(reuseable) hooks:
1. Identify each line related to some single purpose
2. Identify the inputs 
3. Identify the outputs
4. Extract into a separate function, receiving inputs as argu, and returning outputs

尝试从已经存在的component中去做custom hook时，
首先逐行分析需要复用的逻辑，将其剥离出来，思想上其实就是构建单一目的的函数。
逻辑上需要什么input 来产生什么 output 即--》功能


