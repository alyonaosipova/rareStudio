import React from 'react';
import { useAppDispatch } from '../../redux/store';
import ServiceCard from './serviceCard';

function ServicesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const services = useSelector((store: RootState) => store.services);

  return (
    <div>
      <h1>УСЛУГИ RARE STUDIO</h1>
      {/* <ServiceAdd  /> */}
      <div className="list">
        SERVICES
        {/* {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))} */}
      </div>
    </div>
  );
}

export default ServicesPage;
