# CFU | JS Variables

<h2 class="raw">Check For Understanding</h2>
<p></p>
<p>After each lesson, you will find the &ldquo;<strong>Check For Understanding</strong>&rdquo; (CFU) section. This section contains exercises to help you practice the concepts covered in the lesson.</p>
<p>Follow the instructions outlined in each exercise and code your solution to complete the exercise.</p>
<p>Try your best to solve the exercise on your own before checking the solution. Nevertheless, if it takes you more time than estimated, feel free to reference the solution and then go back and complete the exercise!</p>
<p></p>
<h2 class="raw">Activity Format: Find the Answer</h2>
<p></p>
<p>&ldquo;Find the Answer&rdquo; is a group activity where you will have to answer a series of questions based on the lesson you have just completed.</p>
<p>Your teacher will put you into groups at the beginning of the activity, and you will answer as many questions as you can during the allocated time. You may check the solutions after each question or all at once at the end of the activity. If you decide to check them all at once, make sure you allow enough time to do this!</p>
<p>Go through the questions one-by one, reading each of them as a group before trying to answer. Refer to the lesson to answer if necessary, good luck!</p>
<p></p>
<div class="alert alert-info">
<p>The duration for this activity is 30 minutes.</p>
</div>
<hr />
<h3 class="raw">List of Questions</h3>
<h4 class="raw">1. Which of the following are correct variable declarations?</h4>
<p>a. <code>let name = "Max";</code> <br /> b. <code>let my name = "Jane";</code> <br /> c. <code>const age = 37;</code> <br /> d. <code>const 1name = 'Henry';</code></p>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<ul>
<li class="raw">a</li>
<li class="raw">c</li>
</ul>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">2. Why would you declare variables with <code>const</code> const instead of <code>let</code>?</h4>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>You would use &ldquo;const&rdquo; to declare variables whose value is not going to change. On the other hand, you would use &ldquo;let&rdquo; to declare variables whose value you expect to change.</p>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">3. What would the result of the code below be and why?</h4>
<pre><code class="javascript hljs raw">const name = "Paul";
name = "Jeremy";
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>Error - as it is not possible to assign a new value to a const variable.</p>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">4. What would the result of the code below be and why?</h4>
<pre><code class="javascript hljs raw">let country = "Spain";
const country = "Spain";
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>SyntaxError - it is not possible declare two variables with the same name.</p>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">5. What would the result of the code below be and why?</h4>
<pre><code class="javascript hljs raw">const name; 
name = "Paul";
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>Error - a const variable must be initialized during the declaration</p>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">6. Which variable names are valid from this list?</h4>
<p>a. <code>_favMovie</code> <br /> b. <code>$sport</code> <br /> c. <code>tv show</code> <br /> d. <code>actorName</code> <br /> e. <code>school name</code> <br /> f. <code>5days</code></p>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<ul>
<li class="raw">a</li>
<li class="raw">b</li>
<li class="raw">d</li>
</ul>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">7. Declare a variable for your favorite food and name it using camelCase</h4>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<pre><code class="javascript hljs raw">let favoriteFood = "Pizza";
</code></pre>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">8. The following code has some errors, what are they?</h4>
<pre><code class="javascript hljs raw">const myTown;
myTown = "London";
myTown = "Madrid";
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>When variables are declared using const they must be initialized with the value during the declaration, on the same line.</p>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">9. The following code has some errors, what are they?</h4>
<pre><code class="javascript hljs raw">const myCountry = "Brazil";
myCountry = "France";
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>After a &ldquo;const&rdquo; variable is declared and initialized, its value cannot be changed by reassignment.</p>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">10. What is the output of the following <code>console.log</code>?</h4>
<pre><code class="javascript hljs raw">let hello;

console.log(hello);
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<ul>
<li class="raw">undefined</li>
</ul>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">11. What would the result of the code below be and why?</h4>
<pre><code class="javascript hljs raw">const super = 50;
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>Error because super is a reserved keyword.</p>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">12. What is the output of the following <code>console.log</code>?</h4>
<pre><code class="javascript hljs raw">let b = 20;
b *= 2;

console.log(b);
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<ul>
<li class="raw">40</li>
</ul>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">13. Which of the following are true?</h4>
<p>a. Variable names are case sensitive <br /> b. Variable names cannot start with numbers <br /> c. Using camelCase notation is mandatory <br /> d. Variables can start with <code>$</code></p>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<ul>
<li class="raw">a</li>
<li class="raw">b</li>
<li class="raw">d</li>
</ul>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">14. What is the output of the following <code>console.log</code>?</h4>
<pre><code class="javascript hljs raw">let name = "John";
console.log("My name is " + name);
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>My name is John</p>
</details></div>
<p><br /><br /></p>
<hr />
<h4 class="raw">15. Bonus Question: Would this code cause an error? Why/why not?</h4>
<pre><code class="javascript hljs raw">let y;
y = 9;
y = "Dog";
</code></pre>
<p></p>
<div class="alert alert-success"><details style="font-size: 14px; cursor: pointer; outline: none; color: #575d70;"> <summary>Solution</summary> <br />
<p>No, because when a variable is declared using let its value can change.</p>
</details></div>
