import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address 1" source="address_1" />
        <TextField label="City" source="city" />
        <TextField label="ID" source="id" />
        <TextField label="State" source="state" />
        <TextField label="Zip" source="zip" />
      </SimpleShowLayout>
    </Show>
  );
};
