import '../styles/modal.css';

const Modal = ({ handleClose, show, children }) => {
  if (!show) return null;

  return (
    <div className='modal' onClick={handleClose}>
      <div className='modal-main' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
