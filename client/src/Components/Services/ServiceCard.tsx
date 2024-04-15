import { useAppDispatch } from '../../redux/store';
import type { Service } from './types/ServicesType';

function ServiceCard({ service }: { service: Service }): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="serviceCard" data-id={service.id}>
      <h3>{service.title}</h3>

      <p>{service.description}</p>
      <div className="buttonService">
        <button className="deleteService" type="button" onClick={delService}>
          delete
          <img className="icons" src="/img/del.gif" alt="..." />
        </button>
        <button type="button">
          update
          <img className="icons" src="/img/update.gif" alt="..." />
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
