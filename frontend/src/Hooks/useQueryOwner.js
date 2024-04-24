import { useEffect, useState } from "react";

const useQueryOwner = (id) => {
  const [owner, setOwner] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      getOwner();
    }
  }, []);

  const getOwner = async () => {
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:4000/owners/${id}`);
      const result = await response.json();
      setOwner(result);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return {
    owner,
    loading,
  };
};

export default useQueryOwner;
