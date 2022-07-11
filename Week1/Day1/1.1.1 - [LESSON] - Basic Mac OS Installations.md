<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

# Basic Mac OS installations
<h2 class="raw">Introduction</h2>
<p>This document will guide you through the process of installing all the necessary tools to be able to finish your prework successfully.</p>
<div class="alert alert-danger">
<p><img class="emoji" alt=":rotating_light:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/rotating_light.png" /> It is <strong>absolutely essential</strong> that your Mac user account <strong>has Admin rights</strong>. You won&rsquo;t be able to install and use everything you need without those rights. If you are using a work computer with limited privileges, contact your IT person to grant you admin access.</p>
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
<p><img class="emoji" alt=":grin:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/grin.png" /><img class="emoji" alt=":question:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/question.png" /> What&rsquo;s up with those <strong>dollar signs <code>$</code></strong> you might see before lines of code? Those are to visually distinguish <strong>terminal commands</strong> from other kinds of code. Remember, <strong>we don&rsquo;t have to type the <code>$</code></strong>.</p>
<div class="alert alert-info">
<p>So for:</p>
<pre><code class="shell hljs raw">$ some-command
</code></pre>
<p>you only have to write <code>some-command</code> in your terminal.</p>
</div>
<p>If all this sounds pretty vague at this moment, do not worry. Soon you will know exactly what we are talking about.</p>
<p>Let&rsquo;s go!</p>
<h2 class="raw">Step #1: Install <a href="https://www.iterm2.com/documentation.html">iTerm2</a></h2>
<ol>
<li class="raw">
<p>Go to the <a href="https://www.iterm2.com/downloads.html">downloads</a> page.</p>
</li>
<li class="raw">
<p>Download the <strong>Stable Release</strong>.</p>
</li>
<li class="raw">
<p>Decompress the zip file.</p>
</li>
<li class="raw">
<p>In <code>Finder</code>, drag-and-drop the iTerm2 Application file into the <code>Applications</code> folder.</p>
</li>
<li class="raw">
<p>Launch iTerm2 by simply clicking on the <a href="https://support.apple.com/en-us/HT204014"><code>Spotlight Search</code></a> and type iTerm2.</p>
</li>
<li class="raw">
<p><img class="emoji" alt=":bulb:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/bulb.png" /> Fix the launcher in the Dock navigation bar:</p>
<br /> <details> <summary> Check the image inside</summary>
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0158f0a1ac247b951ce51e9988ceea4a.png" alt="" class="raw md-image" /></p>
</details></li>
<li class="raw">
<p>To launch iTerm later, click on its icon in the App Launcher.</p>
<p>Now we should be able to run iTerm2!</p>
<br /> <details> <summary> Check the image inside</summary>
<p><img src="https://i.imgur.com/ut4QVvM.png" alt="" class="raw md-image" /></p>
</details></li>
</ol>
<h2 class="raw">Step #2: Install the Xcode Command Line Tools</h2>
<p><strong>Xcode</strong> is Apple&rsquo;s development bundle and can be installed by running the following command in the terminal (don&rsquo;t type the <code>$</code> sign):</p>
<pre><code class="shell hljs raw">$ xcode-select --install
</code></pre>
<ul>
<li class="raw">Follow the installations step in the pop-up window.</li>
<li class="raw">Once Xcode is installed, start it up. The tools we need will not work unless the app has run once, and you&rsquo;ve accepted the license agreement. You don&rsquo;t need to do anything with the app. Just start it up (it might take a while to run the first time, even on a fast machine), click agree, and then you can exit from it.</li>
<li class="raw">Don&rsquo;t worry if you get the following message. It means it is already installed.</li>
</ul>
<blockquote class="raw">
<p>xcode-select: error: command line tools are already installed, use &ldquo;Software Update&rdquo; to install updates</p>
</blockquote>
<h2 class="raw">Step #3: Install <a href="https://brew.sh/">Homebrew</a></h2>
<p><strong>Homebrew</strong> is a popular and fantastic package manager for OS X. <em>Package managers</em> keep all the big and small tools that we need to install on our machines tidy and up-to-date.</p>
<ul>
<li class="raw">Run these commands one by one in your terminal:</li>
</ul>
<p>For MacOS Catalina, MacOS Mojave, and MacOS Big Sur:</p>
<pre><code class="shell hljs raw">$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
</code></pre>
<p>For macOS High Sierra, Sierra, El Capitan, and earlier:</p>
<pre><code class="shell hljs raw">$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
</code></pre>
<p>You might be asked to type the administrator password - remember, as you type it, you won&rsquo;t see what you type in the terminal. Just press enter when you are done.</p>
<ul>
<li class="raw">
<p>To verify if <code>brew</code> works type in terminal:</p>
<pre><code class="shell hljs raw">$ brew
</code></pre>
<br /> <details open=""> <summary> Check the image inside: The expected output</summary>
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_b35c9773938fb3d4bfa88d0ddf5f301a.png" alt="" class="raw md-image" /></p>
</details></li>
</ul>
<p><img class="emoji" alt=":+1:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/+1.png" /> Don&rsquo;t worry if it takes a bit to install. Once it is done, that is it; you can proceed to the next step.</p>
<p><em>If you&rsquo;re not sure if your needed program is available through Homebrew, you can search <a href="https://brewformulas.org/">here</a></em>.</p>
<h2 class="raw">Step #4: Install <a href="http://zsh.sourceforge.net/Doc/Release/index.html">ZSH</a></h2>
<p><a href="https://en.wikipedia.org/wiki/Z_shell">Zsh</a> is an interactive login <a href="https://en.wikipedia.org/wiki/Unix_shell">shell</a>. As with the regular terminal, it enables the communication between the user and the computer. It provides many useful features as <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">bash</a> but also adds many new ones.</p>
<p>Now that we have Homebrew installed, installing ZSH is as easy as:</p>
<pre><code class="shell hljs raw">$ brew install zsh
</code></pre>
<p>And we can verify everything is set up correctly by typing:</p>
<pre><code class="shell hljs raw">$ zsh --version
</code></pre>
<h2 class="raw">Step #5: Install <a href="http://ohmyz.sh/">Oh-My-ZSH</a></h2>
<p>Many developers choose to add the <code>Oh-My-Zsh</code> library on top of ZSH. <a href="http://ohmyz.sh/">Oh-My-Zsh</a> is an open-source framework for managing your ZSH configuration. Once installed, we will be able to take advantage of the hundreds of <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins">bundled plugins</a> and <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Themes">pretty themes</a> that are available on the Internet.</p>
<p>To install Oh-My-ZSH, just run the following command in your terminal:</p>
<pre><code class="shell hljs raw">$ curl -L http://install.ohmyz.sh | sh
</code></pre>
<p>You can find more information about the themes and plugins in its <a href="https://github.com/robbyrussell/oh-my-zsh">documentation page</a>.</p>
<h2 class="raw">Step #6: Install <a href="https://code.visualstudio.com/">Visual Studio Code</a></h2>
<p><strong>VS Code</strong> is a source code editor, an application that facilitates writing code. It is a text editor but is specially made for editing source code of computer programs. This will be your fundamental programming tool when writing and editing code.</p>
<p>VSCode&rsquo;s site will detect our <a href="https://en.wikipedia.org/wiki/Operating_system">OS</a> automatically. Visit <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a> and download it by clicking on the button to download the application.</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p><details> <summary> As a Mac user, you should see the following page:</summary>
<p><img src="https://user-images.githubusercontent.com/23629340/33931225-a969a4e4-dfef-11e7-930d-e45bdac3fa30.png" alt="" class="raw md-image" /></p>
</details></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<ul>
<li class="raw">
<p>The installation steps:</p>
<ol>
<li class="raw">Download the application from <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>;</li>
<li class="raw">Extract the zip file you just downloaded in your &ldquo;Desktop&rdquo;;</li>
<li class="raw">Drag the new Visual Studio Code application into your &ldquo;Applications&rdquo; folder - <em>this step is super important since it will allow you to open your files (.html, .css, .js, etc.) directly from the terminal just by typing <code>code name-of-the-file</code></em>;</li>
<li class="raw">To launch it, double click on the VS Code icon.</li>
</ol></li>
<li class="raw">
<p>Let&rsquo;s test if it works as it should: 1. In your terminal, navigate to the root (the root is represented with <a href="https://en.wikipedia.org/wiki/Tilde"><code>tilde</code></a>, and it is placed in the upper left corner of your keyboard - use shift when pressing the button):</p>
</li>
</ul>
<pre><code class="bash hljs raw"># don't type the $ sign - it is there since it represents
# that you should be typing this in your terminal
$ ~
$ cd Desktop # cd stands for change directory, and we use it to navigate
$ mkdir test-vs-code # mkdir is the terminal command to create a new folder
$ cd test-vs-code
$ touch index.html # touch is a terminal command that allows us to create files
$ code index.html # this line allows us to open index.html using VS Code
</code></pre>
<p>If this worked correctly, you are all set!</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p><details> <summary> Check the image inside </summary> <br />
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_9eed1b6542c09877172884c1f95299f5.png" alt="" class="raw md-image" /></p>
</details></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p><img class="emoji" alt=":warning:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/warning.png" /> <em>What could have gone wrong?</em>:</p>
<p>In case you got an error after <code>code index.html</code> that says <strong>code: command not found</strong>, that means that you didn&rsquo;t drag VS Code app to the Application folder. Go ahead and put it to the right place, and try to do open the file again (type again <code>code index.html</code>). If it still doesn&rsquo;t work, do the next:</p>
<ol>
<li class="raw">Open VS Code app (double click on the icon)</li>
<li class="raw">Open the Command Palette via <code>Shift + Command + p</code> (⇧⌘p) and type shell command to find the Shell Command: <strong><code>Install 'code' command in PATH</code></strong>.</li>
</ol>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p><details> <summary> Check the image inside </summary> <br />
<p>￼ <img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_50e9aa15b8b1c19fef4780a157f049c9.png" alt="" class="raw md-image" /></p>
</details></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<ol start="3">
<li class="raw">Close VS Code and go to terminal and try opening <em>index.html</em> again.</li>
</ol>
<p>Now you are all set for sure. <img class="emoji" alt=":wink:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/wink.png" /></p>
<h2 class="raw">Step #7: Install <a href="https://www.google.com/chrome/">Google Chrome</a></h2>
<p>Similar to VS Code, just by visiting <a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a>, it will automatically detect your OS and provide a proper edition for your system.</p>
<ul>
<li class="raw">Steps to follow:<ol>
<li class="raw">Visit <a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a> and click on <em>Download Chrome</em></li>
<li class="raw">In the dialogue box, click on accept and install. A compressed file will then be downloaded from the site.</li>
<li class="raw">Click on it and follow the installation instructions.</li>
</ol></li>
</ul>
<h2 class="raw">Step #8: Install <a href="https://git-scm.com/">Git</a></h2>
<p><strong>Git</strong> is a system for keeping track of changes you make to files and folders in your projects. Don&rsquo;t get confused; later we will talk about GitHub. <em>Git</em> lives on your computer, <em>GitHub</em> is the online &ldquo;storage&rdquo; where you will keep your work and be able to share it with your collaborators.</p>
<p>Git is part of the <a href="https://developer.apple.com/xcode/">Xcode</a> Command Line Tools, so if you have already installed them, you already have git.</p>
<p>Just type <code>git</code> into the terminal. If you don&rsquo;t have the Xcode Command Line Tools already installed, you will be prompted to do so.</p>
<p>Otherwise, you can download this <a href="http://git-scm.com/download/mac">Git installer</a>, which will guide you through the process.</p>
<p>To check if it is working, open up a terminal and type:</p>
<pre><code class="bash hljs raw">$ git --version
# the result: git version 2.19.0
</code></pre>
<p>If you can see that, you have git installed!</p>
<p>If you&rsquo;re still having problems, or if you prefer to install Git from source, here&rsquo;s more information: <a href="http://git-scm.com/book/en/v2/Getting-Started-Installing-Git">Getting Started Installing Git</a>.</p>
<h3 class="raw">Basic configuration</h3>
<p>The first thing you should do is to set your <strong>username</strong> and <strong>email address</strong>. This is important because every git commit uses this information to identify the user who made changes in the document. <em>This all will make much more sense when you get familiarized with git and start using it daily.</em></p>
<p>In your terminal enter the following two lines, one after another:</p>
<pre><code class="bash hljs raw">$ git config --global user.name "John Doe"
$ git config --global user.email "johndoe@example.com"
</code></pre>
<p><strong><img class="emoji" alt=":warning:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/warning.png" /> Replace &ldquo;John Doe&rdquo; and the <a href="mailto:johndoe@example.com">johndoe@example.com</a> with your own info.</strong></p>
<p>You are good to go! <img class="emoji" alt=":heart:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/heart.png" /></p>
<h2 class="raw">Extra resources</h2>
<ul>
<li class="raw"><a href="https://www.macworld.co.uk/how-to/mac-software/how-use-terminal-on-mac-3608274/">Terminal on Mac OS</a></li>
<li class="raw"><a href="https://www.iterm2.com/documentation.html">iTerm2 - official docs</a></li>
<li class="raw"><a href="https://github.com/robbyrussell/oh-my-zsh">oh-my-zsh - official docs</a></li>
<li class="raw"><a href="https://stackoverflow.com/questions/29955500/code-not-working-in-command-line-for-visual-studio-code-on-osx-mac">&ldquo;code .&rdquo; Not working in Command Line for VSCode on OSX/Mac - StackOverflow</a></li>
<li class="raw"><a href="https://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/">How to Install Command Line Tools in Mac OS X </a></li>
</ul>
<p></p>
</body>
</html>
