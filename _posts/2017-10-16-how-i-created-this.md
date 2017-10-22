---
title: "Making this blog"
categories: ["projects"]
layout: blog-layout
---

Three months after buying the shirish.me domain name, I decided to make a good-looking blog. Since I'm a comically bad designer, I needed an inspiration. Fortunately for me, [Julia Evans's website](jvns.ca) was a site I regularly visited, so that's where I began.

I went to her github page first, and tried to make sense of the source code. I quickly realized that adapting just the layout of the site to my purpose would be much faster than trying to figure out the internals and change configuration according to my requirements.

I knew where I was hosting my site: at Github, since it provides free Jekyll hosting. I decided not to edit the file locally because I didn't want to go to the trouble of setting up ruby, jekyll and what have you just for the blog, so I used one of my favourite services ever (it's also the one I'm editing this file right now in)... [Cloud9](c9.io).

Since my instance came with ruby installed, I installed Jekyll, and was ready to edit my blog on the go! If you haven't worked with c9.io it's really worth the try. The free tier is more than enough for regular web development and basic python stuff, and oh man, the IDE rocks! I'm a big fan! : )

Now that I had my development environment set, I needed to get the blog. Since I had decided to only use the layout and not the internals of Julia's website, I ran a `curl -p -k jvns.ca` to copy her homepage in its entirety to my workspace. Since her blog runs on Jekyll too, all I had to to was `$ jekyll serve --host $IP --port $PORT --baseurl ''` and I was ready, serving my (stolen) Jekyll blog.

Of course, that was just the beginning:: I spent an entire day fixing things and setting up the internals of Jekyll to get the blog going.


