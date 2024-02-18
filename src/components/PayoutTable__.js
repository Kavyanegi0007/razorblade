import {
  Table,
  
  Box,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TableToolbar,
  TableToolbarActions,
  Button,
} from "@razorpay/blade/components";
import React from "react";
import data from "./data";

function PayoutTable() {
  return (
    <Box
      backgroundColor="surface.background.gray.intense"
      minHeight="400px"
      overflow="auto"
      padding="spacing.5"
    >
      <Table
        data={{
          nodes: data,
        }}
        onSelectionChange={function noRefCheck() {}}
        onSortChange={function noRefCheck() {}}
        pagination={
          <TablePagination
            defaultPageSize={10}
            onPageChange={function noRefCheck() {}}
            onPageSizeChange={function noRefCheck() {}}
            showPageNumberSelector
            showPageSizePicker
          />
        }
        rowDensity="normal"
        selectionType="none"
        sortFunctions={{
          AMOUNT: function noRefCheck() {},
          DATE: function noRefCheck() {},
          ID: function noRefCheck() {},
          PAYMENT_ID: function noRefCheck() {},
          STATUS: function noRefCheck() {},
        }}
        toolbar={
          <TableToolbar
            selectedTitle="Showing 1-10 [Items]"
            title="Showing 1-10 [Items]"
          >
            <TableToolbarActions>
              <Button marginRight="spacing.2" variant="secondary">
                Export
              </Button>
              <Button>Refund</Button>
            </TableToolbarActions>
          </TableToolbar>
        }
      />
    </Box>
  );
}

export default PayoutTable;
