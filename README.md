## jeeMessage
jeeMessage provides alerts or messages for user


### Installation

```html
<link rel="stylesheet" type="text/css" href="lib/jee-style.css">
<script type="text/javascript" src="lib/jeeMessages.js"></script>
```
___

### Usage
There is 4 types of messagess :
</br>
Error, Success, Info, warning.
</br></br>
jeeMessages.jeeAdd (' type ' , ' title ' , ' message ')

```javascript
jeeMessages.jeeAdd('success','great!','your invitation has been sent successfully');
```
___

### Options
* top: (number) start top position
* messageDuration: (millisecond) time duration for message
* fadeOut : (boolean) fade effect when time ended

```javascript
jeeMessages.msgOption({
	top:94,
	messageDuration:3000,
	fadeOut:true,
});
```
