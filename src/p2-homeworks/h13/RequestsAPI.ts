import axios from "axios";

export const requestApi = {
    setSucces(isChecked: boolean) {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: isChecked},)
    }
}