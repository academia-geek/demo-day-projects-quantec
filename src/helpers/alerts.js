import { toast } from "react-toastify";

export const alertPointsSuccess = () => {
    toast.success('😃 Haz ganado 5 puntos de Exp!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}
export const alertPointsError = () => {
    toast.error('😔 Haz perdido 5 puntos de Exp!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}