---
layout: post
title: "bundle-install-for-jekyll"
date: 2018-07-27 16:03:18 +08:00
categories: gem jekyll gem-bundle
tags: gem jekyll gem-bundle
---


## Problems on linux when using gem bundle install
> As following:

```shell
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.
    current directory: /home/jaysen/gems/gems/nokogiri-1.8.4/ext/nokogiri
/usr/bin/ruby2.5 -r ./siteconf20180727-12716-1rv24w0.rb extconf.rb
checking if the C compiler accepts ... yes
Building nokogiri using packaged libraries.
Using mini_portile version 2.3.0
checking for gzdopen() in -lz... no
zlib is missing; necessary for building libxml2
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.

Provided configuration options:
	--with-opt-dir
	--without-opt-dir
	--with-opt-include
	--without-opt-include=${opt-dir}/include
	--with-opt-lib
	--without-opt-lib=${opt-dir}/lib
	--with-make-prog
	--without-make-prog
	--srcdir=.
	--curdir
	--ruby=/usr/bin/$(RUBY_BASE_NAME)2.5
	--help
	--clean
	--use-system-libraries
	--enable-static
	--disable-static
	--with-zlib-dir
	--without-zlib-dir
	--with-zlib-include
	--without-zlib-include=${zlib-dir}/include
	--with-zlib-lib
	--without-zlib-lib=${zlib-dir}/lib
	--enable-cross-build
	--disable-cross-build

To see why this extension failed to compile, please check the mkmf.log which can
be found here:

  /home/jaysen/gems/extensions/x86_64-linux/2.5.0/nokogiri-1.8.4/mkmf.log

extconf failed, exit code 1

Gem files will remain installed in /home/jaysen/gems/gems/nokogiri-1.8.4 for
inspection.
Results logged to
/home/jaysen/gems/extensions/x86_64-linux/2.5.0/nokogiri-1.8.4/gem_make.out

An error occurred while installing nokogiri (1.8.4), and Bundler cannot
continue.
Make sure that `gem install nokogiri -v '1.8.4' --source
'https://rubygems.org/'` succeeds before bundling.

In Gemfile:
  github-pages was resolved to 188, which depends on
    jekyll-mentions was resolved to 1.4.0, which depends on
      html-pipeline was resolved to 2.8.3, which depends on
        nokogiri
```
<!-- more -->
> All we need is to install "nokogiri-1.8.4" extenstions first, so we just install it at shell:

```shell

 gem install nokogiri -v '1.8.4' --source 'https://rubygems.org/'

​````
> but you maybe encounter another problem:

​```shell
Building native extensions. This could take a while...
ERROR:  Error installing nokogiri:
	ERROR: Failed to build gem native extension.

    current directory: /home/jaysen/gems/gems/nokogiri-1.8.4/ext/nokogiri
/usr/bin/ruby2.5 -r ./siteconf20180727-12995-s0sl19.rb extconf.rb
checking if the C compiler accepts ... yes
Building nokogiri using packaged libraries.
Using mini_portile version 2.3.0
checking for gzdopen() in -lz... no
zlib is missing; necessary for building libxml2
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.

Provided configuration options:
	--with-opt-dir
	--without-opt-dir
	--with-opt-include
	--without-opt-include=${opt-dir}/include
	--with-opt-lib
	--without-opt-lib=${opt-dir}/lib
	--with-make-prog
	--without-make-prog
	--srcdir=.
	--curdir
	--ruby=/usr/bin/$(RUBY_BASE_NAME)2.5
	--help
	--clean
	--use-system-libraries
	--enable-static
	--disable-static
	--with-zlib-dir
	--without-zlib-dir
	--with-zlib-include
	--without-zlib-include=${zlib-dir}/include
	--with-zlib-lib
	--without-zlib-lib=${zlib-dir}/lib
	--enable-cross-build
	--disable-cross-build

To see why this extension failed to compile, please check the mkmf.log which can be found here:

  /home/jaysen/gems/extensions/x86_64-linux/2.5.0/nokogiri-1.8.4/mkmf.log

extconf failed, exit code 1

Gem files will remain installed in /home/jaysen/gems/gems/nokogiri-1.8.4 for inspection.
Results logged to /home/jaysen/gems/extensions/x86_64-linux/2.5.0/nokogiri-1.8.4/gem_make.out
```

> As log discription, we lost zlib (`zlib1g-dev`), ok, let's get is install:

```shell
sudo apt-get install zlib1g-dev
```

That's all right, we could continue install "`nokogirl-1.8.4`" and next run "bundle install"



