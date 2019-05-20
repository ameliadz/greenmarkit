import React from "react";
import { Route } from "react-router-dom";
import VendorsList from "./VendorsList";
import VendorUpdate from "../VendorUpdate/VendorUpdate";

export default function Vendors({ match }) {
  return (
    <div className="vendors">
      <Route exact path={match.path} render={() => <VendorsList />} />
      <Route
        path={`${match.path}/:id`}
        render={({ match }) => <VendorUpdate id={match.params.id} />}
      />
    </div>
  );
}
