import { useAppDispatch } from '../../redux/store';
import { delService } from './serviceSlice';
import type { Service } from './types/ServicesType';

function ServiceCard({ service }: { service: Service }): JSX.Element {
  const dispatch = useAppDispatch();

  const deleteService = (): void => {
    dispatch(delService(service.id)).catch(console.log);
  };

  const updateService = (): void => {
    dispatch(updService(service.id)).catch(console.log);
  };

  return (
    <div className="serviceCard" data-id={service.id}>
      <h3>{service.title}</h3>

      <p>{service.description}</p>
      <div className="buttonService">
        <button className="deleteService" type="button" onClick={deleteService}>
          delete
          <img className="icons" src="..." alt="..." />
        </button>
        <button type="button" onClick={updateService}>
          update
          {/* <img className="icons" src="/img/update.gif" alt="..." /> */}
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
