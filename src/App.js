import './App.css';
import { FaFacebook, FaInstagram, FaTwitter, FaSpotify, FaApple, FaSoundcloud, FaBandcamp, FaLink } from 'react-icons/fa';

const links = [
  { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/mi-banda' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/mi-banda' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/mi-banda' },
  { name: 'Spotify', icon: FaSpotify, url: 'https://open.spotify.com/artist/mi-banda' },
  { name: 'Apple Music', icon: FaApple, url: 'https://music.apple.com/artist/mi-banda' },
  { name: 'SoundCloud', icon: FaSoundcloud, url: 'https://soundcloud.com/mi-banda' },
  { name: 'Bandcamp', icon: FaBandcamp, url: 'https://mi-banda.bandcamp.com/' },
  { name: 'Sitio Web', icon: FaLink, url: 'https://www.mi-banda.com' },
];

const Linktree = ({ links }) => {
  return (
    <div className="linktree-container">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <link.icon />
          {link.name}
        </a>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div class="area">
        MY BAND
      </div>
      <Linktree links={links} />
    </div>
  );
}

export default App;