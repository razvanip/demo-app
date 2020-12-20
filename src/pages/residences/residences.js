import React from "react";
import { useQuery } from "@apollo/client";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import GET_RESIDENCES from "../../apollo/queries/residences";
import selectResidences from "../../selectors/residences";

const Residences = () => {
  const { loading, error, data } = useQuery(GET_RESIDENCES);
  if (loading) return <div>loading</div>;
  if (error) return <div>error getting residences</div>;

  const residences = selectResidences(data);
  // todo: can improve to show clusters, center the biggest cluster maybe ?, add a custom marker ?, set get lat long based on zipcode `lat` `long`
  return (
    <GoogleMap defaultZoom={1} defaultCenter={{ lat: 34.397, lng: 150.644 }}>
      {residences.map(({ id, latitude: lat, longitude: lng }) => {
        return <Marker key={id} position={{ lat: +lat, lng: +lng }} />;
      })}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Residences));
