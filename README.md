XMLHttpRequest-Shim
===================

XMLHttpRequest shim to standarise the object across browsers.


Background
===================

The original goal was to fill the shim gap left after using [es5-shim](https://github.com/es-shims/es5-shim), [es6-shim](https://github.com/paulmillr/es6-shim/) and [dom4-shim](https://github.com/termi/ES5-DOM-SHIM).  A consistant, working XMLHttpRequest was still missing, which left me missing a key componant in some projects.


Status
===================

Alpha! The main motivation is to fill the gaps needed in projects I currently use.  Hence, there is no pressing need to pad-out the module to combat senerios I have not encountered or do not face.  The aim is to have a fully working shim for all browers after IE8 (with some maybe some basic cover for pre-IE8).  However, this is a long-term aim.

I very happy to look at pull requests and issues. I will try to give this attention and help with any issues.

Usage
===================
you will need to download and include [es5-shim](https://github.com/es-shims/es5-shim), [es6-shim](https://github.com/paulmillr/es6-shim/) and [dom4-shim](https://github.com/termi/ES5-DOM-SHIM) in your header before loading this.



Other Projects
===================

The [XHR2 project](https://github.com/termi/XHR2), has done a sterling job of creating shim with most of the bells and whistles.  It is currently far more advanced than this solution.  However, I could not get it to play well with es5-shim, es6-shim and dom4-shim.  My goal is to create a shim to use alongside others rather than standalone.
