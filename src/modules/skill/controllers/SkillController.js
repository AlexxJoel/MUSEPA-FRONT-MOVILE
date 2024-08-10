import AxiosClient from "../../../kernel/Axios";

export const getCurrentEvents = async () => {
    try {
        const response = await AxiosClient.get(`/get_current_events`)
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getEventDetails = async (eventName) => {
    try {
        const response = await AxiosClient.get(`/get_event_details?event_name=${eventName}`)
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getEventsByDate = async (eventDate) => {
    try {
        const response = await AxiosClient.get(`/get_events?date=${eventDate}`)
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getMuseumDetails = async () => {
    try {
        const response = await AxiosClient.get(`/get_museum_details`)
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getWorkDetails = async (workName) => {
    try {
        const response = await AxiosClient.get(`/get_work_details?work_name=${workName}`)
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getWorksList = async (page, size) => {
    try {
        const response = await AxiosClient.get(`/get_works?page=${page}&size=${size}`)
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}