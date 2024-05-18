'use client';

import styles from "./page.module.css";
import Window from "@/components/window/window";
import Panel from "@/components/panel/panel";
import {useState} from "react";
import Modal from "@/components/modal/modal";
import Aplication from "@/components/aplication/aplication";
import DeleteAplication from "@/components/delete-aplication/delete-aplication";
import Recommendations from "@/components/recommendations/recommendations";
import Preloader from "@/components/preloader/preloader";
import MasterProvider from "@/provider/master-provider";

export default function Home() {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <MasterProvider setIsLoading={setIsLoading}>
            <main className={styles.main}>
                {isLoading ? <Preloader/> : (
                    <>
                        <Panel/>
                        <div className={styles.box}>
                            <div className={styles.container}>
                                <Recommendations/>
                                <Window />
                            </div>
                        </div>
                        <Modal/>
                    </>
                )}
            </main>
        </MasterProvider>
    );
}
