
import axios from 'axios';

const BASE_API_URL = 'https://test.create.diagnal.com/data';

export const fetchData = async (page) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/page${page}.json`);
    return [response.data?.page['content-items'].content,response.data?.page?.title];
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
