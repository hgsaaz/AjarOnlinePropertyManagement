import React from 'react';
import { Link } from 'react-router-dom';

class FeatureListingComp extends React.Component {

	render() {
		return (
			<div>
				<section className="feature-section spad">
					<div className="container">
						<div className="section-title text-center">
							<h3>Featured Listings</h3>
							<p>Browse houses and flats for sale and to rent in your area</p>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="feature-item">
									<div className="feature-pic set-bg feat1">
										<div className="sale-notic">FOR SALE</div>
									</div>
									<div className="feature-text">
										<div className="text-center feature-title">
											<h5>1963 S Crescent Heights Blvd</h5>
											<p><i className="fa fa-map-marker"></i> Al Rehab, Kuwait</p>
										</div>
										<div className="room-info-warp">
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-th-large"></i>800 Sq.ft</p>
													<p><i className="fa fa-bed"></i>10 Bedrooms</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-car"></i>2 Garages</p>
													<p><i className="fa fa-bath"></i>6 Bathrooms</p>
												</div>
											</div>
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-user"></i>Tony Holland</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-clock-o"></i>1 days ago</p>
												</div>
											</div>
										</div>
										<Link to="/home" className="room-price">1000KD</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-item">
									<div className="feature-pic set-bg feat2">
										<div className="sale-notic">FOR SALE</div>
									</div>
									<div className="feature-text">
										<div className="text-center feature-title">
											<h5>305 North Palm Drive</h5>
											<p><i className="fa fa-map-marker"></i> Slavery, Kuwait</p>
										</div>
										<div className="room-info-warp">
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-th-large"></i>1500 Sq.ft</p>
													<p><i className="fa fa-bed"></i>16 Bedrooms</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-car"></i>2 Garages</p>
													<p><i className="fa fa-bath"></i>8 Bathrooms</p>
												</div>
											</div>
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-user"></i>Gina Wesley</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-clock-o"></i>1 days ago</p>
												</div>
											</div>
										</div>
										<Link to="/home" className="room-price">2500KD</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-item">
									<div className="feature-pic set-bg feat3">
										<div className="rent-notic">FOR Rent</div>
									</div>
									<div className="feature-text">
										<div className="text-center feature-title">
											<h5>305 North Palm Drive</h5>
											<p><i className="fa fa-map-marker"></i> Al Raqi, Kuwait</p>
										</div>
										<div className="room-info-warp">
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-th-large"></i>1500 Sq.ft</p>
													<p><i className="fa fa-bed"></i>16 Bedrooms</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-car"></i>2 Garages</p>
													<p><i className="fa fa-bath"></i>8 Bathrooms</p>
												</div>
											</div>
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-user"></i>Gina Wesley</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-clock-o"></i>1 days ago</p>
												</div>
											</div>
										</div>
										<Link to="/home" className="room-price">150KD/Month</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-item">
									<div className="feature-pic set-bg feat4">
										<div className="sale-notic">FOR SALE</div>
									</div>
									<div className="feature-text">
										<div className="text-center feature-title">
											<h5>22 Ridge Road, Manhasset</h5>
											<p><i className="fa fa-map-marker"></i> Al Zahra, Kuwait</p>
										</div>
										<div className="room-info-warp">
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-th-large"></i>1200 Sq.ft</p>
													<p><i className="fa fa-bed"></i>12 Bedrooms</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-car"></i>3 Garages</p>
													<p><i className="fa fa-bath"></i>8 Bathrooms</p>
												</div>
											</div>
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-user"></i>Sasha Gordon </p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-clock-o"></i>8 days ago</p>
												</div>
											</div>
										</div>
										<Link to="/home" className="room-price">7000KD</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-item">
									<div className="feature-pic set-bg feat5">
										<div className="rent-notic">FOR Rent</div>
									</div>
									<div className="feature-text">
										<div className="text-center feature-title">
											<h5>Sofi Berryessa 750 N King Road</h5>
											<p><i className="fa fa-map-marker"></i> Al Zahra, Kuwait</p>
										</div>
										<div className="room-info-warp">
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-th-large"></i>500 Sq.ft</p>
													<p><i className="fa fa-bed"></i>4 Bedrooms</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-car"></i>1 Garages</p>
													<p><i className="fa fa-bath"></i>2 Bathrooms</p>
												</div>
											</div>
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-user"></i>Gina Wesley</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-clock-o"></i>8 days ago</p>
												</div>
											</div>
										</div>
										<Link to="/home" className="room-price">250KD/month</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-item">
									<div className="feature-pic set-bg feat6">
										<div className="sale-notic">FOR SALE</div>
									</div>
									<div className="feature-text">
										<div className="text-center feature-title">
											<h5>1203 Orren Street, Northeast</h5>
											<p><i className="fa fa-map-marker"></i> Aldeleh, Kuwait</p>
										</div>
										<div className="room-info-warp">
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-th-large"></i>700 Sq.ft</p>
													<p><i className="fa fa-bed"></i>7 Bedrooms</p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-car"></i>1 Garages</p>
													<p><i className="fa fa-bath"></i>7 Bathrooms</p>
												</div>
											</div>
											<div className="room-info">
												<div className="rf-left">
													<p><i className="fa fa-user"></i>Sasha Gordon </p>
												</div>
												<div className="rf-right">
													<p><i className="fa fa-clock-o"></i>8 days ago</p>
												</div>
											</div>
										</div>
										<Link to="/home" className="room-price">1700KD</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default FeatureListingComp;