import React, { FormEvent, FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { delService, updService } from './serviceSlice';
import type { Service } from './types/ServicesType';
import './styles/Service.css'

function ServiceCard({ service }: { service: Service }): JSX.Element {
  const [form, setForm] = useState({
    title: service.title,
    description: service.description,
    price: service.price,
  });
  const [states, setState] = useState(true);
  const dispatch = useAppDispatch();

  const deleteService = (): void => {
    dispatch(delService(service.id)).catch(console.log);
  };

  const updateService = async (e: FormEvent<HTMLFormElement>, id: number): Promise<void> => {
    e.preventDefault();

    await dispatch(updService({ ...form, id, userId: 1 })).catch(console.log);
    setState(true); // Reset the state after successful update
  };

  return (
    <div className="serviceCard" data-id={service.id}>
      {states ? (
        <div className='one_card_div' >
          <div className='cart_text'>
          <div className='card_price' >
          <h3>от {service.price} р</h3>
          </div>
            <div className='card_title_discription'>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          </div>
          </div>
          <div className="buttonService">
            <img className="icons" src="refresh.png" alt="..." onClick={() => setState(false)}/>
              <img className="icons" src="xxxxx.png" alt="..." onClick={deleteService}/>
            <button type='button' className='go_on'>ЗАПИСАТЬСЯ</button>
              </div>
          </div>
      ) : (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => updateService(e, service.id)}>
          <div className='full_form_up'>
          <div className='update_form' >
          <nav className="no-space">
            <div className="card_title">
              <input
                className='up_input'
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
            </div>
          </nav>
          <nav className="no-space">
            <div className="card_description">
              <input
              className='up_input'
                type="text"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
            </div>
          </nav>
          <nav>
            <div className="card_price_up">
              <input
              className='up_input'
                type="text"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
            </div>
          </nav>
          <nav>
            <button className='save_up' type="submit">save</button>
          </nav>
          </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default ServiceCard;