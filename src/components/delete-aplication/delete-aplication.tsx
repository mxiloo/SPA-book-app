
import styles from './delete-aplication.module.scss';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useContext} from "react";
import {MyContext} from "@/provider/my-context";

const DeleteAplication = () => {

    const {handleDeleteBook, elementId, handleClose} = useContext(MyContext);

    return (
        <section className={styles.section}>
            <h2>Вы действительно хотите удалить данную книгу?</h2>
            <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                <Button onClick={handleClose} variant="contained">Назад</Button>
                <Button onClick={() => {
                    handleDeleteBook(elementId)
                    handleClose()
                }} variant="contained" color="error" startIcon={<DeleteIcon />}>
                    Удалить
                </Button>
            </div>
        </section>
    )
}

export default DeleteAplication