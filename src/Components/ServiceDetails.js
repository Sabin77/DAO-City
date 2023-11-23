// src/Components/ServiceDetails.js
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import serviceData from '../data/ServiceData'; // Import your service data
import { openContractCall } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import { stringUtf8CV,contractPrincipalCV } from '@stacks/transactions';
import Modal from './Modal';


const ServiceDetails = (service_id) => {
  const { title } = useParams();
  const service = serviceData.find((s) => s.title === title);
  
  
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const options={
      network: new StacksTestnet(),
      contractAddress: "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK",
      contractName: "tokyo-torch",
      functionName: "access-service",
      functionArgs: [
        stringUtf8CV(service_id),
        contractPrincipalCV(
          "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK",
          "tokyo-torch"
        ),
      ],
      postConditions: [],
      onFinish: (data) => {
        console.log("onFinish:", data);
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    
    
  }

 
  const handleGetAccess = async () => {
    try {
      // Assume this is the function to check if the user has the required STX tokens
      const hasRequiredTokens = true; // Replace with your condition to check for tokens

      if (hasRequiredTokens) {
        await openContractCall(options);
        setModalMessage('Congratulations! You are eligible to use this service.');
      } else {
        setModalMessage('Sorry, you are not eligible for this service.');
      }

      setShowModal(true);
    } catch (error) {
      console.error('Error accessing the service:', error);
    }
  };

  return (
    <div className="service-details-container">
      <div className="photo-section">
        <img src={service.imageUrl} alt={service.title} />
      </div>
      <div className="details-section">
        <h2>{service.title}</h2>
        <p>{service.body}</p>
        <button onClick={handleGetAccess}>Get Access</button>
        {/* <ContractCallVote/> */}
      </div>
      <Modal show={showModal} message={modalMessage} onClose={() => setShowModal(false)} />    </div>
  );
};

export default ServiceDetails;
