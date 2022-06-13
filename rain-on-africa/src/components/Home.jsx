import './Home.css'
import MOVIE from '../videos/2048.mp4'

function Home() {
	return(
		<div className="home-page">
			<div className="home-header">
				<h1>Rain over Africa</h1>
				<p>Demo of product</p>
			</div>
			<div className="fullcontinent">
				<p>Retrievals over full continent</p>
				<video src={MOVIE} width="1000" height="500" controls>
				Your browser does not support the video tag.
				</video>
			</div>
			<div className="inregion">
				<p>Retrievals over zoomed in region</p>
				<video src={MOVIE} width="1000" height="500" controls>
				Your browser does not support the video tag.
				</video>
			</div> 
		</div>
	)
}
export default Home