import React from 'react';

import './help-guide.styles.scss';

const HelpGuide = () => {
	return (
		<div id="help-guide" className="component">
			<h1>Pomocník</h1>
			<h2>Čo mám robit?</h2>
			<p>
				V tejto chvíli máte pred sebou video od vašeho kameramana. Pohodlne sa usadte a video si prezrite. Ak sa
				vo videu nachádza niečo s čím nie ste spokojný alebo by ste našli nejaký úsek ktorý by ste chceli
				upraviť napište to prosím do poznámok
			</p>
			<h2>Ako napíšem poznámku?</h2>
			<p>
				Na pravej strane (ak ste na mobilnom zariadeny tak pod videom) sa nachádza panel s poznámkami. Poznámky
				môžete vkladať v troch variantách.
			</p>
			<ol>
				<li>
					<strong>S aktuálnym časom:</strong> poznámka sa odošle s časom v akom sa Vy nachádzate vo video.
				</li>
				<li>
					<strong>So žiadnym časom:</strong> ku poznámke nebude pridelený žiaden čas
				</li>
				<li>
					<strong>S vlastným časom:</strong> ak viete čas v ktorom sa nachádza záber ktorý chcete okomentovať
					stačí keď čas uvediete do políčka a napísete poznámku
				</li>
			</ol>
		</div>
	);
};

export default HelpGuide;
