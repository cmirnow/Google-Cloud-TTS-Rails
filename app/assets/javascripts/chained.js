
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
		'ar-XA': {
			'WaveNet': {
				'ar-XA-Wavenet-A': null,
				'ar-XA-Wavenet-B': null,
				'ar-XA-Wavenet-C': null,
				'ar-XA-Wavenet-D': null
			},
			'Basic': {
				'ar-XA-Standard-A': null,
				'ar-XA-Standard-B': null,
				'ar-XA-Standard-C': null,
				'ar-XA-Standard-D': null
			}
		},
		'bg-BG': {
			'Basic': {
				'bg-bg-Standard-A': null
			}
		},
		'ca-ES': {
			'Basic': {
				'ca-es-Standard-A': null
			}
		},
		'cs-CZ': {
			'WaveNet': {
				'cs-CZ-Wavenet-A': null
			},
			'Basic': {
				'cs-CZ-Standard-A': null
			}
		},
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
			},
			'Neural2': {
				'de-DE-Neural2-B': null,
				'de-DE-Neural2-C': null,
				'de-DE-Neural2-D': null,
				'de-DE-Neural2-F': null
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
		'en-AU': {
			'WaveNet': {
				'en-AU-Wavenet-A': null,
				'en-AU-Wavenet-B': null,
				'en-AU-Wavenet-C': null,
				'en-AU-Wavenet-D': null,
				'en-AU-News-E': null,
				'en-AU-News-F': null,
				'en-AU-News-G': null
			},
			'Basic': {
				'en-AU-Standard-A': null,
				'en-AU-Standard-B': null,
				'en-AU-Standard-C': null,
				'en-AU-Standard-D': null
			},
			'Neural2': {
				'en-AU-Neural2-A': null,
				'en-AU-Neural2-B': null,
				'en-AU-Neural2-C': null,
				'en-AU-Neural2-D': null
			}
		},
		'en-GB': {
			'WaveNet': {
				'en-GB-Wavenet-F': null,
				'en-GB-Wavenet-A': null,
				'en-GB-Wavenet-B': null,
				'en-GB-Wavenet-C': null,
				'en-GB-Wavenet-D': null,
				'en-GB-News-G': null,
				'en-GB-News-H': null,
				'en-GB-News-I': null,
				'en-GB-News-J': null,
				'en-GB-News-K': null,
				'en-GB-News-L': null,
				'en-GB-News-M': null
			},
			'Basic': {
				'en-GB-Standard-A': null,
				'en-GB-Standard-B': null,
				'en-GB-Standard-C': null,
				'en-GB-Standard-D': null,
				'en-GB-Standard-F': null
			},
			'Neural2': {
				'en-GB-Neural2-A': null,
				'en-GB-Neural2-B': null,
				'en-GB-Neural2-C': null,
				'en-GB-Neural2-D': null,
				'en-GB-Neural2-F': null
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
				'en-US-WaveNet-A': null,
				'en-US-WaveNet-B': null,
				'en-US-WaveNet-C': null,
				'en-US-WaveNet-D': null,
				'en-US-WaveNet-E': null,
				'en-US-WaveNet-F': null,
				'en-US-WaveNet-G': null,
				'en-US-WaveNet-H': null,
				'en-US-WaveNet-I': null,
				'en-US-WaveNet-J': null,
				'en-US-News-K': null,
				'en-US-News-L': null,
				'en-US-News-M': null,
				'en-US-News-N': null
			},
			'Basic': {
				'en-US-Standard-A': null,
				'en-US-Standard-B': null,
				'en-US-Standard-C': null,
				'en-US-Standard-D': null,
				'en-US-Standard-E': null,
				'en-US-Standard-F': null,
				'en-US-Standard-G': null,
				'en-US-Standard-H': null,
				'en-US-Standard-I': null,
				'en-US-Standard-J': null
			},
			'Neural2': {
				'en-US-Neural2-A': null,
				'en-US-Neural2-C': null,
				'en-US-Neural2-D': null,
				'en-US-Neural2-E': null,
				'en-US-Neural2-F': null,
				'en-US-Neural2-G': null,
				'en-US-Neural2-H': null,
				'en-US-Neural2-I': null,
				'en-US-Neural2-J': null
			},
			'Studio': {
				'en-US-Studio-M': null,
				'en-US-Studio-O': null
			}
		},
		'es-ES': {
			'Basic': {
				'es-ES-Standard-A': null,
				'es-ES-Standard-B': null,
				'es-ES-Standard-C': null,
				'es-ES-Standard-D': null
			},
			'WaveNet': {
				'es-ES-WaveNet-B': null,
				'es-ES-WaveNet-C': null,
				'es-ES-WaveNet-D': null
			},
			'Neural2': {
				'es-ES-Neural2-A': null,
				'es-ES-Neural2-B': null,
				'es-ES-Neural2-C': null,
				'es-ES-Neural2-D': null,
				'es-ES-Neural2-E': null,
				'es-ES-Neural2-F': null
			}
		},
		'es-US': {
			'Basic': {
				'es-US-Standard-A': null,
				'es-US-Standard-B': null,
				'es-US-Standard-C': null
			},
			'WaveNet': {
				'es-US-WaveNet-A': null,
				'es-US-WaveNet-B': null,
				'es-US-WaveNet-C': null,
				'es-US-News-D': null,
				'es-US-News-E': null,
				'es-US-News-F': null,
				'es-US-News-G': null
			},
			'Neural2': {
				'es-US-Neural2-A': null,
				'es-US-Neural2-B': null,
				'es-US-Neural2-C': null
			},
			'Studio': {
				'es-US-Studio-B': null
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
			},
			'Neural2': {
				'fr-CA-Neural2-A': null,
				'fr-CA-Neural2-B': null,
				'fr-CA-Neural2-C': null,
				'fr-CA-Neural2-D': null
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
			},
			'Neural2': {
				'fr-FR-Neural2-A': null,
				'fr-FR-Neural2-B': null,
				'fr-FR-Neural2-C': null,
				'fr-FR-Neural2-D': null,
				'fr-FR-Neural2-E': null
			}
		},
		'hi-IN': {
			'WaveNet': {
				'hi-IN-Wavenet-D': null,
				'hi-IN-Wavenet-A': null,
				'hi-IN-Wavenet-B': null,
				'hi-IN-Wavenet-C': null
			},
			'Basic': {
				'hi-IN-Standard-D': null,
				'hi-IN-Standard-A': null,
				'hi-IN-Standard-B': null,
				'hi-IN-Standard-C': null
			},
			'Neural2': {
				'hi-IN-Neural2-A': null,
				'hi-IN-Neural2-B': null,
				'hi-IN-Neural2-C': null,
				'hi-IN-Neural2-D': null
			}
		},
		'hu-HU': {
			'WaveNet': {
				'hu-HU-Wavenet-A': null
			},
			'Basic': {
				'hu-HU-Standard-A': null
			}
		},
		'is-IS': {
			'Basic': {
				'is-is-Standard-A': null
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
			},
			'Neural2': {
				'it-IT-Neural2-A': null,
				'it-IT-Neural2-C': null
			}
		},
		'ja-JP': {
			'WaveNet': {
				'ja-JP-Wavenet-A': null,
				'ja-JP-Wavenet-B': null,
				'ja-JP-Wavenet-C': null,
				'ja-JP-Wavenet-D': null
			},
			'Basic': {
				'ja-JP-Standard-A': null,
				'ja-JP-Standard-B': null,
				'ja-JP-Standard-C': null,
				'ja-JP-Standard-D': null
			},
			'Neural2': {
				'ja-JP-Neural2-B': null,
				'ja-JP-Neural2-C': null,
				'ja-JP-Neural2-D': null
			}
		},
		'lv-LV': {
			'Basic': {
				'lv-lv-Standard-A': null
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
		'nb-NO': {
			'WaveNet': {
				'nb-NO-Wavenet-A': null,
				'nb-NO-Wavenet-B': null,
				'nb-NO-Wavenet-C': null,
				'nb-NO-Wavenet-D': null,
				'nb-NO-Wavenet-E': null
			},
			'Basic': {
				'nb-NO-Standard-A': null,
				'nb-NO-Standard-B': null,
				'nb-NO-Standard-C': null,
				'nb-NO-Standard-D': null,
				'nb-NO-Standard-E': null
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
				'pt-BR-Wavenet-A': null,
				'pt-BR-Wavenet-B': null,
				'pt-BR-Wavenet-C': null
			},
			'Basic': {
				'pt-BR-Standard-A': null,
				'pt-BR-Standard-B': null,
				'pt-BR-Standard-C': null
			},
			'Neural2': {
				'pt-BR-Neural2-A': null,
				'pt-BR-Neural2-B': null,
				'pt-BR-Neural2-C': null
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
		'ro-RO': {
			'WaveNet': {
				'ro-RO-Wavenet-A': null
			},
			'Basic': {
				'ro-RO-Standard-A': null
			}
		},
		'ru-RU': {
			'WaveNet': {
				'ru-RU-Wavenet-A': null,
				'ru-RU-Wavenet-B': null,
				'ru-RU-Wavenet-C': null,
				'ru-RU-Wavenet-D': null,
				'ru-RU-Wavenet-E': null
			},
			'Basic': {
				'ru-RU-Standard-A': null,
				'ru-RU-Standard-B': null,
				'ru-RU-Standard-C': null,
				'ru-RU-Standard-D': null,
				'ru-RU-Standard-E': null
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
