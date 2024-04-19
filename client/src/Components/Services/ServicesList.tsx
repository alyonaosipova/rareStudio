import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import ServiceCard from './ServiceCard';
import { loadServices } from './serviceSlice';

import Header from '../Header/Header';

import ServiceAdd from './ServiceAdd';

function ServicesList(): JSX.Element {
  const dispatch = useAppDispatch();

  const services = useSelector((store: RootState) => store.services.services);
  console.log(services, '!!!!!!');
  const user = useSelector((store: RootState) => store.user.user);

  useEffect(() => {
    dispatch(loadServices()).catch(console.log);
  }, []);

  return (
    <div>
      <Header />
      <p className="uslugi">УСЛУГИ RARE STUDIO</p>
      {user?.isAdmin === true && <ServiceAdd />}
      <div className="cards_map">
        <div className="list">
          {services &&
            services.map((service) => <ServiceCard service={service} key={service.id} />)}
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
