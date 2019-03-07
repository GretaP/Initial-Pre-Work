# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit enter in a web browser after typing the link above, the browser creates a packet which include both a TCP and IP header.  TCP/IP work together to send the request to the server you are trying to reach.  The browser (I think this happens in the browser, but it definitely happens on the local machine) checks to see if the IP address is in the same subnet, which in this case it is not.  The browser checks a local cache to see if the IP address of the requested DNS matches any existing records.  It will also check other caches (see medium.com article.)  If not, it will send a DNS query to find the IP address. (DNS servers will provide this information).

Assuming that this resolves, TCP/IP takes care of packet encapsulation and an HTTP request will be sent to the server associated with the IP address.  (To maintain brevity I will not discuss the complexity of TCP, ssl certs, etc here)  When a TCP connection is established, the browser will send a request (most likely a get request - in the case of techtonic.com this would be the case).

Packets travel across a network by "hopping" from place to place.  At each hop, a device of some type reads the headers on the packet to determine where to send the packet next.  The network interface controller on the local machine will connect to the local network, travel through the local network to the (local) edge router, go through the ISP and eventually hit the internet backbone.  From there, it travels to the server identified by the DNS server in basically the reverse order that it got to the backbone.

The server responds, sending packets via the TCP connection back to the local machine.  (It makes various hops across the network.)  These packets are interpreted by the browser.  Once the information is received and converted into HTML content/files, the browser will render the index file (in this case) and also send out requests to fill out any additional resources that are called from these files if they are not already cached.  

Techtonic uses XML, react, bootstrap, and probably many other tools.  I would be interested in how XML affects this page and I haven't worked in react.  There may be some rendering on the server side due to the use of XML/react/something I am not aware of, but at first glance it seems that most of the rendering will be done in the browser.

Sources: My notes from an online networking class, my memory, https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a, https://en.wikipedia.org/wiki/Internet_protocol_suite, https://en.wikipedia.org/wiki/Domain_Name_System, https://linuxjourney.com/lesson/path-of-a-packet

## From start to finish, how does data reach you to be rendered in the browser?

Due to the answer and nature of the last question, I will start at the server.  However, I can fill in more information upon request.

When the server receives a get request/any request in regards to the webpage, the service which is listening on the related port will send the request to an application.  This application handles the request by finding out which information is needed and packing up that information to send to the client's browser.  

The packets created by the application are sent to the client (description of how packets move is in question 1).  In short, the packet moves from the application, to the edge router of the server's network, to the ISP, to the backbone, to the client's ISP, to the client's edge router, to the client's machine, to the client's browser application.

This data is then rendered in the browser.  There will normally be several get/post requests, which may happen based on page loads, etc especially on dynamic sites.

## What code is rendered in the browser?

Code that is in the .html file, .css, or .js files on the frontend are rendered in browser.  You can get a list of all loaded sources using the developer tools in standard browsers.  At techtonic, there are several JSON minified files (ie ones labeled component) which will be run by the client if called.  There is also an inline script in the index file.

Calls this code makes to the server will likely be rendered on the backend/server rather than in the browser.


## What is the server-side code’s main function?

The server controls what information, including HTML/CSS/JS files, is sent to the client.  It will also run database calls if required, and serve up any information it is designed to create.

Although less common, some websites employ server-side scripting which serves up layout as well as information.

## What is the client-side code’s main function?

The client-side code's main function is to serve up layout and render a visual representation of the data sent to it by the server.

## What is runtime?

Runtime is the phase in which a program executes.  In compiled languages, compilation must occur first; in Javascript runtime happens when you trigger the program to run.  Regardless of if the language is compiled or not, some errors will only become evident during run time.  As a result handling errors during run time is an important part of programming.

source in addition to memory: https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

put your answer here

## How many instances of the server-side code are available at any given time?

put your answer here

## How many instances of the databases connected to the server application are created?

put your answer here
