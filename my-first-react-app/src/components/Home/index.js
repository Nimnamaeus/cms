import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { userData } from '../../helpers';
import CustomNav from '../CustomNav';
import './Homepage.css';

const Homepage = () => {
  // Weather Data State
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Butuan%20City&appid=2bfccfd0165ff2cd9dfaf8409a463326'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  // Video Games Data
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyGame = (game) => {
    setIsModalOpen(true);
    console.log("Purchased Game:", game);
  };

  const handleConfirmPurchase = () => {
    setIsModalOpen(false);
    alert('Thank you for purchasing! Have fun playing!');
  };

  const handleCancelPurchase = () => {
    setIsModalOpen(false);
  };

  const { username } = userData();
  const games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'Explore the vast open world of Hyrule.',
      imageUrl: 'https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg',
      price: '$59.99',
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      description: 'Embark on an epic Wild West adventure.',
      imageUrl: 'https://i0.wp.com/www.gamesbap.com/wp-content/uploads/2020/12/When-Does-Red-Dead-Redemption-2-Takes-Place.jpg?fit=1024%2C576&ssl=1',
      price: '$49.99',
    },
    {
      id: 3,
      title: 'Fortnite',
      description: 'Battle against other players in a fast-paced online multiplayer game.',
      imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202303/0621/d3c11818a78c6495e84a3d8e8dd6dc652721be36e0eb8c0a.png',
      price: 'Free to play',
    },
    {
      id: 4,
      title: 'Spider-Man',
      description: 'Fight crime as Spiderman and defeat the Sinister Six.',
      imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png',
      price: '$59.99',
    },
    {
      id: 5,
      title: 'Red Dead Redemption 2',
      description: 'Embark on an epic Wild West adventure.',
      imageUrl: 'https://i0.wp.com/www.gamesbap.com/wp-content/uploads/2020/12/When-Does-Red-Dead-Redemption-2-Takes-Place.jpg?fit=1024%2C576&ssl=1',
      price: '$49.99',
    },
    {
      id: 6,
      title: 'Outlast',
      description: 'Investigate Mount Massive Asylum as Miles Upshur the mystery behind Murkoffs sadistic expiriments.',
      imageUrl: 'https://cdn1.epicgames.com/offer/78f42129096d4233bccc527733debfbd/EGS_Outlast_RedBarrels_S1_2560x1440-00bcfe36f1adad2b9168add0a137fbc2',
      price: '$29.99',
    },
    {
      id: 7,
      title: 'Left 4 Dead',
      description: 'Left 4 Dead is a thrilling cooperative first-person shooter where players team up to survive hordes of relentless zombies in a post-apocalyptic world.',
      imageUrl: 'https://store-images.s-microsoft.com/image/apps.21180.68505604187334199.d924c1a8-5b21-47f3-80d8-977e91a992b7.5a8e1c49-ad5d-48eb-bacd-5ad73f122e2e?q=90&w=480&h=270',
      price: '$20.00',
    },
    {
      id: 8,
      title: 'League of Legends',
      description: 'League of Legends is a competitive online multiplayer game where teams of champions battle it out in intense strategic matches to destroy the enemys Nexus and claim victory.',
      imageUrl: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3',
      price: 'Free',
    },
    {
      id: 9,
      title: 'Skyrim',
      description: 'Skyrim is an epic open-world fantasy game where players embark on a heroic journey through a vast and immersive world filled with dragons, ancient ruins, and limitless adventures.',
      imageUrl: 'https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg',
      price: '$30.99',
    },
  ];

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const formatTemperature = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(1);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <CustomNav />
      <div className="home">
        <h2 className="home__title">Welcome {username} to the Video Game Homepage</h2>
        <h3 className="home__subtitle">Weather in {weatherData.name}</h3>
        <div className="weather-container">
          <div className="weather-info">
            <div className="weather-info-item">
              <span className="weather-info-label">Temperature:</span>
              <span className="weather-info-value">
                {formatTemperature(weatherData.main.temp)}°C
              </span>
            </div>
            <div className="weather-info-item">
              <span className="weather-info-label">Description:</span>
              <span className="weather-info-value">
                {capitalizeFirstLetter(weatherData.weather[0].description)}
              </span>
            </div>
          </div>
          <div className="weather-icon">
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
        <p className="home__subtitle"  style={{ fontSize: '24px', marginTop: '2%' }}>Check out these awesome video games:</p>
        <div className="games">
          {games.map((game) => (
            <div key={game.id} className="game">
              <img src={game.imageUrl} alt={game.title} className="game__image" />
              <div className="game__details">
                <h3 className="game__title">{game.title}</h3>
                <p className="game__description">{game.description}</p>
                <p className="game__price">{game.price}</p>
                <button className="game__buy-button" onClick={() => handleBuyGame(game)}>
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for purchase confirmation */}
      <Modal isOpen={isModalOpen} toggle={handleCancelPurchase}>
        <ModalHeader toggle={handleCancelPurchase}>Confirm Purchase</ModalHeader>
        <ModalBody>Are you sure you want to purchase this game?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfirmPurchase}>
            Yes
          </Button>
          <Button color="secondary" onClick={handleCancelPurchase}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Homepage;
