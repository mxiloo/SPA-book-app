import React, {PropsWithChildren} from "react";

export type TModalProps = {
    children: React.ReactNode
    openAdd: boolean,
    handleClose: () => void,
    handleOpen: () => void
    openDelete: boolean,
}