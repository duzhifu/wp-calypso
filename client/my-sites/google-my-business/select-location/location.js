/** @format */

/**
 * External dependencies
 */
import { connect } from 'react-redux';
import Gridicon from 'gridicons';
import { localize } from 'i18n-calypso';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import CompactCard from 'components/card/compact';
import { getSelectedSiteSlug } from 'state/ui/selectors';
import GoogleMyBusinessLogo from 'my-sites/google-my-business/logo';
import LocationType from './location-type';
import { recordTracksEvent } from 'state/analytics/actions';

class GoogleMyBusinessLocation extends Component {
	static propTypes = {
		location: LocationType.isRequired,
		recordTracksEvent: PropTypes.func.isRequired,
		siteSlug: PropTypes.string.isRequired,
		translate: PropTypes.func.isRequired,
	};

	trackConnectLocationButtonClick = () => {
		this.props.recordTracksEvent(
			'calypso_google_my_business_select_location_connect_location_button_click'
		);
	};

	render() {
		const { location, siteSlug, translate } = this.props;

		return (
			<CompactCard className="gmb-location">
				<div className="gmb-location__content">
					{ location.photo ? (
						<img
							alt={ translate( 'Business profile photo' ) }
							className="gmb-location__photo"
							src={ location.photo }
						/>
					) : (
						<div className="gmb-location__logo">
							<GoogleMyBusinessLogo height="30" width="30" />
						</div>
					) }

					<div className="gmb-location__description">
						<h2 className="gmb-location__name">
							{ location.name }
						</h2>

						<div className="gmb-location__address">
							{ location.address.map( ( line, index ) => (
								<p key={ index }>
									{ line }
								</p>
							) ) }
						</div>

						{ location.verified && (
							<div className="gmb-location__verified">
								<Gridicon
									className="gmb-location__verified-icon"
									icon="checkmark-circle"
									size={ 18 }
								/>
								{ ' ' }
								{ translate( 'Verified' ) }
							</div>
						) }
					</div>
				</div>

				<Button
					className="gmb-location__button"
					href={ `/stats/${ siteSlug }` }
					onClick={ this.trackConnectLocationButtonClick }
				>
					{ translate( 'Connect Location' ) }
				</Button>
			</CompactCard>
		);
	}
}

export default connect(
	state => ( {
		siteSlug: getSelectedSiteSlug( state ),
	} ),
	{
		recordTracksEvent,
	}
)( localize( GoogleMyBusinessLocation ) );
