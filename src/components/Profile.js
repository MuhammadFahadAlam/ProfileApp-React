import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './profile.css';

export default function Profile() {
	return (
		<Router>
			<div id='container'>
				<header>
					<div className='quoteoftheday'>Profile</div>
					<div className='name'>Fahad.</div>
				</header>

				<article>
					<div className='quote'>
						<h1>A Coders Life: Problematic but Charismatic.</h1>
					</div>

					<div className='quoteby'>
						<h4>Muhammad Fahad Alam</h4>
					</div>
				</article>

				<footer>
					<div className='skills'>
						<h6>Menu</h6>
						<ul>
							<li>
								<Link to='/'>Introduction</Link>
							</li>
							<li>
								<Link to='/education'>Education</Link>
							</li>
							<li>
								<Link to='/experience'>Experience</Link>
							</li>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</div>

					<Switch>
						<Route exact path='/'>
							<div className='content'>
								A technologist &amp; entrepreneur, specialized
								in using cutting-edge web technologies &amp;
								social-media strategies to bring products &amp;
								campaigns from concept to a reality. By
								profession a Computer &amp; Information System
								Engineer, who has been building &amp;
								implementing Information Systems for the last 10
								years.
							</div>
						</Route>
						<Route exact path='/education'>
							<div className='content'>
								<h1>Matriculation</h1>
								from Fazaia Degree College, Faisal
								<h1>Intermediate</h1>
								from Bahria College, Karsaz
								<h1>Bachelors</h1>
								from NED University
							</div>
						</Route>
						<Route exact path='/experience'>
							<div className='content'>
								My experience with Interns Spark is amazing. I
								like the way it let us learn latest
								technologies. By learning from the path provided
								by this program we can learn the content and
								then by making the projects we get a firm grip
								on the topic learnt. This way of teaching is
								quite effective. I like this internship a lot
								and learnt a lot through it.
							</div>
						</Route>
						<Route exact path='/contact'>
							<div className='content'>
								<h1>Email</h1>
								alamfahad13665@gmail.com
								<h1>Facebook</h1>
								
									https://www.facebook.com/profile.php?id=100008522975770
								
							</div>
						</Route>
					</Switch>
				</footer>
			</div>
		</Router>
	);
}
