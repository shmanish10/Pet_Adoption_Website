import "./CatList.css";
import { Link } from "react-router-dom";

const CatList = () => {
  return (
    <section className="cat-list">
      <h1>Cats Available for Adoption</h1>
      <div className="cat-cards">

      <div className="cat-card">
        <img src="https://www.shutterstock.com/image-photo/classical-persian-cat-cinnamon-ginger-600nw-2368104449.jpg" alt="Persian Cat"/>
        <h3>Luna</h3>
        <p><strong>Breed:</strong> Persian Cat</p>
        <p><strong>Age:</strong> 1.5 years</p>
        <p><strong>Location:</strong> Chennai, Tamil Nadu</p>
        <p className="tagline">Graceful and sweet, loves curling up in warm spots.</p>
        <div className="card-buttons">
        <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
         
        </div>
      </div>
      <div className="cat-card">
        <img src="https://www.gvvet.com/files/AdobeStock163530161-original.jpeg" alt="Siamese Cat"/>
        <h3>Milo</h3>
        <p><strong>Breed:</strong> Siamese Cat</p>
        <p><strong>Age:</strong> 2 years</p>
        <p><strong>Location:</strong> Delhi</p>
        <p className="tagline">Playful and talkative, with a soft and loving nature.</p>
        <div className="card-buttons">
        <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
        </div>
      </div>
      <div className="cat-card">
    <img src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/07-21/ginger+maine+coon+cat+with+a+gold+tag+sitting+in+an+orange+chair-min.jpg" 
         alt="Maine Coon" />
    <h3>Misty</h3>
    <p><strong>Breed:</strong> Maine Coon</p>
    <p><strong>Age:</strong> 2 years</p>
    <p><strong>Location:</strong> Jaipur, Rajasthan</p>
    <p className="tagline">A gentle giant with a fluffy coat and a heart full of love.</p>
    <div className="card-buttons">
    <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
     
        </div>
       </div>


      <div className="cat-card">
          <img
            src="https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/breed-spotlight-scottish-fold-min.webp"
            alt="Scottish Fold Cat"
          />
          <h3>Daisy</h3>
          <p><strong>Breed:</strong> Scottish Fold</p>
          <p><strong>Age:</strong> 3 years</p>
          <p><strong>Location:</strong> Surat, Gujarat</p>
          <p className="tagline">
            Quiet and sweet, with a love for cozy spots.
          </p>
          <div className="card-buttons">
          <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
          
          </div>
        </div>

        <div className="cat-card">
          <img
            src="https://de.lassie.co/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fr208a72kad0m%2F2uuiZ87dPUcGNCavFNmkLo%2F813afa939b5559f3c3959ce1ef84d072%2FKattraser.png&w=3840&q=75"
            alt="Devon Rex Cat"
          />
          <h3>Lily</h3>
          <p><strong>Breed:</strong> Devon Rex</p>
          <p><strong>Age:</strong> 5 years</p>
          <p><strong>Location:</strong> Chandigarh</p>
          <p className="tagline">
            Playful and mischievous, always full of surprises.
          </p>
          <div className="card-buttons">
          <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
           
          </div>
        </div>

        <div className="cat-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeahKT_Y3-_2Gt5efSwD7f5ZbmUIbB4b39w&s"
            alt="Turkish Van Cat"
          />
          <h3>Oscar</h3>
          <p><strong>Breed:</strong> Turkish Van</p>
          <p><strong>Age:</strong> 2.5 years</p>
          <p><strong>Location:</strong> Hyderabad, Telangana</p>
          <p className="tagline">
            Loves water and adventure, a unique feline friend.
          </p>
          <div className="card-buttons">
          <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
           
          </div>
        </div>

        <div className="cat-card">
          <img
            src="https://cdn.britannica.com/95/46495-004-6141F577.jpg"
            alt="Manx Cat"
          />
          <h3>Felix</h3>
          <p><strong>Breed:</strong> Manx</p>
          <p><strong>Age:</strong> 3.5 years</p>
          <p><strong>Location:</strong> Bengaluru, Karnataka</p>
          <p className="tagline">
            Cheerful and friendly, perfect for families.
          </p>
          <div className="card-buttons">
          <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
           
          </div>
        </div>

        <div className="cat-card">
          <img
            src="https://cdn.shopify.com/s/files/1/2621/9594/files/pexels-ivelin-donchev-14795686_480x480.jpg?v=1694631767"
            alt="Birman Cat"
          />
          <h3>Peaches</h3>
          <p><strong>Breed:</strong> Birman</p>
          <p><strong>Age:</strong> 4 years</p>
          <p><strong>Location:</strong> Lucknow, Uttar Pradesh</p>
          <p className="tagline">
            Gentle and loving, a true lap cat.
          </p>
          <div className="card-buttons">
          <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
          
          </div>
        </div>

        <div className="cat-card">
          <img
            src="https://www.purina.in/sites/default/files/styles/ttt_image_510/public/2021-01/Burmese.2.jpg?itok=9m78dqdx"
            alt="Burmese Cat"
          />
          <h3>Shadow</h3>
          <p><strong>Breed:</strong> Burmese</p>
          <p><strong>Age:</strong> 1 year</p>
          <p><strong>Location:</strong> Pune, Maharashtra</p>
          <p className="tagline">
            Social and playful, loves to be around people.
          </p>
          <div className="card-buttons">
          <Link to="/adoption-form" className="btn adopt-btn">Adopt Now</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CatList;
