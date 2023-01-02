const fetchOrders = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("http://localhost:3001/orders", options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchOrders;
