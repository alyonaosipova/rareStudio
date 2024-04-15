import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import ServiceCard from './ServiceCard';
import { loadServices } from './serviceSlice';

function ServicesList(): JSX.Element {
  const dispatch = useAppDispatch();

  const services = useSelector((store: RootState) => store.services.services);
  console.log(services);

  useEffect(() => {
    dispatch(loadServices()).catch(console.log);
  }, []);

  return (
    <div>
      <h1>УСЛУГИ RARE STUDIO</h1>
      {/* <ServiceAdd  /> */}
      <div className="list">
        SERVICES
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
}

export default ServicesList;
