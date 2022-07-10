<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

# Basic Windows OS installations
<h2 class="raw">Introduction</h2>
<p>This document will guide you through the process of installing all the necessary tools to be able to finish your prework successfully.</p>
<div class="alert alert-danger">
<p><img class="emoji" alt=":rotating_light:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/rotating_light.png" /> It is <strong>absolutely essential</strong> that your Windows user account <strong>has Admin rights</strong>. You won&rsquo;t be able to install and use everything you need without those rights. If you are using a work computer with limited privileges, contact your IT person.</p>
</div>
<h3 class="raw">Important to know beforehand</h3>
<ul>
<li class="raw"><strong>You won&rsquo;t be able to see the password as you type it in the terminal.</strong></li>
</ul>
<p>Sometimes you will be prompted to type a password in the terminal for security reasons. Keep in mind one thing:</p>
<div class="alert alert-info">
<p><img class="emoji" alt=":closed_lock_with_key:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/closed_lock_with_key.png" /> <strong>In the terminal, passwords are invisible.</strong></p>
</div>
<p>This means that the <em>password is not going to be revealed</em> as you type. The main reason for this is security. Passwords won&rsquo;t be visually represented, not even with asterisks. If asterisks are shown, then others can see the length of the password, and that could lead to easier guessing what could be the password.</p>
<ul>
<li class="raw"><strong>Don&rsquo;t type the dollar sign (<code>$</code>) in the terminal when adding commands.</strong></li>
</ul>
<p><img class="emoji" alt=":grin:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/grin.png" /><img class="emoji" alt=":question:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/question.png" /> What&rsquo;s up with those <strong>dollar signs <code>$</code></strong> you might see before lines of code? Those are used to visually distinguish <strong>terminal commands</strong> from other kinds of code. <strong>Remember, you shouldn&rsquo;t type the <code>$</code></strong>.</p>
<div class="alert alert-info">
<p>So for</p>
<pre><code class="shell hljs raw">$ some-command
</code></pre>
<p>you only have to write <strong><code>some-command</code></strong> in your terminal.</p>
</div>
<p>If all this sounds pretty vague at this moment, do not worry. Soon you will exactly know what we are talking about.</p>
<p>Let&rsquo;s go!</p>
<h2 class="raw">Step #1: Update your computer</h2>
<p>We know, updating your computer is annoying. However, if you want to do great work, you need to keep your tools sharp. For computers, that means updating them. We will also use software that requires more recent versions of your operating system.</p>
<p></p>
<p></p>
<p></p>
<p><details style="font-size: 14px; cursor: pointer; outline: none;"> <summary> Check the image inside </summary>
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a1163085834cc6205296198f2d4c7bef.png" alt="" class="raw md-image" /></p>
</details></p>
<p></p>
<p></p>
<p></p>
<ul>
<li class="raw">Press the Windows key and type <em>check for</em> to search.</li>
<li class="raw">Click on the <em>Check for updates</em> result.</li>
<li class="raw">Follow the instructions to update and restart your computer.</li>
<li class="raw">Repeat the previous three steps until you have no more updates.</li>
</ul>
<p></p>
<p></p>
<p></p>
<p><details style="font-size: 14px; cursor: pointer; outline: none;"> <summary> Check the image inside </summary> <br />
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_81074fa9bae80b35a09f0ccdd456a9b2.png" alt="" class="raw md-image" /></p>
</details></p>
<p></p>
<p></p>
<p></p>
<h2 class="raw">Step #2: Install <a href="https://code.visualstudio.com/">Visual Studio Code</a></h2>
<p><strong>Visual Studio Code</strong> (VS Code for short) is a source code editor, an application that facilitates writing code. It is not just a text editor&mdash;it has a bunch of features specially made for editing the source code of computer programs. This will be your fundamental programming tool when writing and editing code.</p>
<p>VS Code&rsquo;s site will detect your <a href="https://en.wikipedia.org/wiki/Operating_system">OS</a> automatically. Visit <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a> and download it by clicking on the <em>Download</em> button.</p>
<ul>
<li class="raw">Download the installer from <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>.</li>
<li class="raw">Click on the installer to open it.</li>
<li class="raw">Follow the installation steps to install VS Code on your computer.</li>
<li class="raw">When you click <em>Finish</em>, it will open the VS Code automatically.</li>
</ul>
<p></p>
<p></p>
<p></p>
<p><details style="font-size: 14px; cursor: pointer; outline: none;"> <summary> Check the image inside </summary> <br />
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4ca1c686428248e02116466e46c3a4f9.png" alt="" class="raw md-image" /></p>
</details></p>
<p></p>
<p></p>
<p></p>
<h2 class="raw">Step #3: Install <a href="https://www.google.com/chrome/">Google Chrome</a></h2>
<p>Google may not be the best company for privacy, but their browser is one of the best for Web development.</p>
<p>To install Google Chrome, follow these steps:</p>
<ul>
<li class="raw">Visit <a href="https://www.google.com/chrome/">the Google Chrome website</a>.</li>
<li class="raw">Click the <em>Download Chrome</em> button.</li>
<li class="raw">Download the Chrome installer by clicking on the <em>Accept and Install</em> button.</li>
<li class="raw">Once downloaded, run the installer to get Google Chrome installed.</li>
</ul>
<h2 class="raw">Step #4: Install <a href="https://www.atlassian.com/git/tutorials/install-git#windows">Git</a></h2>
<p><strong>Git</strong> is a version control system used for keeping track of changes you make to files and folders in your projects. Don&rsquo;t get confused; later we will talk about GitHub - while <em>git lives on your computer</em>, <em>GitHub is the online platform that serves as a &ldquo;storage&rdquo; where you will keep your work and be able to share it with your collaborators</em>.</p>
<p>To install Git on <a href="https://www.atlassian.com/git/tutorials/install-git#windows">Windows</a>, follow these steps:</p>
<ol>
<li class="raw">Download the latest <a href="https://gitforwindows.org/">Git for Windows installer</a>.</li>
<li class="raw">When you have successfully started the installer, you should see the Git Setup wizard screen. Follow the <em>Next</em> prompts to complete the installation. As default options are pretty sensible for most users you should stick to the default recommended settings provided by the installer.</li>
<li class="raw">Once you click <em>Install</em>, Git and Git Bash will be installed.</li>
<li class="raw">Once installed, press the Windows key and type <em>Git Bash</em> to search.</li>
<li class="raw">Select <em>Git Bash</em> by pressing the <em>right-click</em>, then select <em>Pin to taskbar</em> to create a shortcut for easy access.</li>
</ol>
<p></p>
<p></p>
<p></p>
<p><details style="font-size: 14px; cursor: pointer; outline: none;"> <summary> Check the image inside </summary>
<p><img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/prework/installations/win-installations-prework-gitbash-01.png" alt="" class="raw md-image" /></p>
</details></p>
<p></p>
<p></p>
<p></p>
<div class="alert alert-info">
<p><img class="emoji" alt=":computer:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/computer.png" /> <em>Git Bash</em> is the terminal emulator that allows you to use Unix terminal commands on Windows. <img class="emoji" alt=":dart:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/dart.png" /> From now on you will be using <em>Git Bash</em> as your default terminal to run the terminal commands.</p>
</div>
<h3 class="raw">Basic configuration</h3>
<p>The first thing you should do after installing Git is to set your <strong>user name</strong> and <strong>email address</strong> (meaning, you are establishing yourself as a user).</p>
<div class="alert alert-info">
<p>This is important because every <em>git commit</em> uses this information to identify the user who made changes in the document.</p>
</div>
<p>You might ask yourself - what is <em>git commit</em> but we promise - <em>this all will make much more sense when you get familiarized with git and start using it daily.</em></p>
<p>To do the above, let&rsquo;s open <strong>Git Bash</strong>.</p>
<p>You will be using the Git Bash terminal for accessing files and folders, as well as using <strong>git</strong> and other tools you will learn during the bootcamp.</p>
<ul>
<li class="raw">Press the Windows key and type <strong><em>git bash</em></strong> to search.</li>
<li class="raw">Right-click the <strong><em>Git Bash</em></strong> result to <strong><em>Run as administrator</em></strong>.</li>
</ul>
<p></p>
<p></p>
<p></p>
<p><details style="font-size: 14px; cursor: pointer; outline: none;"> <summary> Check the image inside </summary>
<p><img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/prework/installations/win-installations-prework-gitbash-02.png" alt="" class="raw md-image" /></p>
</details></p>
<p></p>
<p></p>
<p></p>
<ul>
<li class="raw">In the Git Bash window, paste and run the following two lines, one after another: (<strong>without the <code>$</code> and replacing &ldquo;John Doe&rdquo; and <a href="mailto:%22johndoe@example.com">"johndoe@example.com</a>" with your info</strong>):</li>
</ul>
<pre><code class="bash hljs raw">$ git config --global user.name "John Doe"
$ git config --global user.email "johndoe@example.com"
</code></pre>
<p></p>
<p>You are good to go! <img class="emoji" alt=":heart:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/heart.png" /></p>
<p></p>
</body>
</html>