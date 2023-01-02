const HOST =
  import.meta.env.VITE_API_HOST || `localhost:${import.meta.env.VITE_API_PORT}`;
const PROTOCOL = import.meta.env.VITE_API_PROTOCOL || "http";

const fetchOrders = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${PROTOCOL}://${HOST}/orders`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchOrders;
