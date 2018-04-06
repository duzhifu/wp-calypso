/** @format */

/**
 * External dependencies
 */
import debugFactory from 'debug';
const debug = debugFactory( 'lib/load-script/dom-operations' );

/**
 * Internal dependencies
 */
import { handleRequestError, handleRequestSuccess } from './callback-handler';

export function createScriptElement( url ) {
	debug( `Creating script element for "${ url }"` );
	const script = document.createElement( 'script' );
	script.src = url;
	script.type = 'text/javascript';
	script.async = true;
	script.onload = handleRequestSuccess;
	script.onerror = handleRequestError;
	return script;
}

export function hasScriptElement( url ) {
	const loadedScripts = document.getElementsByTagName( 'script' );

	const scriptMatchingUrl = Array.from( loadedScripts ).find( scriptTag => scriptTag.src === url );

	return typeof scriptMatchingUrl !== 'undefined';
}

export function attachToHead( element ) {
	debug( 'Attaching element to head' );
	document.head.appendChild( element );
}
