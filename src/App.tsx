import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const nominatimUrl = "https://nominatim.openstreetmap.org/reverse";
  const userAgent = "divest-admin-dashboard/2.0";
  const locationSetter = async () => {
    try {
      const params = {
        format: "jsonv2",
        lat: -34.44076,
        lon: -58.70521,
      };

      const response = await axios.get(nominatimUrl, {
        params,
        headers: {
          "User-Agent": userAgent,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    locationSetter();
  }, []);
  return <div>App</div>;
};

export default App;
