/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addService } from './serviceSlice';

function ServiceAdd(): JSX.Element {
  const [form, setForm] = useState({
    userId: 1,
    title: '',
    description: '',
    price: '',
  });
  const dispatch = useAppDispatch();

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addServiceFunc().catch(console.log);
  };

  return (
    <form onSubmit={handleSubmit}>
      <nav className="no-space">
        <div className="max field label border round">
          <input
            type="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <label>title</label>
        </div>
      </nav>
      <nav className="no-space">
        <div className="max field label border round">
          <input
            type="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <label>description</label>
        </div>
      </nav>
      <nav>
        <div className="max field label border round">
          <input
            type="price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <label>price</label>
        </div>
      </nav>

      <nav>
        <button type="submit" className="max large round">
          Add
        </button>
      </nav>
    </form>
  );
}

export default ServiceAdd;
