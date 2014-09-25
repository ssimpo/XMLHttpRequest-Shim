(function(global){
	var XMLHttpRequestOriginal = global.XMLHttpRequest;
	
	var XMLHttpRequestShim = function(){
		var xhr = new XMLHttpRequestOriginal();
		var events = {};
		
		addAddEventListener(xhr, events);
		
		return xhr;
	};
	
	function isProperty(propName, value){
		return (
			(Object.prototype.hasOwnProperty.call(value, propName))
			||
			(propName in value)
		);
	}
	
	function addAddEventListener(xhr, events){
		if(!xhr.addEventListener){
			xhr.addEventListener = function(eventName, callback, bubble){
				if(!isProperty(eventName, events)){
					events[eventName] = [];
				}
				
				events[eventName].push(callback);
				xhr.onreadystatechange = function(){
					if(this.readyState === 4){
						if(this.status === 200){
							if(isProperty("load", events)){
								events.load.forEach(function(callback){
									callback({
										"target": this
									});
								}, this);
							}
						}else if(this.status > 399){
							if(isProperty("error", events)){
								events.load.forEach(function(callback){
									callback({
										"target": this
									});
								}, this);
							}
						}
					}
				}.bind(this);
			}.bind(xhr);
		}
	}
	
	global.XMLHttpRequest = XMLHttpRequestShim
})(Function('return this')() || (42, eval)('this'));