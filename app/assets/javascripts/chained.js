
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
		'da-DK': {
			'WaveNet': {
				'da-DK-Wavenet-A': null,
				'da-DK-Wavenet-C': null,
				'da-DK-Wavenet-D': null,
				'da-DK-Wavenet-E': null
			},
			'Basic': {
				'da-DK-Standard-A': null,
				'da-DK-Standard-C': null,
				'da-DK-Standard-D': null,
				'da-DK-Standard-E': null
			}
		},
		'de-DE': {
			'WaveNet': {
				'de-DE-WaveNet-F': null,
				'de-DE-WaveNet-A': null,
				'de-DE-WaveNet-B': null,
				'de-DE-WaveNet-C': null,
				'de-DE-WaveNet-D': null,
				'de-DE-WaveNet-E': null
			},
			'Basic': {
				'de-DE-Standard-E': null,
				'de-DE-Standard-A': null,
				'de-DE-Standard-B': null,
				'de-DE-Standard-F': null
			}
		},
		'en-AU': {
			'WaveNet': {
				'en-AU-Wavenet-A': null,
				'en-AU-Wavenet-B': null,
				'en-AU-Wavenet-C': null,
				'en-AU-Wavenet-D': null
			},
			'Basic': {
				'en-AU-Standard-A': null,
				'en-AU-Standard-B': null,
				'en-AU-Standard-C': null,
				'en-AU-Standard-D': null
			}
		},
		'en-GB': {
			'WaveNet': {
				'en-GB-Wavenet-F': null,
				'en-GB-Wavenet-A': null,
				'en-GB-Wavenet-B': null,
				'en-GB-Wavenet-C': null,
				'en-GB-Wavenet-D': null
			},
			'Basic': {
				'en-GB-Standard-A': null,
				'en-GB-Standard-B': null,
				'en-GB-Standard-C': null,
				'en-GB-Standard-D': null,
				'en-GB-Standard-F': null
			}
		},
		'en-IN': {
			'WaveNet': {
				'en-IN-Wavenet-D': null,
				'en-IN-Wavenet-A': null,
				'en-IN-Wavenet-B': null,
				'en-IN-Wavenet-C': null
			},
			'Basic': {
				'en-IN-Standard-D': null,
				'en-IN-Standard-A': null,
				'en-IN-Standard-B': null,
				'en-IN-Standard-C': null
			}
		},
		'en-US': {
			'WaveNet': {
				'en-US-WaveNet-G': null,
				'en-US-WaveNet-H': null,
				'en-US-WaveNet-I': null,
				'en-US-WaveNet-J': null,
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
				'en-US-Standard-E': null,
				'en-US-Standard-G': null,
				'en-US-Standard-H': null,
				'en-US-Standard-I': null,
				'en-US-Standard-J': null
			}
		},
		'es-ES': {
			'Basic': {
				'es-ES-Standard-A': null
			}
		},
		'fr-CA': {
			'WaveNet': {
				'fr-CA-WaveNet-A': null,
				'fr-CA-WaveNet-B': null,
				'fr-CA-WaveNet-C': null,
				'fr-CA-WaveNet-D': null
			},
			'Basic': {
				'fr-CA-Standard-A': null,
				'fr-CA-Standard-B': null,
				'fr-CA-Standard-C': null,
				'fr-CA-Standard-D': null
			}
		},
		'fr-FR': {
			'WaveNet': {
				'fr-FR-WaveNet-A': null,
				'fr-FR-WaveNet-B': null,
				'fr-FR-WaveNet-C': null,
				'fr-FR-WaveNet-D': null,
				'fr-FR-WaveNet-E': null
			},
			'Basic': {
				'fr-FR-Standard-E': null,
				'fr-FR-Standard-A': null,
				'fr-FR-Standard-B': null,
				'fr-FR-Standard-C': null,
				'fr-FR-Standard-D': null
			}
		},
		'it-IT': {
			'WaveNet': {
				'it-IT-Wavenet-A': null,
				'it-IT-Wavenet-B': null,
				'it-IT-Wavenet-C': null,
				'it-IT-Wavenet-D': null
			},
			'Basic': {
				'it-IT-Standard-A': null,
				'it-IT-Standard-B': null,
				'it-IT-Standard-C': null,
				'it-IT-Standard-D': null
			}
		},
		'nl-NL': {
			'WaveNet': {
				'nl-NL-WaveNet-B': null,
				'nl-NL-WaveNet-C': null,
				'nl-NL-WaveNet-D': null,
				'nl-NL-WaveNet-E': null,
				'nl-NL-WaveNet-A': null
			},
			'Basic': {
				'nl-NL-Standard-A': null,
				'nl-NL-Standard-B': null,
				'nl-NL-Standard-C': null,
				'nl-NL-Standard-D': null,
				'nl-NL-Standard-E': null
			}
		},
		'pl-PL': {
			'WaveNet': {
				'pl-PL-WaveNet-A': null,
				'pl-PL-WaveNet-B': null,
				'pl-PL-WaveNet-C': null,
				'pl-PL-WaveNet-D': null,
				'pl-PL-WaveNet-E': null
			},
			'Basic': {
				'pl-PL-Standard-E': null,
				'pl-PL-Standard-A': null,
				'pl-PL-Standard-B': null,
				'pl-PL-Standard-C': null,
				'pl-PL-Standard-D': null
			}
		},
		'pt-BR': {
			'WaveNet': {
				'pt-BR-Wavenet-A': null
			},
			'Basic': {
				'pt-BR-Standard-A': null
			}
		},
		'pt-PT': {
			'WaveNet': {
				'pt-PT-Wavenet-A': null,
				'pt-PT-Wavenet-B': null,
				'pt-PT-Wavenet-C': null,
				'pt-PT-Wavenet-D': null
			},
			'Basic': {
				'pt-PT-Standard-A': null,
				'pt-PT-Standard-B': null,
				'pt-PT-Standard-C': null,
				'pt-PT-Standard-D': null
			}
		},
		'fi-FI': {
			'WaveNet': {
				'fi-FI-WaveNet-A': null
			},
			'Basic': {
				'fi-FI-Standard-A': null
			}
		},
		'el-GR': {
			'WaveNet': {
				'el-GR-Wavenet-A': null
			},
			'Basic': {
				'el-GR-Standard-A': null
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
		},
		'uk-UA': {
			'WaveNet': {
				'uk-UA-WaveNet-A': null
			},
			'Basic': {
				'uk-UA-Standard-A': null
			}
		}
	};
}
