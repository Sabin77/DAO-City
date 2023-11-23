// src/Components/ServiceDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import serviceData from '../data/ServiceData'; // Import your service data
import { openContractCall } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import { stringUtf8CV,contractPrincipalCV } from '@stacks/transactions';

const ServiceDetails = (service_id) => {
  const { title } = useParams();
  const service = serviceData.find((s) => s.title === title);
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
  if (!service) {
    // Handle the case when the service is not found
    return <div>Service not found</div>;
  }

  

 


  return (
    <div className="service-details-container">
      <div className="photo-section">
        <img src={service.imageUrl} alt={service.title} />
      </div>
      <div className="details-section">
        <h2>{service.title}</h2>
        <p>{service.body}</p>
        <button onClick={async ()=>await openContractCall(options)}>Get Access</button>
        {/* <ContractCallVote/> */}
      </div>
    </div>
  );
};

export default ServiceDetails;
