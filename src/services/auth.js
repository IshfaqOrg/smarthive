import axios from 'axios'
import themeConfig from '../configs/themeConfig'
// const baseUrl = "http://localhost:3001"

export const registerByAuth = async (data) => {
    console.log("method call", data)
    const response = await axios.post(
        `${themeConfig.baseUrl}/api/v1/auth/signup`,
        data
    )
    return response.data

}