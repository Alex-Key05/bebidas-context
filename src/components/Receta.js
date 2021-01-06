import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    height: 700,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
    height: "100%",
    maxHeight: 800,
    display: "block",
  },
  header: {
    padding: "12px 0",
    borderBottom: "1px solid darkgrey",
  },
  content: {
    padding: "12px 0",
    overflow: "scroll",
  },
}));

const style = {
    width: "400px",
    height: "300px",
}

const Receta = ({ receta }) => {
  // configuracion del modal de material-ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { setIdReceta, informacion } = useContext(ModalContext);
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-warning"
            onClick={() => {
              setIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdReceta(null);
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h1 className="text-dark pb-2">Receta</h1>
                <h2 className="text-center pb-2">{informacion.strDrink}</h2>
                 <p>Ingredient 1: {informacion.strIngredient1}</p>
                 <p>Ingredient 2: {informacion.strIngredient2}</p>
                 <p>Ingredient 3: {informacion.strIngredient3}</p>
                 <p>Ingredient 4: {informacion.strIngredient4}</p>
                 <p>Measure 1: {informacion.strMeasure1}</p>
                 <p>Measure 2: {informacion.strMeasure2}</p>
                 <h3 className="text-warning">Instructions: </h3>
                <p>{informacion.strInstructions}</p>
                <img src={informacion.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} style={style}/>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
