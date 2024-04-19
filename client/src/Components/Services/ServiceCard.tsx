import React, { type FormEvent, useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { delService, updService } from './serviceSlice';
import { useSelector } from 'react-redux';
import type { Service } from './types/ServicesType';
import './styles/Service.css';
import ModalWindow from '../Booking/ModalWindow';
import { useNavigate } from 'react-router-dom';

function ServiceCard({ service }: { service: Service }): JSX.Element {
  const [form, setForm] = useState({
    title: service.title,
    description: service.description,
    price: service.price,
  });
  const [states, setState] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useSelector((store: RootState) => store.user.user);

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
        <div className="one_card_div">
          <div className="cart_text">
            <div className="card_price">
              <h3>от {service.price} р</h3>
            </div>
            <div className="card_title_discription">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
          <div className="buttonService">
            {user?.isAdmin === true && (
              <>
                <img
                  className="icons refresh"
                  src="refresh.png"
                  alt="..."
                  onClick={() => setState(false)}
                />
                <img className="icons delete" src="xxxxx.png" alt="..." onClick={deleteService} />
              </>
            )}
            {!user?.isAdmin && user && <ModalWindow />}

            {!user && (
              <button type="button" className="go_on" onClick={() => navigate('/authorization')}>
                ЗАПИСАТЬСЯ
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => updateService(e, service.id)}>
          <div className="full_form_up">
            <div className="update_form">
              <nav className="no-space">
                <div className="card_title">
                  <input
                    className="up_input"
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                </div>
              </nav>
              <nav className="no-space">
                <div className="card_description">
                  <input
                    className="up_input"
                    type="text"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>
              </nav>
              <nav>
                <div className="card_price_up">
                  <input
                    className="up_input"
                    type="text"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                  />
                </div>
              </nav>
              <nav>
                <button className="save_up" type="submit">
                  save
                </button>
              </nav>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default ServiceCard;
