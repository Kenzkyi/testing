import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const nominatimUrl = "https://nominatim.openstreetmap.org/reverse";
  const userAgent = "divest-admin-dashboard/2.0";

  const onSucces = (arg0: GeolocationPosition) => {
    console.log("res", arg0.coords);
  };

  const onError = (arg0: GeolocationPositionError) => {
    alert(arg0.message);
    console.log("error", arg0.message);
  };
  const locationSetter = async () => {
    navigator.geolocation.getCurrentPosition(onSucces, onError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 30,
    });
    try {
      const params = {
        format: "jsonv2",
        lat: 6.524379,
        lon: 3.379206,
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
