import React from "react";

export type TData = {
    title: string,
    author: string,
    year: number | undefined,
    rate: number | undefined,
    number?: string,
    authorSecond?: string,
    image?: string
}

export type TModalProps = {
    children: React.ReactNode
    open: boolean,
    handleClose: () => void,
}

export type TOverlayProps = {
    open: boolean,
    handleClose: () => void,
}