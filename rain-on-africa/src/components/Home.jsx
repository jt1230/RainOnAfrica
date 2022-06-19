import './Home.css'
import PlayVideo from './PlayVideo'
import FULL from '../videos/output.mp4'
import ANGOLA from '../videos/out_angola.mp4'
import RISK from '../videos/output_risk.mp4'

function Home() {
	return(
		<div className="home-page">
			<div className="home-header">
				<h1>Rain over Africa</h1>
				<p>Animations show retrievals of precipitation rates over Africa for the first week in december 2021.</p>
			</div>
			<div className="output-vid">
				<h3>Retrievals over full continent</h3>
				<PlayVideo video={FULL}/> 
			</div>
			<div className="output-vid">
				<h3>Retrievals over a zoomed-in tropical region of the border between Angola and the Democratic Republic of Congo</h3>
				<PlayVideo video={ANGOLA}/> 
			</div> 
			<div className="info-box">
				<h2>Product specifications</h2>
				<div className="product-box">
					<ul>
						<h3>IMERG Late run:</h3>
						<li>Spatial resolution: 10 km x 10 km</li>
						<li>Temporal resolution: 30 minutes</li>
						<li>Latency (time until delivery): 12 hours</li>
						<li>Information provided: Scalar value and a rough error</li>
					</ul>
					<ul>
						<h3>Machine learning retrieval:</h3>
						<li>Spatial resolution: 3 km x 3 km at nadir</li>
						<li>Temporal resolution: 15 minutes</li>
						<li>Latency (time until delivery): 10-15 minutes</li>
						<li>Information provided: Probability distributions</li>
					</ul>
				</div>
			</div>
			<div className="output-vid">
				<h3>Probability of precipitation (> 0.2 mm/h) as predicted by our machine learning model. Animation is over the same zoomed-in tropical region as in the previous video.</h3>
				<PlayVideo video={RISK}/> 
			</div> 
		</div>
	)
}
export default Home