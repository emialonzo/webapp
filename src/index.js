import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import Ades from './Ades';
import './i18n';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
	<CookiesProvider>
		<Ades />
	</CookiesProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
