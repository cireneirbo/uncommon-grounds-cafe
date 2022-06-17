import jessica from '../assets/jessicameyers.jpg';
import steven from '../assets/stevenmeyers.jpg';
import sparkles from '../assets/sparkles-dog.png';

function About() {
  
  return (
    <main>

      <div className="box-shadow">

        <h1>About</h1>

        <h3>Our Story</h3>
          <p>
            We've been open since 1998 and proudly serving the Sarasota-Bradenton area. Our coffee is brewed fresh for each order, and we source our products from local distributors. We believe that a fresh cup o' joe can make a 'good day' great.
          </p>
        <hr></hr>
        <h3>Who We Are</h3>
          <h4>Jessica Meyers</h4>
          <p>
            Owner and founder of the Uncommon Grounds Cafe in 1998. She loves nothing more than to enjoy a cold brew coffee and spend the afternoon with her Pomeranian dog, Sparkles.
          </p>
          <img className="workerImage" src={jessica}></img>
          <hr></hr>

          <h4>Steven Meyers</h4>
          <p>
            Co-owner of the Uncommon Grounds Cafe since 2004. Used to ski, but now he is always looking out for those rare surfing days on the Gulf Coast.
          </p>
          <img className="workerImage" src={steven}></img>
          <hr></hr>

          <h4>Sparkles</h4>
          <p>
            The goodest pup. "Come give me head scratches!"
          </p>
          <img className="workerImage" src={sparkles}></img>
          <hr></hr>

          <p>
            We are a fictional coffee shop created by our <a href='https://twitter.com/codeethically' target='_blank' rel="noreferrer">developer</a>.
          </p>
        
          
      </div>
        
    </main>
  );
}

export default About;