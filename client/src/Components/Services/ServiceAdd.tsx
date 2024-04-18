/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { addService } from './serviceSlice';
import type { RootState } from '../../redux/store';

function ServiceAdd(): JSX.Element {
  const [form, setForm] = useState({
    userId: 1,
    title: '',
    description: '',
    price: '',
  });
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.user.user);
  console.log('admin', user?.isAdmin);

  async function addServiceFunc(): Promise<void> {
    dispatch(addService({ ...form }))
      .then(() => {
        setForm({
          userId: 1,
          title: '',
          description: '',
          price: '',
        });
      })
      .catch(console.log);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addServiceFunc().catch(console.log);
  };

  return (
    <form onSubmit={handleSubmit}>
      <nav className="no-space">
        <div className="add_title">
          <input
            placeholder="TITLE"
            className="title_in"
            type="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
      </nav>
      <nav className="no-space">
        <div className="add_description">
          <input
            placeholder="DESCRIPTION"
            className="title_in"
            type="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
      </nav>
      <nav>
        <div className="add_price">
          <input
            placeholder="PRICE"
            className="title_in"
            type="price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>
      </nav>
      <nav>
        <button type="submit" className="add_card_add">
          добавить услугу
        </button>
      </nav>
    </form>
  );
}

export default ServiceAdd;
