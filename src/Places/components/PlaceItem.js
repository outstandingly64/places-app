import React, { useState, useContext } from "react";

import Card from "../../Shared/components/UIElements/Card";
import Button from "../../Shared/components/FormElements/Button";
import Modal from "../../Shared/components/UIElements/Modal";
import Map from '../../Shared/components/UIElements/Map';
import { AuthContext } from '../../Shared/context/auth-context';
import "./PlaceItem.css";

/**
 * OTHER COMPONENTS: Card.js, Button.js, Modal.js, Map.js, AuthContext  
 */
const PlaceItem = (props) => {

  /**
   * STATES & CONTEXT:
   * State for showing the map/modal
   * State for confirming deletion modal
   */
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  /**
   * STATE HANDLERS:
   * One for opening map
   * One for closing map
   * One for showing confirm deletion
   * One for closing confirm deletion
   * One for actual deletion of the place
   */

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const closeDeleteWarningHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = () => {
    //TODO: Hook Up To Backend
    console.log('DELETING...');
    closeDeleteWarningHandler();
  };

  //Btns for: 'Confirm Delete' modal
  //Passed down as 'footer' props to the <Modal/>
  const modalDeleteBtns = (
    <>
      <Button onClick={closeDeleteWarningHandler} inverse>CANCEL</Button>
      <Button onClick={confirmDeleteHandler} danger>DELETE</Button>
    </>
  );

  /**
   * Quick Note:
   * <PlaceItem/> contains two inactive modals until opened by the user.
   * The first contains the 'view on map' functionality modal.
   * The second contains the final 'Confirm Delete' modal. 
   */
  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
            <Map center={props.coordinates} zoom={16}/>
        </div>
      </Modal>
      <Modal
      show={showConfirmModal}
      onCancel={closeDeleteWarningHandler} 
      header={`Are you sure, ${props.royalPronoun}?`}
      footerClass="place-item__modal-actions"
      footer={modalDeleteBtns}
      >
        <p>Delete Conquered Place? This action cannot be undone and you must re-conquer whatever is relinquished.</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            {auth.isLoggedIn && (<Button to={`/places/${props.id}`}>EDIT</Button>)}
            {auth.isLoggedIn && (<Button onClick={showDeleteWarningHandler} danger>DELETE</Button>)}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
