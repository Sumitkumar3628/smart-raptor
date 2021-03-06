import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
    <p className='styleitnew f2'>
                {'Welcome! to Smart Raptor Face Detection App.'}
            </p>
      <p className='styleit f3'>
        {'This Smart Raptor will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} placeholder="Image Link"/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;