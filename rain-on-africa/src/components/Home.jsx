import './Home.css'
import FULL from '../videos/2048_week.mp4'
import ANGOLA from '../videos/angola_week.mp4'

function Home() {
	return(
		<div className="home-page">
			<div className="home-header">
				<h1>Rain over Africa</h1>
				<p>Demo of product</p>
				<p>Animations show retrievals of precipitation rates over Africa for the first week in december 2021.</p>
			</div>
			<div className="fullcontinent">
				<p>Retrievals over full continent</p>
				<video src={FULL} width="1000" height="500" controls>
				Your browser does not support the video tag.
				</video>
			</div>
			<div className="inregion">
				<p>Retrievals over zoomed in region</p>
				<video src={ANGOLA} width="1000" height="500" controls>
				Your browser does not support the video tag.
				</video>
			</div> 
		</div>
	)
}
export default Home