import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address 1" source="address_1" />
        <TextField label="City" source="city" />
        <TextField label="ID" source="id" />
        <TextField label="State" source="state" />
        <TextField label="Zip" source="zip" />
      </Datagrid>
    </List>
  );
};
