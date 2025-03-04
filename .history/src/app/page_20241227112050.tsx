.mainsocial {
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
}

.header {
  font-size: 24px;
  color: yellow;
  text-shadow: 1px 1px 2px black;
  margin-bottom: 20px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr)); /* Default for very small screens */
  gap: 10px;
  padding: 20px;
}

/* Laptop view - 4 cards in a row */
@media (min-width: 1024px) {
  .cards-container {
      grid-template-columns: repeat(4, 1fr);
  }
}

/* Tablet view - 2 cards per row on smaller tablets, 3 per row on wider tablets */
@media (min-width: 768px) and (max-width: 1023px) {
  .cards-container {
      grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile view - 1 card per row */
@media (max-width: 767px) {
  .cards-container {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
  }
}

.card {
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; /* Ensure the card takes full width of its grid column */
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card-image {
  width: 100%; /* Ensures the image fills the width of the card */
  height: auto;
  max-height: 200px; /* Optional: Limit max height to maintain aspect ratio */
  object-fit: cover; /* Ensures the image scales without distortion */
}

.card-title {
  font-size: 18px;
  margin: 10px;
  font-weight: bold;
}

.card-description {
  font-size: 14px;
  margin: 10px;
  color: #555;
  text-align: left;
}

/* Special styling for ultra-small screens */
@media (max-width: 220px) {
  .card {
      width: 100px;
  }
  .card-image {
      width: 100px;
  }
}

/* Additional styling for small screens to increase image height */
@media (max-width: 480px) {
  .card-image {
      height: 250px; /* Increase the image height on smaller screens */
  }
}