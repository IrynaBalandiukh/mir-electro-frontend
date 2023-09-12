import classnames from 'classnames';

import './Modal.scss';

type Props = {
  isModalActive: boolean,
  setIsModalActive: (data: boolean) => void,
  response: string | null,
  error: string | null,
};

export const Modal: React.FC<Props> = ({ isModalActive, setIsModalActive, error, response }) => {
  return (
    <div className={classnames('modal', {active: isModalActive})} onClick={() => setIsModalActive(false)}>
      <div className={classnames('modal__content', {active: isModalActive})} onClick={event => event.stopPropagation()}>
        {response && <p className="modal__response">{response}</p>}

        {error && <p className="modal__error">{error}</p>}
      </div>
    </div>
  );
}
