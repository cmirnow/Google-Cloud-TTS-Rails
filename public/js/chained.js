
var options = generateOptions();

document.querySelector('.chained-selects').addEventListener('change', onChange, false);

function onChange(e) {
	e.stopPropagation();
	
	var s = e.target;
	
	if (!s.nextElementSibling)
		return;
		
	var next = s.nextElementSibling;
		
	if (s.selectedIndex === 0)
		deactivateBoxes(next);
	else {
		var path = [];
		for (var p = s; p; p = p.previousElementSibling) {
			var selOptNode = p.options[p.selectedIndex];
			path.push(selOptNode.value);
		}
		path.reverse();
		
		var children = path.reduce(
			function(o, optName) {
				return o[optName];
			},
			options
		);
		
		/*
		if (children === null) {
			children = fetch(path);
			o[...] = children;
		}
		*/
		
		children = Object.keys(children);
		
		// Insert children in s.nextChild
			for (var q = next.firstElementChild.nextElementSibling; q; q = nextq) {
				nextq = q.nextElementSibling;
				next.removeChild(q);
			}
			for (var i = 0; i < children.length; ++i) {
				var optEl = document.createElement('option');
				optEl.innerHTML = children[i];
				next.appendChild(optEl);
			}
		
		next.selectedIndex = 0;
		next.disabled = false;
		
		deactivateBoxes(next.nextElementSibling);
	}
}

function deactivateBoxes(s) {
	while (s) {
		s.selectedIndex = 0;
		s.disabled = true;
		
		s = s.nextElementSibling;
	}
}

function generateOptions() {
	return {
		'en-US': {
			'WaveNet': {
				'en-US-WaveNet-A': null,
				'en-US-WaveNet-B': null,
				'en-US-WaveNet-C': null,
				'en-US-WaveNet-D': null,
				'en-US-WaveNet-E': null,
				'en-US-WaveNet-F': null
			},
			'Basic': {
				'en-US-Standard-B': null,
				'en-US-Standard-C': null,
				'en-US-Standard-D': null,
				'en-US-Standard-E': null
			}
		},
		'es-ES': {
			'Basic': {
				'es-ES-Standard-A': null
			}
		},
		'ru-RU': {
			'WaveNet': {
				'ru-RU-Wavenet-A': null,
				'ru-RU-Wavenet-B': null,
				'ru-RU-Wavenet-C': null,
				'ru-RU-Wavenet-D': null
			},
			'Basic': {
				'ru-RU-Standard-A': null,
				'ru-RU-Standard-B': null,
				'ru-RU-Standard-C': null,
				'ru-RU-Standard-D': null
			}
		}
	};
}
