# JS | Introduction and syntax
<h2 class="raw">Learning goals</h2>
<p>After this lesson, you will be able to:</p>
<ul>
<li class="raw">Explain what JavaScript is, why we use it, and how it evolved over time</li>
<li class="raw">Use JavaScript to output content to the console</li>
<li class="raw">Write comments in JavaScript code</li>
</ul>
<h2 class="raw">What is JavaScript?</h2>
<p>JavaScript is a lightweight high-level, <a href="https://en.wikipedia.org/wiki/Dynamic_programming_language">dynamic</a> programming language used for web development, game development, and much more. This would probably be the shortest ever definition of JavaScript language.</p>
<p>In the web development domain, JavaScript is used for both <em>front-end</em> and <em>back-end</em> development, which down the road will make you <em>full-stack</em> developers.</p>
<p>In short:</p>
<ul>
<li class="raw">In the <strong>frontend</strong>, JavaScript is used to add interactivity to web pages and allows you to create a variety of features for your apps;</li>
<li class="raw">In the <strong>backend</strong>, JavaScript is used to develop and run servers and server-side applications, thanks to the Node.JS environment.</li>
</ul>
<p>Before we start using JavaScript for any of these, we first need to get familiar with the basics of the JavaScript programming language. In this module, we will focus on the JavaScript foundations and prepare you to hit the ground running when the bootcamp starts.</p>
<h3 class="raw">What JavaScript is <em>not</em></h3>
<p><strong>JavaScript is not Java</strong>, and it has no relation to it. They are <strong>not the same</strong> language and often run in different environments.</p>
<p>The name JavaScript is said to be an attempt to capitalize on the popularity of Java, which was exploding in popularity at the time. JavaScript&rsquo;s syntax is somewhat based on C and Java, which adds to the confusion, but this is where the similarities end.</p>
<h2 class="raw">A short history of JavaScript</h2>
<ul>
<li class="raw"><strong>1995</strong>: The Beginnings</li>
</ul>
<p>JavaScript was created in 1995 by <a href="https://en.wikipedia.org/wiki/Brendan_Eich">Brendan Eich</a>, who was working for <a href="https://en.wikipedia.org/wiki/Netscape">Netscape</a> (a web browser company). Eich created the language <em>in 10 days</em>. Netscape created JavaScript to &ldquo;glue&rdquo; the web (HTML &amp; CSS) together. At the time of its invention, JavaScript was meant to only run in the <em>browser</em>.</p>
<ul>
<li class="raw"><strong>2005</strong>: The <code>HTTP</code> requests and AJAX revolution</li>
</ul>
<p>Around 2005, <code>AJAX</code>, a series of technologies built around <code>XMLHttpRequest</code> for creating interactive apps, was standardized. This allowed easy communication between the client and the server and eventually allowed the creation of apps like Gmail, Google Maps, Twitter, Facebook, and many more. We&rsquo;ll learn more about AJAX later on in the course.</p>
<ul>
<li class="raw"><strong>2009</strong>: NodeJS</li>
</ul>
<p>In 2009, JavaScript took an interesting turn. Thanks to Ryan Dahl JavaScript was taken to the backend (server). He developed a JavaScript environment called <strong>NodeJS</strong>, which allowed the JavaScript to run outside the browser. NodeJS has kept climbing its <a href="https://www.google.com/trends/explore?date=all&amp;q=NodeJS">popularity</a> ever since. In the backend module, you will go in-depth about NodeJS - what it is and how it works.</p>
<h3 class="raw">JavaScript versions</h3>
<div class="alert alert-success">
<p>The <strong>ECMAScript</strong> specification (or <strong>ES</strong> for short) is a standardized specification of the JavaScript language.</p>
</div>
<p>Since its creation in 1995, JavaScript has evolved rapidly and received several major updates and feature additions. In 1997, the <em>Ecma International</em> standards organization published the JavaScript language standard, called <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> Language Specification.</p>
<p>ECMAScript Language Specification standardizes the features of the language and instructs how it should be implemented across browsers. Additionally, the <em>Ecma International</em> organization keeps updating the ECMAScript specification and only approves new features that are <a href="https://en.wikipedia.org/wiki/Backward_compatibility">backward compatible</a>.</p>
<p>Making changes to the language that aren&rsquo;t backward compatible could have a massive adverse effect on the thousands of web pages that depend on it.</p>
<p>JavaScript has gone through many stages of evolution. The major ECMAScript versions, which introduced the most notable features and updates to JavaScript, are:</p>
<ul>
<li class="raw">
<p><strong>ES5</strong> (2009)</p>
</li>
<li class="raw">
<p><strong>ES6</strong> (2015)</p>
</li>
<li class="raw">
<p><strong>ES7</strong> (2016)</p>
</li>
</ul>
<p>During the course, you will use ES6 and later JavaScript features.</p>
<h2 class="raw">Basic JavaScript Syntax</h2>
<div class="alert alert-success">
<p>The <strong>syntax</strong> of a programming language is the <strong>set of rules</strong> that needs to be respected by programmers (<em>who write the code</em>) to be successfully interpreted by machines (<em>that execute that code</em>).</p>
</div>
<p>JavaScript&rsquo;s syntax resembles the syntax of C or Java. This means quite a few curly braces <code>{}</code> and parentheses <code>()</code>.</p>
<p>Semicolons <code>;</code> are optional in JavaScript, but we recommend using them since it makes debugging your code easier. We&rsquo;ll cover this in more depth in the following lessons.</p>
<div class="alert alert-info">
<p><img class="emoji" alt=":information_source:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/information_source.png" /> Although the semicolon is not mandatory, <strong>parentheses and curly braces are mandatory</strong> and will cause an error if they&rsquo;re left out. Be mindful of starting/ending these in the right place.</p>
</div>
<h2 class="raw">Output</h2>
<p>We will start our coding journey by creating a small program that outputs a message to the console. To do this, we will use a command called <code>console.log</code>.</p>
<p>The <code>console.log</code> command allows us to output and see the result of our code. You will get used to writing a lot of <em>console.log()</em> over time.</p>

<h2 class="raw">Comments</h2>
<p>Comments are pieces of information that are never read or executed by JavaScript.</p>
<p>Comments in the code are helpful for several reasons:</p>
<ul>
<li class="raw">Adding notes to your code while learning (now), as a reference to be able to quickly continue where you stopped after a more extended break (later, at work),</li>
<li class="raw">To help you skim through the code when trying to find something quickly,</li>
<li class="raw">To comment out a piece of code that we don&rsquo;t want to run at the moment.</li>
</ul>
<h3 class="raw">Single line comments</h3>
<p>To add a comment with text that fits in one line, we use two forward slashes <code>//</code>. Any text coming after the two double slashes <code>//</code> will be ignored by JavaScript.</p>
<pre><code class="js hljs raw">// a short, one-line comment
</code></pre>
<h3 class="raw">Multi-line comments</h3>
<p>To create a multi-line comment we use <code>/* */</code>. JavaScript will ignore any text placed between <code>/* */</code>.</p>
<pre><code class="javascript hljs raw">/* this is a long, multi-line comment
  Hopefully one day I'll appreciate 
  writing all these comments :) */
</code></pre>
<p></p>
<h2 class="raw">Summary</h2>
<p>In this lesson, you got familiar with a short history of JavaScript as a programming language and you learned about its syntax. In the end, you learned how to use <code>console.log()</code> and how to write comments.</p>
<p>Let the fun begin! <img class="emoji" alt=":rocket:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/rocket.png" /></p>
<h2 class="raw">Extra resources</h2>
<ul>
<li class="raw"><a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a></li>
<li class="raw"><a href="http://www.howtocreate.co.uk/jshistory.html">JavaScript History</a></li>
<li class="raw"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN</a> - reference and documentation of all JavaScript language features</li>
</ul>
