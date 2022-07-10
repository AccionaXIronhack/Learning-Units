<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

# Basic Linux OS installations
<h2 class="raw">Introduction</h2>
<p>This document will guide you through the process of installing all the necessary tools to be able to finish your prework successfully.</p>
<div class="alert alert-danger">
<p><img class="emoji" alt=":rotating_light:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/rotating_light.png" /> It is <strong>absolutely essential</strong> that your user account <strong>has Admin rights</strong>. You won&rsquo;t be able to install and use everything you need without those rights. If you are using a work computer with limited privileges, contact your IT person to grant you admin access.</p>
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
<p>So for</p>
<pre><code class="shell hljs raw">$ some-command
</code></pre>
<p>you only have to write <code>some-command</code> in your terminal.</p>
</div>
<p>If all this sounds pretty vague at this moment, do not worry. Soon you will know exactly what we are talking about.</p>
<p>Let&rsquo;s go!</p>
<h2 class="raw">Step #1: Install <a href="https://terminator-gtk3.readthedocs.io/en/latest/">Terminator</a></h2>
<p>The terminal is the emulator included in most Linux operating systems. Now we are going to install a terminal emulator for Linux OS, called Terminator.</p>
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a47bdce139b9409100f968b5925f5da2.png" alt="" class="raw md-image" /></p>
<p><strong>Terminator</strong> was created and developed by Chris Jones. Nowadays, it is one of the most popular terminal emulators in the Ubuntu community.</p>
<p>To install Terminator, run the following commands:</p>
<pre><code class="shell hljs raw">$ sudo apt-get update
$ sudo apt-get install terminator
</code></pre>
<div class="alert alert-warning">
<p><img class="emoji" alt=":grin:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/grin.png" /><img class="emoji" alt=":question:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/question.png" /> What&rsquo;s up with those <strong>dollar signs <code>$</code></strong> you might see before lines of code like the one above? Those are to visually distinguish <strong>terminal commands</strong> from other kinds of code. Remember, <strong>we don&rsquo;t have to type the <code>$</code></strong>.</p>
<p>So, for: <code>$ sudo apt-get update</code>, you only have to write <code>sudo apt-get update</code>.</p>
</div>
<h2 class="raw">Step #2: Install <a href="https://linuxconfig.org/learn-the-basics-of-the-zsh-shell">ZSH</a></h2>
<p><a href="https://en.wikipedia.org/wiki/Z_shell">Zsh</a> is an interactive login <a href="https://en.wikipedia.org/wiki/Unix_shell">shell</a>. As with the regular terminal, it enables communication between the user and the computer. It provides many useful features as <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">bash</a> but also adds many new ones.</p>
<ul>
<li class="raw">To install ZSH on Ubuntu, run the following commands:</li>
</ul>
<pre><code class="bash hljs raw">$ apt-get install zsh
$ apt-get install git-core
</code></pre>
<ul>
<li class="raw">In the next step, let&rsquo;s run the following:</li>
</ul>
<pre><code class="bash hljs raw">$ wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
</code></pre>
<div class="alert alert-info">
<p><img class="emoji" alt=":bulb:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/bulb.png" /> <a href="https://www.gnu.org/software/wget/">wget</a> is a utility for making internet requests from the terminal.</p>
</div>
<p>We switch the default <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">bash</a> to the new <code>zsh</code> we just installed:</p>
<pre><code class="bash hljs raw">$ chsh -s `which zsh`
</code></pre>
<div class="alert alert-info">
<p><img class="emoji" alt=":bulb:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/bulb.png" /> <a href="https://linux.die.net/man/1/chsh"><code>chsh</code></a>(Change Shell) is switching from one shell to another. <code>``</code> are not quotes but backticks, found on the top left corner of your keyboard.</p>
</div>
<h2 class="raw">Step #3: Install <a href="http://ohmyz.sh/">Oh-My-ZSH</a></h2>
<p>Many developers choose to add the <code>Oh-My-Zsh</code> library on top of ZSH. <a href="http://ohmyz.sh/">Oh-My-Zsh</a> is an open-source framework for managing your ZSH configuration. Once installed, we&rsquo;ll be able to take advantage of the hundreds of <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins">bundled plugins</a> and <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Themes">pretty themes</a> that are available on the Internet.</p>
<p>To install Oh-My-ZSH, just run the following command in your terminal:</p>
<pre><code class="bash hljs raw">sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
</code></pre>
<h2 class="raw">Step #4: Install <a href="https://code.visualstudio.com/docs/setup/linux">Visual Studio Code</a></h2>
<p><strong>VS Code</strong> is a source code editor, an application that facilitates writing code. It is a text editor but is specially made for editing the source code of computer programs. This will be your fundamental programming tool when writing and editing code.</p>
<p>Visual Studio Code is officially distributed as a Snap package in the <a href="https://snapcraft.io/store">Snap</a> store.</p>
<p>You can install it simply by running:</p>
<pre><code class="bash hljs raw">$ sudo snap install --classic code
</code></pre>
<p>Once installed, Snap will take care of automatically updating VS Code in the background. You will get an in-product update notification whenever a new update is available.</p>
<p><img class="emoji" alt=":star:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/star.png" /> If Snap isn&rsquo;t available in your Linux distribution, please check the following <a href="https://docs.snapcraft.io/installing-snapd/6735">guide</a>, which can help you get that setup.</p>
<h2 class="raw">Step #5: Install <a href="https://www.google.com/chrome/">Google Chrome</a></h2>
<p>Similar to VS Code, just by visiting <a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a>, it will automatically detect your OS and provide a proper edition for your system.</p>
<ul>
<li class="raw">Steps to follow:<ol>
<li class="raw">Visit <a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a> and click on <em>Download Chrome</em></li>
<li class="raw">In the dialogue box, click on accept and install. A compressed file will then be downloaded from the site.</li>
<li class="raw">Click on it and follow the installation instructions.</li>
</ol></li>
</ul>
<h2 class="raw">Step #6: Install <a href="https://git-scm.com/">Git</a></h2>
<p><strong>Git</strong> is a system for keeping track of changes you make to files and folders in your projects. Don&rsquo;t get confused; later, we will talk about GitHub. <em>Git</em> lives on your computer, GitHub is the online &ldquo;storage&rdquo; where you will keep your work and be able to share it with your collaborators.</p>
<ul>
<li class="raw">To install Git on <a href="https://www.ubuntu.com/">Ubuntu</a>, enter the following into the terminal:</li>
</ul>
<pre><code>$ sudo apt-get install git
</code></pre>
<p>To check if it is working, open up a terminal and type:</p>
<pre><code>$ git --version
// the result: git version 2.19.0
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
<p></p>
<p>You are good to go! <img class="emoji" alt=":heart:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/heart.png" /></p>
<p></p>
</body>
</html>

</body>
</html>
