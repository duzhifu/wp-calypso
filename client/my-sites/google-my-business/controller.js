/** @format */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import GoogleMyBusinessNewAccount from './new-account';
import GoogleMyBusinessSelectBusinessType from './select-business-type';

export function newAccount( context, next ) {
	context.primary = <GoogleMyBusinessNewAccount />;

	next();
}

export function selectBusinessType( context, next ) {
	context.primary = <GoogleMyBusinessSelectBusinessType />;

	next();
}
