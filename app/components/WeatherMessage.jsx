var React = require('react');
var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<h2  className="text-center">
				It is {temp} degress in {location}.
			</h2>
		</div>
	);
}

module.exports = WeatherMessage;