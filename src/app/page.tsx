'use client';

import styles from "./page.module.css";
import Window from "@/components/window/window";
import Panel from "@/components/panel/panel";
import { useState } from "react";
import Modal from "@/components/modal/modal";
import Aplication from "@/components/aplication/aplication";
import DeleteAplication from "@/components/delete-aplication/delete-aplication";
import Recommendations from "@/components/recommendations/recommendations";
import Preloader from "@/components/preloader/preloader";
import MasterProvider from "@/provider/master-provider";

export default function Home() {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [openAdd, setOpenAdd] = useState<boolean>(false); // Стейт модалки добавления книги
    const [openDelete, setOpenDelete] = useState<boolean>(false); // Стейт модалки удаления книги

    const handleOpen = () => setOpenAdd(true); // Открыть модалку добавления книги
    const handleClose = () => {
        setOpenAdd(false)
        setOpenDelete(false)
    }; // Закрыть модалку

    return (
            <MasterProvider setIsLoading={setIsLoading}>
                <main className={styles.main}>
                    {isLoading ? <Preloader /> : (
                        <>
                            <Panel handleOpen={handleOpen}/>
                            <div className={styles.box}>
                                <div className={styles.container}>
                                    <Window setOpenDelete={setOpenDelete}/>
                                    <Recommendations />
                                </div>
                            </div>
                            <Modal openAdd={openAdd}
                                   openDelete={openDelete}
                                   handleOpen={handleOpen}
                                   handleClose={handleClose}
                            >
                                {openAdd && <Aplication handleClose={handleClose}/>}
                                {openDelete && <DeleteAplication handleClose={handleClose}/>}
                            </Modal>
                        </>
                    )}
                </main>
            </MasterProvider>
    );
}
