import './App.css';

function Review() {
    const users = [
      {
        "id": 1,
        "name": "Rifqi Subagja",
        "review": "Wahh bagus",
        "foto": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "id": 2,
        "name": "Krisna",
        "review": "Wahh bagus sekali, warnanya pink",
        "foto": "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "id": 3,
        "name": "Bagja",
        "review": "Harganya murah tapi sayang warnanya pink",
        "foto": "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    ];
  
    const listReview = users.map((itemreview) =>
      <div key={itemreview.id} className="Item">
        <img src={itemreview.foto}/>
        <div className="User">
          <h3>{itemreview.name}</h3>
          <p>{itemreview.review}</p>
        </div>
      </div>
    );
    return(
      <div className="Review-box">
        <h2>Reviews</h2>    
        {listReview}
      </div>
    );
  }

  export default Review;