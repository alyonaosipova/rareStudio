import React, { FormEvent, FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { delService, updService } from './serviceSlice';
import type { Service } from './types/ServicesType';

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
        <>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p>{service.price}</p>
          <div className="buttonService">
            <button className="deleteService" type="button" onClick={deleteService}>
              delete
              <img className="icons" src="..." alt="..." />
            </button>
            <button onClick={() => setState(false)} type="button">
              update
              {/* <img className="icons" src="/img/update.gif" alt="..." /> */}
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => updateService(e, service.id)}>
          <nav className="no-space">
            <div className="max field label border round">
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <label>title</label>
            </div>
          </nav>
          <nav className="no-space">
            <div className="max field label border round">
              <input
                type="text"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
              <label>description</label>
            </div>
          </nav>
          <nav>
            <div className="max field label border round">
              <input
                type="text"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
              <label>price</label>
            </div>
          </nav>
          <nav>
            <button type="submit">save</button>
          </nav>
        </form>
      )}
    </div>
  );
}

export default ServiceCard;
