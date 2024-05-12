// import React,{ useState } from 'react'
// import cardfront from '../images/bg-card-front.png';
// import '../style/card.css';
// import maindekstop from '../images/bg-main-desktop.png';
// import cardback from "../images/bg-card-back.png";
// const Card = () => {
//   const [name,setName] = useState('');
//   const handleName =(e)=>{
//     setName(e.target.value);
//   }
//   const [cardInfo, setCardInfo] = useState({
//     cardholderName: '',
//     cardNumber: '',
//     expDate: '',
//     cvv: ''
//   });

//   const handleChange = (e) => {
//     setCardInfo({
//       ...cardInfo,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log(cardInfo);
//   };

//   return (
//     <div className='container'>
//       <div>
//       <img src={maindekstop} alt="sidehalf" ></img>
//        <img src={cardfront} className="front" alt="card-img"></img>
//        <img src={cardback} className="back" alt="card-img"></img>
//        </div>
//          <div >
//          <form onSubmit={handleSubmit} className="card-form">
//       <label>
//         CARDHOLDER NAME
//         <input type="text" name="cardholderName" placeholder="e.g.Amit Kumar" onChange={handleChange} className="form-input" />
//       </label>
//       <label>
//         CARD NUMBER
//         <input type="text" name="cardNumber" placeholder="e.g. 1234 5678 9123 0000" onChange={handleChange} className="form-input" />
//       </label>
//       <div className="flex-container">
//         <label>
//             EXP.DATE (MM/YY)
//           <div className='flex-container'>
//           <input type="text" name="expDate" placeholder="MM" onChange={handleChange} className="form-input-date" />
//           <input type="text" name="expDate" placeholder="YY" onChange={handleChange} className="form-input-date" />
//           </div>
//         </label>
//         <label>
//           CVV
//           <input type="text" name="cvv" placeholder="e.g 123" onChange={handleChange} className="form-input-cvv" />
//         </label>
//       </div>
//       <button type="submit" className="form-button">Confirm</button>
//     </form>
//        </div>
//        <h1>{name}</h1>
//     </div>
//   )
// }

// export default Card

// import React, { useState } from 'react';
// import cardfront from '../images/bg-card-front.png';
// import '../style/card.css';
// import maindesktop from '../images/bg-main-desktop.png';
// import cardback from '../images/bg-card-back.png';
// import cardlogo from '../images/card-logo.svg';
// import tick from '../images/icon-complete.svg';
// const Card = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [cardInfo, setCardInfo] = useState({
//     cardholderName: '',
//     cardNumber: '',
//     MM: '',
//     YY:'',
//     cvv: ''
//   });

//   const handleChange = (e) => {
//     setCardInfo({
//       ...cardInfo,
//       [e.target.name]: e.target.value
//     });
//   };
//   const confirmButton = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//   }

//   return (
//     <div className='container'>
//       <div>
//         <img src={maindesktop} className='maindekstop' alt="sidehalf" />
//         </div>
//         <div className="front-image-container">
//           <img src={cardfront} className="front" alt="card-img" />
//           <div className="card-details">
//             <img src={cardlogo} className='logo' alt="card-logo"/>
//             <p className="cardholder-name">{cardInfo.cardholderName}</p>
//             <p className="card-number">{cardInfo.cardNumber}</p>
//             <p className="exp-date">{cardInfo.MM+'/'+cardInfo.YY}</p>
            
//           </div>
//           <div className="back-image-container">
//           <div className="card-details">
//           <img src={cardback} className="back" alt="card-img" />
//           </div>
//           <p className="cvv">{cardInfo.cvv}</p>
//           </div>
//       </div>
//       <div>
//       {!isSubmitted ? (
//         <form className="card-form">
//           <label>
//             CARDHOLDER NAME
//             <input type="text" name="cardholderName" placeholder="e.g. Amit Kumar" onChange={handleChange} className="form-input" />
//           </label>
//           <label>
//             CARD NUMBER
//             <input type="text" name="cardNumber" placeholder="e.g. 1234 5678 9123 0000" onChange={handleChange} className="form-input" />
//           </label>
//           <div className="flex-container">
//             <label>
//               EXP.DATE (MM/YY)
//               <div className='flex-container'>
//                 <input type="text" name="MM" placeholder="MM" onChange={handleChange} className="form-input-date" />
//                 <input type="text" name="YY" placeholder="YY" onChange={handleChange} className="form-input-date" />
//               </div>
//             </label>
//             <label>
//               CVV
//               <input type="text" name="cvv" placeholder="e.g. 123" onChange={handleChange} className="form-input-cvv" />
//             </label>
//           </div>
//           <button type="submit" onClick={confirmButton} className="form-button">Confirm</button>
//         </form>
//          ) : (
//           <div className='card-form'>
//             <img src={tick} className='success' alt='success'/>
//             <h1>Thank you</h1>
//             <p>We have added your card details.</p>
//             <button onClick={() => console.log('Continue')} className="form-button">Continue</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// export default Card;
import React, { useState } from 'react';
import cardfront from '../images/bg-card-front.png';
import '../style/card.css';
import maindesktop from '../images/bg-main-desktop.png';
import cardback from '../images/bg-card-back.png';
import cardlogo from '../images/card-logo.svg';
import tick from '../images/icon-complete.svg';

const Card = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [cardInfo, setCardInfo] = useState({
    cardholderName: '',
    cardNumber: '',
    MM: '',
    YY: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value
    });
    // Validation checks
    if (name === 'cardholderName') {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        setErrors({ ...errors, [name]: 'Name should be in text' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    } else if (name === 'cardNumber') {
      if (!/^\d{4}( \d{4}){3}$/.test(value)) {
        setErrors({ ...errors, [name]: 'Wrong format, numbers only' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    } else if (name === 'MM' || name === 'YY' || name === 'cvv') {
      if (value.trim() === '') {
        setErrors({ ...errors, [name]: 'Can\'t be blank' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  const confirmButton = (event) => {
    event.preventDefault();
    // Check if there are any errors
    if (Object.values(errors).some(error => error !== '')) {
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className='container'>
      <div>
        <img src={maindesktop} className='maindekstop' alt="sidehalf" />
      </div>
      <div className="front-image-container">
        <img src={cardfront} className="front" alt="card-img" />
        <div className="card-details">
          <img src={cardlogo} className='logo' alt="card-logo"/>
          <p className="cardholder-name">{cardInfo.cardholderName}</p>
          <p className="card-number">{cardInfo.cardNumber}</p>
          <p className="exp-date">{cardInfo.MM+'/'+cardInfo.YY}</p>
        </div>
        <div className="back-image-container">
          <div className="card-details">
            <img src={cardback} className="back" alt="card-img" />
          </div>
          <p className="cvv">{cardInfo.cvv}</p>
        </div>
      </div>
      <div>
        {!isSubmitted ? (
          <form className="card-form">
            <label>
              CARDHOLDER NAME
              <input type="text" name="cardholderName" placeholder="e.g. Amit Kumar" onChange={handleChange} className="form-input" />
              <p className="error">{errors.cardholderName}</p>
            </label>
            <label>
              CARD NUMBER
              <input type="text" name="cardNumber" placeholder="e.g. 1234 5678 9123 0000" onChange={handleChange} className="form-input" />
              <p className="error">{errors.cardNumber}</p>
            </label>
            <div className="flex-container">
              <label>
                EXP.DATE (MM/YY)
                <div className='flex-container'>
                  <input type="text" name="MM" placeholder="MM" onChange={handleChange} className="form-input-date" />
                  <input type="text" name="YY" placeholder="YY" onChange={handleChange} className="form-input-date" />
                </div>
                <p className="error">{errors.MM}</p>
              </label>
              <label>
                CVV
                <input type="text" name="cvv" placeholder="e.g. 123" onChange={handleChange} className="form-input-cvv" />
                <p className="error">{errors.cvv}</p>
              </label>
            </div>
            <button type="submit" onClick={confirmButton} className="form-button">Confirm</button>
          </form>
        ) : (
          <div className='card-form'>
            <img src={tick} className='success' alt='success'/>
            <h1>Thank you</h1>
            <p>We have added your card details.</p>
            <button onClick={() => console.log('Continue')} className="form-button">Continue</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
