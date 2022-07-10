# JS | Variables
<h2 class="raw">Learning goals</h2>
<p>After this lesson, you will be able to:</p>
<ul>
<li class="raw">Describe what a variable is and its purpose</li>
<li class="raw">Create variables and use them to store values</li>
<li class="raw">Identify different types of variables in JavaScript (<code>let</code>, <code>const</code>, <code>var</code>)</li>
<li class="raw">Name your JavaScript variables correctly</li>
<li class="raw">List different data types available in JavaScript</li>
</ul>
<h2 class="raw">Introduction</h2>
<p>In this lesson, we will learn what a variable is, how to create variables, and how to use them.</p>
<p>We will explain what the different parts (name and value) of a variable are and how they are related. We will also see how to store a value in a variable and change an existing variable value.</p>
<p><img class="emoji" alt=":+1:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/+1.png" /> We will be using <code>console.log()</code> throughout this lesson to print the values of variables to the console.</p>
<h2 class="raw">What is a variable?</h2>
<div class="alert alert-success">
<p>A <strong>variable</strong> is a <strong>named container</strong> (space in the memory) that stores <strong>some value</strong>.</p>
</div>
<p>The main purpose of <strong>variables</strong> is to <strong>store some information</strong> in them. Variables are <strong>labeled with names</strong> so that we may easily access the information contained within them when we need it. A common way of saying - access to a variable - is <strong>reference a variable by its name</strong>.</p>
<p>As you&rsquo;ll learn later in this lesson, the values stored in variables might be of a different type (data type).</p>
<p>Let&rsquo;s use an analogy to help us better understand the concept of variables:</p>
<p>You decided to pack all your stuff into different <em>boxes</em> and place them in your <em>garage</em>. You put a <em>label</em> on each box so that it&rsquo;s easier to find it later, and obviously, the name is descriptive, so you know what is in that box.</p>
<ul>
<li class="raw">the <em>garage</em> is the memory,</li>
<li class="raw">the <em>box</em> is the variable,</li>
<li class="raw">the <em>box label</em> is the variable&rsquo;s name,</li>
<li class="raw">the <em>box content</em> is the variable&rsquo;s value.</li>
</ul>
<p></p>
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e5a71d93af8f601bb2a52b9887eacc9a.jpg" alt="" class="raw md-image" /></p>
<p></p>
<h2 class="raw">Variable <em>declaration</em> and <em>initialization</em></h2>
<p>The actions of creating a variable and giving it some value are known as variable <strong>declaration</strong> and <strong>initialization</strong>.</p>
<p></p>
<h3 class="raw">Variable declaration</h3>
<p></p>
<div class="alert alert-success">
<p>A <strong>variable declaration</strong> is when you create a variable and give it a name.</p>
</div>
<p></p>
<p>When we <strong>declare a variable</strong>, we create storage space in the memory and give it a name (label) by which we can access it later.</p>
<p>To <strong>declare</strong> a variable, we can use the keyword <code>let</code> or <code>const</code>, and in older versions of JavaScript, you would find the keyword <code>var</code>. To start, we&rsquo;ll <strong>use <code>let</code> to declare variables</strong>. Later in the lesson, we&rsquo;ll explain how to use <code>const</code>.</p>
<p>We declare (create) a variable in the following way:</p>
<pre><code class="javascript hljs raw">let age; // &lt;== this is a variable declaration
</code></pre>
<p>Continuing with the previous analogy, we placed an empty box inside the garage and put the name/label on it. We will add the value/information to it later. For now, we just want to <em>&ldquo;save&rdquo;</em> a spot in the garage. <img class="emoji" alt=":wink:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/wink.png" /></p>
<p>We can also declare multiple variables in the same line, starting with the <code>let</code> keyword and separating them with a comma:</p>
<pre><code class="javascript hljs raw">let name, email, course;
</code></pre>
<p></p>
<h3 class="raw">Variable initialization</h3>
<p></p>
<div class="alert alert-success">
<p><strong>Variable initialization</strong> is when you assign some value to a newly declared variable.</p>
</div>
<p></p>
<p>After declaring a variable, you can assign it a value. This process is called <strong>variable initialization</strong>.</p>
<p>Let&rsquo;s see this in an example. You can declare a variable called <code>company</code> and <strong>initialize</strong> it with a value on the next line:</p>
<pre><code class="javascript hljs raw">let company; // &lt;== this is a variable declaration
company = "Ironhack"; // &lt;== this is a variable initialization
</code></pre>
<p>To put the value into the variable, we specified the name of the variable <code>company</code>, and we used the <strong>assignment operator <code>=</code></strong> to give it the value <code>"Ironhack"</code>.</p>
<p></p>
<h3 class="raw">Assignment operator <code>=</code></h3>
<p></p>
<div class="alert alert-success">
<p>The <strong>assignment operator <code>=</code></strong> <strong>assigns a value</strong> specified on the <em>right-hand side</em> to a variable on the <em>left-hand side</em>.</p>
</div>
<p></p>
<p>We use the <strong>assignment operator <code>=</code></strong> to assign (give) a value to an existing variable. Please do not confuse it with the mathematical equal symbol <em>=</em>, which is used to represent equality.</p>
<p></p>
<p>We can assign values to variables in two ways:</p>
<ol>
<li class="raw">
<p><strong>assign a value to an existing variable</strong>, after the variable has been declared:</p>
<pre><code class="js hljs raw">let city;
city = "Miami"; // &lt;== this is a variable initialization
</code></pre>
</li>
<li class="raw">
<p><strong>assign a value at the time of declaration</strong>, on the same line:</p>
<pre><code class="js hljs raw">let state = "Florida"; // &lt;== this is a variable declaration and initialization
</code></pre>
</li>
</ol>
<h3 class="raw">Default value - <code>undefined</code></h3>
<p>Suppose you declare a variable, but you don&rsquo;t assign it a value. In that case, its default value will be initialized to <code>undefined</code> (<em>we will cover this in more detail in the following lessons</em>). Here&rsquo;s an example:</p>
<pre><code class="js hljs raw">let favoriteFood;
console.log(favoriteFood); // undefined
</code></pre>
<h4 class="raw">Example 1</h4>
<p>In the following example, we declare and initialize a new variable:</p>
<pre><code class="js hljs raw">// Declare and initialize a variable
let name = "Ironhacker";

console.log(name);
</code></pre>
<p>The variable <code>name</code> is initialized with a value as soon as it is declared.</p>
<p></p>
<h4 class="raw">Example 2</h4>
<p>As mentioned before, we can declare a variable, leave it empty, and then assign a value to it later. Consider the following example:</p>
<pre><code class="js hljs raw">// Declare an empty variable
let age;

// Assign a value to a variable
age = 45;

console.log(name);
console.log(age);
</code></pre>
<p>The variable <code>age</code> is declared and left empty and then assigned a value in the following step.</p>
<p></p>
<h2 class="raw">Variable declaration with <code>let</code></h2>
<div class="alert alert-success">
<p><strong><code>let</code></strong> is used to declare variables whose value may change in the future.</p>
</div>
<p>We can <strong>reassign</strong> (give) new values to variables created with <code>let</code> as often as needed.</p>
<p>To change a variable value, we just need to reference the variable by its name and assign a new value:</p>
<pre><code class="js hljs raw">let favoriteFood;

favoriteFood = "Steak";
console.log(favoriteFood); // &lt;== "Steak"

favoriteFood = "Pizza";
console.log(favoriteFood); // &lt;== "Pizza"

favoriteFood = "Waffles"; 
console.log(favoriteFood); // &lt;== "Waffles"
</code></pre>
<p></p>
<h2 class="raw">Variable declaration with <code>const</code></h2>
<div class="alert alert-success">
<p><strong><code>const</code></strong> is used to declare a variable that will remain <strong>constant</strong> and whose <strong>value can&rsquo;t be reassigned</strong>.</p>
</div>
<p>At times, our programs may need variables whose values will remain constant, to protect certain values from being changed and overwritten. This is where <code>const</code> variables come into play. The <code>const</code> keyword allows us to create <strong>constant</strong> variables whose initial value can&rsquo;t be changed.</p>
<p>Check the following example. If we try to change the value of the <code>const</code> variable, we will get an error:</p>
<pre><code class="javascript hljs raw">const firstName = 'Ana';
firstName = 'Michelle';  // &lt;= Trying to reassign a new value

// console:
// Error: invalid assignment to a constant variable.
</code></pre>
<p><strong>A <code>const</code> variable must be declared and initialized on the same line</strong>, unlike the <code>let</code> variable. In short, <em>const</em> variables need to be <em>assigned some value when the variable is declared</em>. Example:</p>
<p><img class="emoji" alt=":white_check_mark:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/white_check_mark.png" /> Correct:</p>
<pre><code class="javascript hljs raw">const currentYear = 2022; // &lt;==  declare and initialize at the same time
</code></pre>
<p><img class="emoji" alt=":x:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/x.png" /> Wrong:</p>
<pre><code class="js hljs raw">const currentYear;   // &lt;==  Trying to declare a const without an initial value
currentYear = 2022;

// console:
// Error: Missing initializer in const declaration
</code></pre>
<p></p>
<div class="alert alert-info">
<p><img class="emoji" alt=":rocket:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/rocket.png" /> To summarize:</p>
<p><strong><code>let</code></strong> - we should use <code>let</code> when we expect that the variable will change its value.</p>
<p><strong><code>const</code></strong> - we should use <code>const</code> when we want the value of the variable to remain unchanged (constant).</p>
</div>
<p></p>
<h2 class="raw">Naming a variable</h2>
<p>A variable <strong>name</strong> is a unique identifier of a variable. We use the variable name to access the value stored in a variable.</p>
<pre><code class="javascript hljs raw">let companyName = "Ironhack";
let age = 3;

// Use variable name to access the value stored in a variable
console.log(companyName);
console.log(age);
</code></pre>
<p>The name does not determine the <em>type of value</em> stored in a variable. For instance, you can do:</p>
<pre><code class="javascript hljs raw">let companyName = 3;
let age = "Ironhack";
</code></pre>
<p>These variables are valid. However, it wouldn&rsquo;t make sense to name a variable <code>companyName</code> and have a number assigned to it, right?</p>
<p></p>
<h3 class="raw">Variable Naming Rules</h3>
<p>The below listed naming rules must be followed when declaring variables in JavaScript; <strong>otherwise, an error will occur</strong>:</p>
<div class="alert alert-success">
<p><strong>Variable Naming Rules</strong></p>
<ul>
<li class="raw">Variable names must begin with a <em>letter</em>, <em>a dollar sign <code>$</code></em> , or an <em>underscore <code>_</code></em> .</li>
<li class="raw">Variable names can contain <em>letters</em> (uppercase and lowercase), <em>numbers</em>, and the <em>symbols</em> <em><code>_</code></em> and <em><code>$</code></em>.</li>
<li class="raw">Variable names <em>must not contain spaces</em>.</li>
<li class="raw">Variable names are case sensitive (<code>Name</code>, <code>name</code>, and <code>NAME</code> are all different variables)</li>
<li class="raw">Reserved keywords cannot be used as variable names.</li>
</ul>
</div>
<p></p>
<p>The following are examples of valid variable names:</p>
<pre><code class="javascript hljs raw">let a; // the name is "a", with let you are only introducing a variable.
let color;
let _private;
let $button;
let getTop10;
let a_large_name;
let thisWayIsCalledCamelCase;
let &pi;;
let name;
let Name;
</code></pre>
<p></p>
<h3 class="raw">Reserved Keywords</h3>
<p>We said we could use any English or non-English word as a variable name. However, JavaScript has certain <strong>reserved keywords</strong> that <strong>cannot be used as variable names</strong>. For example, the words <code>let</code>, <code>class</code>, <code>return</code>, and <code>function</code> are not allowed as variable names.</p>
<p>Examples:</p>
<pre><code class="javascript hljs raw">let let = "hello"; // &lt;== error, you can't name variable "let"
</code></pre>
<pre><code class="javascript hljs raw">let function = "world"; // &lt;== error, you can't name variable "function"
</code></pre>
<p></p>
<p>You can find the full list of <strong>reserved keywords</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords">here</a>.</p>
<p></p>
<h3 class="raw">Naming Convention - camelCase</h3>
<p>A <strong>naming convention</strong> is one such guideline. Programming languages commonly follow specific naming conventions established by the community or the language itself.</p>
<p></p>
<p><strong>Naming conventions used in JavaScript:</strong></p>
<ul>
<li class="raw">Use <a href="https://en.wikipedia.org/wiki/Camel_case">camelCase</a> when naming variables having more than one word.</li>
<li class="raw">Begin words or abbreviations in the middle of the phrase with a capital letter. The purpose of this practice is to enhance readability.</li>
</ul>
<p></p>
<p>Some other naming conventions that are used in <em>other programming languages</em> are:</p>
<ul>
<li class="raw">camelCase</li>
<li class="raw">PascalCase</li>
<li class="raw">snake_case</li>
<li class="raw">kebab-case</li>
</ul>
<p></p>
<h3 class="raw">Best practices - Naming Variables</h3>
<p>Naming variables is hard, and it is, in fact, one of the hardest things in programming. When naming variables, you should always think to name variables in a meaningful way. The main reasons for this are:</p>
<ul>
<li class="raw">You&rsquo;ll probably have to revisit and read your code again sometime in the future. Name variables so that it is easy to understand what your code is doing.</li>
<li class="raw">You likely won&rsquo;t be the only one reading your code. Make sure the next person who looks at your code can easily understand it.</li>
</ul>
<p></p>
<p>The rules to keep in mind when naming a variable:</p>
<ul>
<li class="raw">Always <strong>use human-understandable</strong> names, like <em>firstName</em>, <em>hasColor</em>, <em>pricePreTax</em>, etc. Machines process the code, but humans still have to read it and be able to understand it.</li>
<li class="raw"><strong>Do not use short unclear names</strong> like <code>x</code><em>, <code>j</code></em>, <code>a</code>_ to name your variables unless it is super clear what the code is doing to you and everyone else.</li>
<li class="raw"><strong>Name variables as descriptive as possible</strong> (e.g., userInfo, voucherValue, creditCardNo, instead of vague names (examples of vague names: info, value, card, etc.).</li>
</ul>
<p></p>
<p>Consider the following examples of naming variables:</p>
<p><img class="emoji" alt=":white_check_mark:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/white_check_mark.png" /> <strong>Good</strong>:</p>
<pre><code class="javascript hljs raw">let firstNum = 1;
let secondNum = 2;
let average = (firstNum + secondNum) / 2;
let message = "The average is " + average;

console.log(message);
</code></pre>
<p></p>
<p><img class="emoji" alt=":x:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/x.png" /> <strong>Bad</strong>:</p>
<pre><code class="javascript hljs raw">let x = 1;
let y = 2;
let z = (x + y) / 2;
let zz = "The average is " + z;

console.log(zz); 
</code></pre>
<p></p>
<h2 class="raw">Data Types</h2>
<p></p>
<div class="alert alert-success">
<p>Data types in JavaScript are divided into:</p>
<ul>
<li class="raw"><strong>Primitive data types</strong> (string, number, boolean, undefined, null, bigInt*****<em>, and symbol*****</em>)</li>
<li class="raw"><strong>Non-Primitive data types</strong> (object, array)</li>
</ul>
</div>
<p></p>
<p>Values stored in variables can be of different types. For example, we can create a variable to store a text (string) with a first name or a variable to store a number with a product price.</p>
<h3 class="raw">Primitive Data Types</h3>
<p></p>
<table>
<thead>
<tr><th>Primitive Data Type</th><th>Example</th></tr>
</thead>
<tbody>
<tr>
<td><em>string</em></td>
<td><code>let name = "Hello";</code></td>
</tr>
<tr>
<td><em>number</em></td>
<td><code>let price = 1034;</code></td>
</tr>
<tr>
<td><em>boolean</em></td>
<td><code>let isActive = true;</code></td>
</tr>
<tr>
<td><em>undefined</em></td>
<td><code>let myUndefined = undefined;</code></td>
</tr>
<tr>
<td><em>null</em></td>
<td><code>let myNull = null;</code></td>
</tr>
</tbody>
</table>
<p></p>
<p><strong><em>*</em></strong> The <em><strong>bigInt</strong></em> and <em><strong>symbol</strong></em> are less commonly used data types (<em>bigint</em> and <em>symbol</em>) that we <em>will not be covering</em> during the course.</p>
<h3 class="raw">Non-Primitive Data Types</h3>
<table>
<thead>
<tr><th>Non-Primitive Data Type</th><th>Example</th></tr>
</thead>
<tbody>
<tr>
<td><em>object</em></td>
<td><code>let student = { name: "Ana", age: 40 };</code></td>
</tr>
<tr>
<td><em>array</em></td>
<td><code>let numbers = [7, 23, 31, 45, 60];</code></td>
</tr>
</tbody>
</table>
<p></p>
<h3 class="raw">The <code>typeof</code> operator</h3>
<p>At the moment when we create a variable, we define its type. Later on, if we decide we want to assign some other value, <strong>we can also change the data type of the value</strong>.</p>
<p></p>
<div class="alert alert-success">
<p>In JavaScript, you can <strong>reassign values</strong> and <strong>change the variable&rsquo;s data type</strong>.</p>
</div>
<p></p>
<p>To check the data type of any variable, if it is not obvious, you can use the JavaScript operator <code>typeof</code>. Here&rsquo;s an example of how:</p>
<pre><code class="javascript hljs raw">let favoriteFood;

favoriteFood = 'Steak';
console.log(typeof favoriteFood); // &lt;==  string

favoriteFood = 20;
console.log(typeof favoriteFood); // &lt;== number

favoriteFood = true;
console.log(typeof favoriteFood); // &lt;== boolean
</code></pre>
<p>You can find more about the <code>typeof</code> operator <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">here</a>.</p>
<p></p>
<div class="alert alert-info">
<p>Keep in mind that you can only reassign the variable and change its value and type if you use <code>let</code> when declaring a variable.</p>
</div>
<p></p>
<h2 class="raw">Summary</h2>
<p>In this lesson, you learned about variables and data types in JavaScript. We can create variables by using the <code>let</code> and <code>const</code> keywords, depending on whether we want the variable value to be changeable or constant. When creating a variable, we first declare it and then initialize it with a value using the assignment operator <code>=</code>.</p>
<p>We should always strive to name our variables in a meaningful way and avoid using names that are very short, unclear, or difficult to understand. Finally, we learned about the various data types available in JavaScript (<em>string</em>, <em>number</em>, <em>boolean</em>, <em>undefined</em>, <em>null</em>, <em>object</em>, and <em>array</em>) and the <code>typeof</code> operator used to check the data type of a variable.</p>
<p>In the following lessons, we&rsquo;ll explore further each of the JavaScript data types introduced above.</p>
<h2 class="raw">Extra resources</h2>
<ul>
<li class="raw"><a href="https://dmitripavlutin.com/javascript-variables-const-let-var/">A Simple Explanation of JavaScript Variables: const, let, var</a></li>
<li class="raw"><a href="https://hackernoon.com/the-art-of-naming-variables-52f44de00aad">The art of naming variables</a></li>
</ul>
