# angular-marquee
An angular plugin provides marquee message.

## Download
[Compress](https://raw.github.com/emn178/angular-marquee/master/build/jquery.marquee.min.js)  
[Uncompress](https://raw.github.com/emn178/angular-marquee/master/src/jquery.marquee.js)

## Demo
[Marquee](http://emn178.github.io/angular-marquee/samples/marquee/)  

## Requirements
* [jQuery](http://jquery.com/)
* [jQuery.Marquee](https://github.com/aamirafridi/jQuery.Marquee)  
* [AngularJS](https://angularjs.org/)  

## Usage
Add the ngMarquee module as a dependency to your application module:
```JavaScript
var myAppModule = angular.module('MyApp', ['ngMarquee'])
```

## ngMarquee
The ngMarquee directive allows you to specify element as a marquee.

### Directive Info
This directive executes at priority level 0.

### Usage
as element:
HTML
```HTML
<ng-marquee
  ng-options="{}">
...
</ng-marquee>
```
### Arguments
| Param | Type | Details |
|:-----|:-------|-------|
|ngOptions   |expression     |Expression to specify custom options to marquee.    |

### Example
```HTML
<ng-marquee ng-options="{duration: 5000}">
  This is a marquee message.
</ng-marquee>
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/angular-marquee  
Author: emn178@gmail.com
